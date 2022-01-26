/* eslint-disable */
import Button from '@enact/sandstone/Button';
import kind from '@enact/core/kind';
import {Panel, Header} from '@enact/sandstone/Panels';
import Switch from '@enact/sandstone/Switch';
import Dropdown from '@enact/sandstone/Dropdown';
import TimePicker from '@enact/sandstone/TimePicker';
import { useState } from 'react';
import './MainPanel.style.css'
import LS2Request from '@enact/webos/LS2Request'

var webOSBridge = new LS2Request();

const onToastSuccess = (msg) => {
	console.log(msg);
}

const onToastFailure = (msg) => {
	console.log(msg);
}

/* https://webos-supporters.tistory.com/21?category=965018
LS2 API 호출하기
*/
const creatToast = () => {
	var parms = {
		"message": "This is Toast Alarm"
	}

	var lsRequest = {
		"service":"luna://com.webos.notification",
		"method":"createToast",
		"parameters": parms,
		"onSuccess": onToastSuccess,
		"onFailure": onToastFailure
	}
	webOSBridge.send(lsRequest);
}

function TextOnOff() {
	let [isSelected, isSelectedChange] = useState(false);
	return (
		<>
		<div>
			<span>
				<Switch onToggle={ (e)=>{isSelectedChange(e.selected); console.log(isSelected)}}/>
			</span>
			<span>
				{
					isSelected === true
					? <span>Turn On </span>
					: <span>Turn Off </span>
				}
			</span>
		</div>
		</>
	)
}

function ReserveOnOff() {
	let [isSelected, isSelectedChange] = useState(false);
	return (
		<>
		<div>
			<span>
				<Switch onToggle={ (e) => {isSelectedChange(e.selected); console.log(isSelected)}}/>
			</span>
			<span>
				{
					isSelected === true
					? <span>Reserve On </span>
					: <span>Reserve Off </span>
				}
			</span>
		</div>
		</>
	)
}

const MainPanel = kind({
	name: 'MainPanel',

	render: (props) => (
		<Panel {...props}>
			<Header title="IOT Dashbord" />
			<div className='main-container'>
				<div className='temp-box box-three'>
					<div>
						<Dropdown
							className='down'
							defaultSelected={0}
							inline
							title="공간을 선택하세요(Light)">
							{['거실', '안방', '침실1', '침실2', '부엌', '서재']}
						</Dropdown>
					</div>
				</div>

				<div className='temp-box box-four'>
					<div>
						<TextOnOff></TextOnOff>
					</div>
					<div>
						<ReserveOnOff></ReserveOnOff>
					</div>
					<div className='time-picker'>
						<TimePicker
							defaultValue={new Date()}
							//value = {new Date()}
							label = {"webOS's Time"}
						/>
					</div>
					<div>
						<Button onClick={creatToast}>send Toast Alarm</Button>
					</div>

				</div>
			</div>
		</Panel>
	)
});

export default MainPanel;

import React from "react";
import { useState } from "react";
import Panel2 from "./Panel2";
import Panel2Admin from "./Panel2Admin";
import Panel2Default from "./Panel2Default";
import Table from "./Table";

const UserForm1 = () => {
	const [panel , setPanel] = useState('default');
	function handlePanel2(){
		switch(panel){
			case 'admin':
				return <Panel2Admin />
			case 'login':
				return <Panel2 />
				case 'table':
					return <Table />
			default:
				return <Panel2Default />
		}
	}

	const changePanel = (newPanel) => {
		setPanel(newPanel);
	};

	return (
		<div className="flex items-center">
			<div className="bg-blue-600 min-h-screen w-4/12">
				<div className="text-2xl text-white pt-10 pl-12">STARTGLOBAL</div>
				<div className="text-5xl font-semibold text-white font-poppins pl-12 pt-16 leading-snug">
					Let's setup <br />
					your Operating <br />
					Agreement
				</div>
				<div className="text-white/80 text-md pl-12 pt-6">
					{" "}
					All in one solution to for your business in the state. <br /> Form a
					new company from scratch or onboard your <br /> existing US company.
				</div>
				<div className="pl-12 pt-10 w-100 rounded-">
					<img src="review.png" alt="" />
					<div className="flex items-center gap-2 mt-3">
						<button type="button" onClick={() => changePanel('login')} className="bg-blue-400 px-8 py-2 rounded-md ">Login</button>
						<button type="button" onClick={() => changePanel('admin')} className="bg-blue-400 px-8 py-2 rounded-md ">Admin</button>
						<button type="button" onClick={() => changePanel('table')} className="bg-blue-400 px-8 py-2 rounded-md ">Table</button>

					</div>
				</div>
			</div>
			<div className="min-h-screen w-3/5 bg-white pt-20  pl-28">
				{handlePanel2()}
			</div>
		</div>
	);
};

export default UserForm1;

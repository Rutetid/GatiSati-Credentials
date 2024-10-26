import React from "react";

const Login = () => {
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
				<div className="pl-12 pt-16 w-100 rounded-">
					<img src="review.png" alt="" />
				</div>
			</div>
			<div className="min-h-screen w-3/5 bg-white pt-20  pl-28">
				<div className="font-semibold text-3xl">Let's get started</div>
				<div className="text-black/80">
					<div className="pt-12">
						<div className="font-md pb-2">Name of Officer</div>
						<input
							type="text"
							className="border-2 border-gray-200 w-96 h-10 rounded-md px-2"
						/>
					</div>

					<div className="pt-3">
						<div className="font-md pb-2">Department Name</div>
						<input
							type="text"
							className="border-2 border-gray-200 w-96 h-10 rounded-md px-2"
						/>
					</div>

					<div className="pt-3">
						<div className="font-md pb-2">Designation</div>
						<input
							type="text"
							className="border-2 border-gray-200 w-96 h-10 rounded-md px-2"
						/>
					</div>

					<div className="pt-3">
						<div className="font-md pb-2">Govt. Mail ID</div>
						<input
							type="text"
							className="border-2 border-gray-200 w-96 h-10 rounded-md px-2"
						/>
					</div>

					<div className="pt-3">
						<div className="font-md pb-2">Mobile Number</div>
						<input
							type="text"
							className="border-2 border-gray-200 w-96 h-10 rounded-md px-2"
						/>
					</div>

					<div className="pt-3">
						<div className="font-md pb-2">Problem Statement</div>
						<input
							type="text"
							className="border-2 border-gray-200 w-96 h-10 rounded-md px-2"
						/>
					</div>

					<div className="bg-blue-600 w-96 h-10 rounded-md flex justify-center items-center font-poppins font-md text-white mt-4"> GET STARTED</div>
				</div>
			</div>
		</div>
	);
};

export default Login;

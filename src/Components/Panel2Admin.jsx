import React from "react";

const Panel2Admin = () => {
	return (
		<div>
			<div className="font-semibold text-3xl">Admin Panel</div>
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

				<div className="bg-blue-600 w-96 h-10 rounded-md flex justify-center items-center font-poppins font-md text-white mt-4">
					{" "}
					GET STARTED
				</div>
			</div>
		</div>
	);
};

export default Panel2Admin;
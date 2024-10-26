import React from "react";
import { useFormik } from "formik";

const Panel2 = () => {
	const formik = useFormik({
		initialValues: {
			name: "",
			department: "",
			designation: "",
			email: "",
			mobile: "",
			problem: "",
		},
		onSubmit: (values) => {
			const data = { ...values};
            
            console.log(data);
		},
	});
	return (
		<div>
			<div className="font-semibold text-3xl">Let's get started</div>
			<div className="text-black/80">
				<form onSubmit={formik.handleSubmit}>
					<div className="pt-12">
						<div className="font-md pb-2">Name of Officer</div>
						<input
							type="text"
							className="border-2 border-gray-200 w-96 h-10 rounded-md px-2"
							onChange={formik.handleChange}
							value={formik.values.name}
							name="name"
						/>
					</div>

					<div className="pt-3">
						<div className="font-md pb-2">Department Name</div>
						<input
							type="text"
							className="border-2 border-gray-200 w-96 h-10 rounded-md px-2"
							onChange={formik.handleChange}
							value={formik.values.department}
							name="department"
						/>
					</div>

					<div className="pt-3">
						<div className="font-md pb-2">Designation</div>
						<input
							type="text"
							className="border-2 border-gray-200 w-96 h-10 rounded-md px-2"
							onChange={formik.handleChange}
							value={formik.values.designation}
							name="designation"
						/>
					</div>

					<div className="pt-3">
						<div className="font-md pb-2">Govt. Mail ID</div>
						<input
							type="text"
							className="border-2 border-gray-200 w-96 h-10 rounded-md px-2"
							onChange={formik.handleChange}
							value={formik.values.email}
							name="email"
						/>
					</div>

					<div className="pt-3">
						<div className="font-md pb-2">Mobile Number</div>
						<input
							type="text"
							className="border-2 border-gray-200 w-96 h-10 rounded-md px-2"
							onChange={formik.handleChange}
							value={formik.values.mobile}
							name="mobile"
						/>
					</div>

					<div className="pt-3">
						<div className="font-md pb-2">Problem Statement</div>
						<input
							type="text"
							className="border-2 border-gray-200 w-96 h-10 rounded-md px-2"
							onChange={formik.handleChange}
							value={formik.values.problem}
							name="problem"
						/>
					</div>

					<button
						type="submit"
						className="bg-blue-600 w-96 h-10 rounded-md flex justify-center items-center font-poppins font-md text-white mt-4"
					>
						{" "}
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};

export default Panel2;

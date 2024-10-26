import React from "react";

const Table = () => {
    
	return (
		<div className=" w-[600px] pl-20 flex justify-center">
            
			<div className="">
                <span className="justify-center">Table Title</span>
				<table className="table-auto  ">
                    
					<thead className="font-poppins font-semibold">
						<tr>
							<th className="px-2 py-2 border">S.no</th>
							<th className="px-4 py-2 border">Name</th>
							<th className="px-4 py-2 border">Department</th>
							<th className="px-4 py-2 border">Designation</th>
							<th className="px-4 py-2 border">Email</th>
							<th className="px-4 py-2 border">Mobile</th>
							<th className="px-4 py-2 border">Problem</th>
						</tr>
					</thead>

					<tbody>
						<tr>
							<td class="px-2 py-2 border">1</td>
							<td class="px-4 py-2 border">John Doe</td>
							<td class="px-4 py-2 border">Engineering</td>
							<td class="px-4 py-2 border">Software Engineer</td>
							<td class="px-4 py-2 border">john.doe@example.com</td>
							<td class="px-4 py-2 border">123-456-7890</td>
							<td class="px-4 py-2 border">System crash</td>
						</tr>
						<tr>
							<td class="px-2 py-2 border">2</td>
							<td class="px-4 py-2 border">Jane Smith</td>
							<td class="px-4 py-2 border">Human Resources</td>
							<td class="px-4 py-2 border">HR Manager</td>
							<td class="px-4 py-2 border">jane.smith@example.com</td>
							<td class="px-4 py-2 border">987-654-3210</td>
							<td class="px-4 py-2 border">Payroll issue</td>
						</tr>
						<tr>
							<td class="px-2 py-2 border">3</td>
							<td class="px-4 py-2 border">Mike Johnson</td>
							<td class="px-4 py-2 border">Finance</td>
							<td class="px-4 py-2 border">Accountant</td>
							<td class="px-4 py-2 border">mike.johnson@example.com</td>
							<td class="px-4 py-2 border">555-123-4567</td>
							<td class="px-4 py-2 border">Budget discrepancy</td>
						</tr>
						<tr>
							<td class="px-2 py-2 border">4</td>
							<td class="px-4 py-2 border">Emily Brown</td>
							<td class="px-4 py-2 border">Marketing</td>
							<td class="px-4 py-2 border">Content Strategist</td>
							<td class="px-4 py-2 border">emily.brown@example.com</td>
							<td class="px-4 py-2 border">444-789-0123</td>
							<td class="px-4 py-2 border">Campaign delay</td>
						</tr>
						<tr>
							<td class="px-2 py-2 border">5</td>
							<td class="px-4 py-2 border">Robert Green</td>
							<td class="px-4 py-2 border">IT Support</td>
							<td class="px-4 py-2 border">Technician</td>
							<td class="px-4 py-2 border">robert.green@example.com</td>
							<td class="px-4 py-2 border">321-654-9870</td>
							<td class="px-4 py-2 border">Network issues</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Table;

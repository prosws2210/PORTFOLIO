import React, { useState } from "react";

function CollegeAdmissionForm() {
	const [step, setStep] = useState(1);
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		dateOfBirth: "",
		gender: "",
		fatherName: "",
		motherName: "",
		addressLine1: "",
		addressLine2: "",
		city: "",
		state: "",
		zip: "",
		paymentMethod: "",
		cardNumber: "",
		expirationDate: "",
		cvv: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		let isValid = true;

		// Add validation rules
		if (
			name === "firstName" ||
			name === "lastName" ||
			name === "fatherName" ||
			name === "motherName"
		) {
			const regex = /^[a-zA-Z\s]*$/;
			isValid = regex.test(value);
		} else if (name === "zip") {
			const regex = /^[0-9]{6}$/;
			isValid = regex.test(value);
		}

		if (isValid) {
			setFormData({ ...formData, [name]: value });
		} else {
			console.log(`Invalid input for ${name}`);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Submit form data
		console.log("Form submitted:", formData);
	};

	const nextStep = () => {
		setStep((prevStep) => prevStep + 1);
	};

	const prevStep = () => {
		setStep((prevStep) => prevStep - 1);
	};

	return (
		<div className="max-w-md mx-auto min-h-screen flex flex-col justify-center items-center">
			<h1 className="text-2xl font-bold text-center mb-4">
				College Admission Form
			</h1>
			<form onSubmit={handleSubmit}>
				{step === 1 && (
					<div>
						<label htmlFor="firstName" className="block mb-2">
							First Name:
						</label>
						<input
							type="text"
							id="firstName"
							name="firstName"
							value={formData.firstName}
							onChange={handleChange}
							className="block w-full border-gray-300 rounded-md p-2 mb-4"
							required
						/>

						<label htmlFor="lastName" className="block mb-2">
							Last Name:
						</label>
						<input
							type="text"
							id="lastName"
							name="lastName"
							value={formData.lastName}
							onChange={handleChange}
							className="block w-full border-gray-300 rounded-md p-2 mb-4"
							required
						/>

						<label htmlFor="dateOfBirth" className="block mb-2">
							Date of Birth:
						</label>
						<input
							type="date"
							id="dateOfBirth"
							name="dateOfBirth"
							value={formData.dateOfBirth}
							onChange={handleChange}
							className="block w-full border-gray-300 rounded-md p-2 mb-4"
							required
						/>

						<label htmlFor="gender" className="block mb-2">
							Gender:
						</label>
						<select
							id="gender"
							name="gender"
							value={formData.gender}
							onChange={handleChange}
							className="block w-full border-gray-300 rounded-md p-2 mb-4"
							required
						>
							<option value="">Select Gender</option>
							<option value="male">Male</option>
							<option value="female">Female</option>
							<option value="other">Other</option>
						</select>
					</div>
				)}
				{step === 2 && (
					<div>
						<label htmlFor="fatherName" className="block mb-2">
							Father's Name:
						</label>
						<input
							type="text"
							id="fatherName"
							name="fatherName"
							value={formData.fatherName}
							onChange={handleChange}
							className="block w-full border-gray-300 rounded-md p-2 mb-4"
							required
						/>
						<label htmlFor="motherName" className="block mb-2">
							Mother's Name:
						</label>
						<input
							type="text"
							id="motherName"
							name="motherName"
							value={formData.motherName}
							onChange={handleChange}
							className="block w-full border-gray-300 rounded-md p-2 mb-4"
							required
						/>
						<label htmlFor="addressLine1" className="block mb-2">
							Address Line 1:
						</label>
						<input
							type="text"
							id="addressLine1"
							name="addressLine1"
							value={formData.addressLine1}
							onChange={handleChange}
							className="block w-full border-gray-300 rounded-md p-2 mb-4"
							required
						/>
						<label htmlFor="addressLine2" className="block mb-2">
							Address Line 2:
						</label>
						<input
							type="text"
							id="addressLine2"
							name="addressLine2"
							value={formData.addressLine2}
							onChange={handleChange}
							className="block w-full border-gray-300 rounded-md p-2 mb-4"
						/>
						<label htmlFor="city" className="block mb-2">
							City:
						</label>
						<input
							type="text"
							id="city"
							name="city"
							value={formData.city}
							onChange={handleChange}
							className="block w-full border-gray-300 rounded-md p-2 mb-4"
							required
						/>
						<label htmlFor="state" className="block mb-2">
							State:
						</label>
						<input
							type="text"
							id="state"
							name="state"
							value={formData.state}
							onChange={handleChange}
							className="block w-full border-gray-300 rounded-md p-2 mb-4"
							required
						/>
						<label htmlFor="zip" className="block mb-2">
							Zip Code:
						</label>
						<input
							type="text"
							id="zip"
							name="zip"
							value={formData.zip}
							onChange={handleChange}
							className="block w-full border-gray-300 rounded-md p-2 mb-4"
							required
						/>
					</div>
				)}
				{step === 3 && (
					<div>
						<label htmlFor="paymentMethod" className="block mb-2">
							Payment Method:
						</label>
						<select
							id="paymentMethod"
							name="paymentMethod"
							value={formData.paymentMethod}
							onChange={handleChange}
							className="block w-full border-gray-300 rounded-md p-2 mb-4"
							required
						>
							<option value="">Select Payment Method</option>
							<option value="credit">Credit Card</option>
							<option value="debit">Debit Card</option>
						</select>
						<label htmlFor="cardNumber" className="block mb-2">
							Card Number:
						</label>
						<input
							type="text"
							id="cardNumber"
							name="cardNumber"
							value={formData.cardNumber}
							onChange={handleChange}
							className="block w-full border-gray-300 rounded-md p-2 mb-4"
							required
						/>
						<label htmlFor="expirationDate" className="block mb-2">
							Expiration Date:
						</label>
						<input
							type="text"
							id="expirationDate"
							name="expirationDate"
							value={formData.expirationDate}
							onChange={handleChange}
							className="block w-full border-gray-300 rounded-md p-2 mb-4"
							required
						/>
						<label htmlFor="cvv" className="block mb-2">
							CVV:
						</label>
						<input
							type="text"
							id="cvv"
							name="cvv"
							value={formData.cvv}
							onChange={handleChange}
							className="block w-full border-gray-300 rounded-md p-2 mb-4"
							required
						/>
					</div>
				)}
				<div className="flex justify-between">
					{step > 1 && (
						<button
							type="button"
							onClick={prevStep}
							className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md mr-2"
						>
							Previous
						</button>
					)}
					{step < 3 ? (
						<button
							type="button"
							onClick={nextStep}
							className="bg-blue-500 text-white px-4 py-2 rounded-md"
						>
							Next
						</button>
					) : (
						<button
							type="submit"
							className="bg-blue-500 text-white px-4 py-2 rounded-md"
						>
							Submit
						</button>
					)}
				</div>
				<div className="flex justify-center mt-4">
					<div className="flex">
						{[1, 2, 3].map((s) => (
							<div
								key={s}
								className={`w-4 h-4 rounded-full mx-2 ${
									s === step ? "bg-blue-500" : "bg-gray-300"
								}`}
							></div>
						))}
					</div>
				</div>
			</form>
		</div>
	);
}

export default CollegeAdmissionForm;

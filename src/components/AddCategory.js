import React, {useState} from "react";
import PropTypes from "prop-types";

const AddCategory = ({setCategories}) => {
	const [inputValue, setInputValue] = useState("");

	const handleInputChange = (event) => {
		setInputValue(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		if (inputValue.trim().length > 2) {
			setCategories((categories) => [inputValue, ...categories]);
			setInputValue("");
		} else console.log("The category must have at least 3 characters");
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<div className="container-input">
					<input
						type="text"
						value={inputValue}
						placeholder="Add a category"
						onChange={handleInputChange}
					/>
				</div>
				<hr style={{width: "67%", borderColor:"white"}}/>
			</div>
		</form>
	);
};

AddCategory.prototype = {
	setCategories: PropTypes.func.isRequired,
};

export {AddCategory};

import React from "react";
import {AddCategory} from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = ({defaultCategories = []}) => {
	const [categories, setCategories] = React.useState(defaultCategories);

	return (
		<>
			<div className="header">
				<h1>🦆 Gif Expert App 👽</h1>
				<AddCategory setCategories={setCategories} />
			</div>
			{
				// categories is an array of strings (categories)
				categories.map((category, index) => {
					//key is important to avoid bugs, never use index as key in arrays or objects (it's not unique)
					//category is the value of the array item (string)
          category = category.charAt(0).toUpperCase() + category.slice(1).toLowerCase()
          return <GifGrid key={index} category={category} />;
				})
			}
			<div className="footer">
				<p>Created by: Brandon Velásquez</p>
			</div>
		</>
	);
};

export {GifExpertApp};

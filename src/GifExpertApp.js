import React from "react";
import {AddCategory} from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

export const GifExpertApp = () => {
	const [categories, setCategories] = React.useState(["Dragon Ball"]);

	return (
		<>
			<h1>Gif Expert App</h1>
			<AddCategory setCategories={setCategories} />
			<hr />
			<ol>
				{
					// categories is an array of strings (categories)
					categories.map((category, index) => (
						//key is important to avoid bugs, never use index as key in arrays or objects (it's not unique)
						//category is the value of the array item (string)
						<GifGrid key={category} category={category} />
					))
				}
			</ol>
		</>
	);
};

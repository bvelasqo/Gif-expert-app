import React from "react";
import PropTypes from "prop-types";
import {useFetchGifs} from "../hooks/useFetchGifs";
import {GifGridItem} from "./GifGridItem";

const GifGrid = ({category}) => {
	const {data: gifs, loading} = useFetchGifs(category);

	return (
		<div className="main_gif_grid">
			<h2 className="animate__animated animate__bounceIn category">{category}</h2>
			{/* loading con && */}
			{loading && <p>Loading...</p>}
			{/* loading con || */}
			{loading ? (
				<div key={1} id="loading" className="animate__animated animate__flash">
					<img
						src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
						alt="loading"
					/>
				</div>
			) : (
				<div key={2} className="gif_grid">
					{gifs.map((image) => (
						<>
							<GifGridItem key={image.id} {...image} />
						</>
					))}
				</div>
			)}
		</div>
	);
};

GifGrid.prototype = {
	category: PropTypes.string.isRequired,
};

export default GifGrid;

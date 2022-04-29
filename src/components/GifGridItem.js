import React from "react";
import PropTypes from "prop-types";

const GifGridItem = ({id, title, url}) => {
	return (
		<div className="gif_item animate__animated animate__zoomIn">
			<img
				key={id}
				src={url}
				alt={title}
				className="gif animate__animated animate__zoomIn"
			/>
			<p className="title_image animate__animated animate__zoomIn animate__delay">{title}</p>
		</div>
	);
};

GifGridItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export {GifGridItem};
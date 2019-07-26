import React from "react";
import PropTypes from "prop-types";

export default function RefreshButton(props) {
	return (
		<div>
			<button className="btn btn-danger" onClick={props.refresh} />
		</div>
	);
}
RefreshButton.propTypes = {
	refresh: PropTypes.func
};

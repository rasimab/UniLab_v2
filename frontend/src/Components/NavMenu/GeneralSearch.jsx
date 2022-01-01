import React, { useState, useEffect } from "react";
// STYLES
import "./GeneralSearch.css";
// IMAGES
import search_icon from "../../Assets/img/top-nav/search.png";
import CloseButton from "../Buttons/CloseButton";

export default function GeneralSearch(props) {
	const user = props.user;
	const [searchClass, overlayClass] = props.searchClasses;
	const setSearchClasses = props.setSearchClasses;
	return (
		<>
			<div className={`overlay ${overlayClass}`} onClick={setSearchClasses}></div>
			<form className={`search-wrapper ${searchClass} shadow flex-row a-i-c j-c-c`}>
				<img id="search-icon" src={search_icon} alt="Magnifying Glass" title="Search" />

				<input
					className={`search-field noshadow`}
					name="main-search"
					type="search"
					placeholder="Search UniLab..."
				/>

				<CloseButton clickEvent={setSearchClasses} position="relative" borderRadius="50%" />
			</form>
		</>
	);
}

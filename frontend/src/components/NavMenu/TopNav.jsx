import React, { useState, useEffect } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";

import "../../scripts/main.jsx";
import * as top_nav from "../../scripts/top_nav.jsx";
// IMAGES
import logo from "../../img/unilab_logo.png";
import home_icon from "../../img/top-nav/address2.png";
import community_icon from "../../img/top-nav/community.png";
import companies_icon from "../../img/top-nav/employers.png";
import jobs_icon from "../../img/top-nav/jobs.svg";
import about_icon from "../../img/top-nav/about.png";
import profile_icon from "../../img/top-nav/profile.png";
import search_icon from "../../img/top-nav/search.png";

function Navbar(props) {
    const user = props.user
    return (
        <nav className="top-nav flex-row a-i-c shadow">

            {/*LOGO*/}
            <NavLink to='/' id="logo-link" className="top-nav-item flex-row a-i-c">
                <img id="logo-img" className="top-nav-image" src={logo} alt="UniLab Logo"
                    title="Home" />
            </NavLink>

            {/*MOBILE*/}
            <div className="menu-mobile" onClick={top_nav.open_linebar} />

            {/*MENU*/}
            <div className="top-nav-container">

                {/*HOME BUTTON*/}
                <NavLink to="/" className="top-nav-item flex-row a-i-c" onMouseOver={() => top_nav.fill_items(0)}
                    onMouseOut={() => top_nav.cancel_items(0)}>
                    <div className="top-nav-item-filler flex-row a-i-c" />
                    <img className="top-nav-image" src={home_icon} alt="Home Icon" />
                    {/*{# Translators: Start of Navigation bar #}*/}
                    <div id="home-button" className="top-nav-item-text">
                        {/*{% translate "Home" context "this is the navbar"%}*/}
                        Home
                    </div>
                </NavLink>

                {/*COMMUNITY BUTTON*/}
                <NavLink to="/community" className="top-nav-item flex-row a-i-c" onMouseOver={() => top_nav.fill_items(1)}
                    onMouseOut={() => top_nav.cancel_items(1)}>
                    <div className="top-nav-item-filler flex-row a-i-c" />
                    <img className="top-nav-image" src={community_icon} alt="Community Icon" />
                    <div id="community-button" className="top-nav-item-text">
                        {/*{% translate "Community"%}*/}
                        Community
                    </div>
                </NavLink>

                {/*COMPANIES BUTTON*/}
                <NavLink to="/companies" className="top-nav-item flex-row a-i-c" onMouseOver={() => top_nav.fill_items(2)}
                    onMouseOut={() => top_nav.cancel_items(2)}>
                    <div className="top-nav-item-filler flex-row a-i-c" />
                    <img className="top-nav-image" src={companies_icon} alt="Companies Icon" />
                    <div id="employers-button" className="top-nav-item-text">
                        {/*{% translate "Companies"%}*/}
                        Companies
                    </div>
                </NavLink>

                {/*JOBS BUTTON*/}
                <NavLink to="/jobs" className="top-nav-item flex-row a-i-c" onMouseOver={() => top_nav.fill_items(3)}
                    onMouseOut={() => top_nav.cancel_items(3)}>
                    <div className="top-nav-item-filler flex-row a-i-c" />
                    <img className="top-nav-image" src={jobs_icon} alt="Jobs Icon" />
                    <div id="jobs-button" className="top-nav-item-text">
                        {/*{% translate "Jobs"%}*/}
                        Jobs
                    </div>

                </NavLink>

                {/*ABOUT BUTTON*/}
                <NavLink to="/about" className="top-nav-item flex-row a-i-c" onMouseOver={() => top_nav.fill_items(4)}
                    onMouseOut={() => top_nav.cancel_items(4)}>
                    <div className="top-nav-item-filler flex-row a-i-c" />
                    <img className="top-nav-image" src={about_icon} alt="About Icon" />
                    <div id="about-button" className="top-nav-item-text">
                        {/*{% translate "About"%}*/}
                        About
                    </div>
                </NavLink>

                {/*PROFILE BUTTON*/}
                <a className="top-nav-item top-nav-profile flex-row a-i-c" onClick={top_nav.open_profile}>
                    <img id="profile-img" className="top-nav-image" src={user ? user['image'] : profile_icon}
                        alt="Profile Picture" title="Profile" />

                    <div id="profile-text" className="top-nav-item-text">
                        {/*{% translate "Profile"%}*/}
                        Profile
                    </div>
                </a>

                {/*SEARCH BUTTON*/}
                <a className="top-nav-item top-nav-search flex-row a-i-c" onClick={top_nav.show_search}>
                    <img id="search-img" className="top-nav-image" src={search_icon}
                        alt="Magnifying Glass" title="Search" />
                    <div id="search-text" className="top-nav-item-text">
                        {/*{% translate "Search"%}*/}
                        Search
                    </div>
                </a>

                {/*LANGUAGE BUTTON*/}
                <a className="top-nav-item flex-row a-i-c" onClick={top_nav.open_lang}>
                    <img id="lang-img" className="top-nav-image" alt="Locale Country Flag" title="Language" />
                    {/*{# Translators: End of navigation bar #}*/}
                    <div id="search-text" className="top-nav-item-text">
                        {/*{% translate "Language"%}*/}
                        Language
                    </div>
                </a>
            </div>
        </nav>
    )
}

export default Navbar;
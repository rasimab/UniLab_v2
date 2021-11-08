import React, { useState, useEffect } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";

import "../../scripts/main.jsx";
// IMAGES
import english_icon from "../../img/languages/en.webp";
import spanish_icon from "../../img/languages/es.webp";
import german_icon from "../../img/languages/de.webp";
import russian_icon from "../../img/languages/ru.webp";
import french_icon from "../../img/languages/fr.webp";

function SideLanguageMenu(props) {
    return (
        <aside className="language-menu shadow">

            <button className="language-close-button close-button" onclick="open_lang()"></button>

            <h2>Select Language</h2>

            <a className="language-links" onclick="set_lang_cookie('en')" href="../en">
                <img src={english_icon} alt="English Flag" />
                <p>English</p>
            </a>

            <a className="language-links" onclick="set_lang_cookie('de')" href="../de">
                <img src={german_icon} alt="German Flag" />
                <p>German</p>
            </a>

            <a className="language-links" onclick="set_lang_cookie('fr')" href="../fr">
                <img src={french_icon} alt="French Flag" />
                <p>French</p>
            </a>

            <a className="language-links" onclick="set_lang_cookie('es')" href="../es">
                <img src={spanish_icon} alt="Spanish Flag" />
                <p>Spanish</p>
            </a>

            <a className="language-links" onclick="set_lang_cookie('ru')" href="../ru">
                <img src={russian_icon} alt="Russian Flag" />
                <p>Russian</p>
            </a>

        </aside>
    )
}

export default SideLanguageMenu;
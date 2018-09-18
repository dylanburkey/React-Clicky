import React from "react";
import "./Nav.css";

const Nav = props => (
    <nav role="banner" className="primary-header">
        <ul>
            <li className="brand animated lightSpeedIn primary-logo">
                <a className="site-logo" href="/clicky-game/">{props.title}</a>
            </li>

            <li id="rw">{props.rightWrong}</li>

            <li id="cur-sco">Current Score: {props.score}</li>

            <li id="top-sco">Top Score: {props.topScore}</li>
        </ul>
    </nav>
);

export default Nav;
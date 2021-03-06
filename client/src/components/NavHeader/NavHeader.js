import React from "react";
import { Link } from "react-router-dom";

const NavHeader = props => (
    <div>
        <nav>
            <div className="nav-wrapper">
                <Link className="brand-logo center" to="/">
                    Woof Pack<i className="large material-icons">pets</i> 
                </Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <Link to="/" className="nav-link">
                            <i className="material-icons">home</i>
                        </Link>
                    </li>
                    <li>
                        <Link to="/profile" className="nav-link">
                            <i className="material-icons">account_box</i>
                        </Link>
                    </li>
                    <li>
                        <Link to="/logout" className="nav-link">
                            Logout 
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
);

export default NavHeader;
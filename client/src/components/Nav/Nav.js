import React from 'react';
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div>
            <ul id="slide-out" className="sidenav sidenav-fixed">
            <li><a class="sidenav-close" href="#!">Clicking this will close Sidenav</a></li>
                <li>
                    <div className="user-view">
                        <div className="background">
                            <img src="https://pics.me.me/woof-woof-give-me-seed-lol-7523100.png" />
                        </div>
                        <a href="#!user"><img className="circle" src="images/yuna.jpg" /></a>
                        <a href="#!name"><span className="white-text name">John Doe</span></a>
                        <a href="#!email"><span className="white-text email">jdandturk@gmail.com</span></a>
                    </div>
                </li>
                <li>
                    <Link to="/profile">
                        Profile
                    </Link>   
                </li>
                <li>
                    <Link to="/findpack">
                        Find Pack
                    </Link>
                </li>
                <li>
                    <Link to="/mypack">
                            My Pack
                    </Link>
                </li>
            </ul>
            <a href="#" data-target="slide-out" className="sidenav-trigger"><i class="material-icons">menu</i></a>
        </div>
    )
}


export default Nav;

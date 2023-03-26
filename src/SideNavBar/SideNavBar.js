import React, { useState } from "react";
import "./SideNavBar.css";

const SideNavBar = () => {
    const [isExpanded, setExpendState] = useState(false);
    const menuItems = [
        {
            text: "Dashboard",

        },

        {
            text: "Admin Profile",

        },

        {
            text: "Messages",

        },

        {
            text: "Global Projects",

        },

        {
            text: "Local Projects",

        },


        {
            text: "File Manager",

        },

        {
            text: "Settings",

        },
    ];
    return (
        <div
            className={
                isExpanded
                    ? "side-nav-container"
                    : "side-nav-container side-nav-container-NX"
            }
        >
            <div className="nav-upper">
                <div className="nav-heading">
                    {isExpanded && (
                        <div className="nav-brand">
                            <img src="icons/Logo.svg" alt="" srcset="" />
                            <h2>Bluechip Technologies</h2>
                        </div>

                    )}
                    <button
                        className={
                            isExpanded ? "hamburger hamburger-in" : "hamburger hamburger-out"
                        }
                        onClick={() => setExpendState(!isExpanded)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
                <div className="nav-menu">
                    {menuItems.map(({ text, icon }) => (
                        <a
                            className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}
                            href="#"
                        >
                         
                            {isExpanded && <p>{text}</p>}
                        </a>
                    ))}
                </div>
            </div>
            <div className="nav-footer">
                {isExpanded && (
                    <div className="nav-details">

                        <div className="nav-footer-info">
                            <p className="nav-footer-user-name">Bluechip</p>
                            <p className="nav-footer-user-position"> Admin</p>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};

export default SideNavBar;
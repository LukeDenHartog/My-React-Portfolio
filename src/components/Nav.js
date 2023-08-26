import React from 'react';

export default function Nav(prop) {
    return (
        <ul className="navbar">
            <li className="nav-list-item" id="aboutId">
                <a 
                    href="#about"
                    onClick={() => prop.handleContentSwitch("About")}
                    className={
                        prop.currentContent === "About"
                    }
                >
                    About me
                </a>
            </li>
            <li className="nav-list-item" id="portfolioId">
                <a
                    href="#Portfolio"
                    onClick={() => prop.handleContentSwitch("Portfolio")}
                    className={
                        prop.currentContent === "Portfolio"
                    }
                >
                    Portfolio
                </a>
            </li>
            <li className="nav-list-item" id="contactId">
                <a
                    href="#Contact"
                    onClick={() => prop.handleContentSwitch("Contact")}
                    className={
                        prop.currentContent === "Contact"
                    }
                >
                    Contact
                </a>
            </li>
            <li className="nav-list-item" id="resumeId">
            <a
                    href="#Resume"
                    onClick={() => prop.handleContentSwitch("Resume")}
                    className={
                        prop.currentContent === "Contact"
                    }
                >
                    Resume
                </a>
            </li>
        </ul>
    );
}
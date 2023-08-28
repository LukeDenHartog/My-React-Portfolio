export default function Nav(prop) {
    return (
        <ul className="navbar">
            <li className="nav-list-item" >
                <a 
                    href="#about"
                    onClick={() => prop.handleContentSwitch("About")}
                    className={prop.currentContent === "About" ? "active" : ""}
                    id="aboutId"
                >
                    About me
                </a>
            </li>
            <li className="nav-list-item" >
                <a
                    href="#Portfolio"
                    onClick={() => prop.handleContentSwitch("Portfolio")}
                    className={prop.currentContent === "Portfolio" ? "active" : ""}
                    id="portfolioId"
                >
                    Portfolio
                </a>
            </li>
            <li className="nav-list-item" >
                <a
                    href="#Contact"
                    onClick={() => prop.handleContentSwitch("Contact")}
                    className={prop.currentContent === "Contact" ? "active" : ""}
                    id="contactId"
                >
                    Contact
                </a>
            </li>
            <li className="nav-list-item" >
                <a
                    href="#Resume"
                    onClick={() => prop.handleContentSwitch("Resume")}
                    className={prop.currentContent === "Resume" ? "active" : ""}
                    id="resumeId"
                >
                    Resume
                </a>
            </li>
        </ul>
    );
}

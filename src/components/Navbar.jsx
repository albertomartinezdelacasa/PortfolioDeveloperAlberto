function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <a href="#inicio" className="navbar-logo">
                    <span>Alberto Portfolio</span>
                </a>
                <ul className="nav-menu">
                    <li className="nav-item">
                        <a href="#inicio" className="nav-link">
                            Inicio
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#proyectos" className="nav-link">
                            Proyectos
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#datos-curiosos" className="nav-link">
                            Datos Curiosos
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#contacto" className="nav-link">
                            Contacto
                        </a>
                    </li>
                </ul>

                <div className="social-nav">
                    <a
                        href="https://github.com/albertomartinezdelacasa"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-nav-link github"
                    >
                        <img
                            src="/upload/gith.png"
                            alt="GitHub"
                            className="social-icon-img"
                        />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/alberto-martinez-de-la-casa/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-nav-link linkedin"
                    >
                        <img
                            src="/upload/linkedin.png"
                            alt="LinkedIn"
                            className="social-icon-img"
                        />
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

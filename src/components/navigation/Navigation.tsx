import Image from "next/image";

export default function Navigation() {
    return (
        <div className="side-content-wrap">
            <div
                className="sidebar-left open rtl-ps-none"
                data-perfect-scrollbar
                data-suppress-scroll-x="true"
            >
                <ul className="navigation-left">
                    <li className="nav-item active " data-item="dashboard">
                        <a className="nav-item-hold" href="#">
                            <i className="nav-icon i-Bar-Chart" />
                            <span className="nav-text">Dashboard</span>
                        </a>
                        <div className="triangle" />
                    </li>
                    <li className="nav-item" data-item="apps">
                        <a className="nav-item-hold" href="#">
                            <i className="nav-icon i-Computer-Secure" />
                            <span className="nav-text">Apps</span>
                        </a>
                        <div className="triangle" />
                    </li>
                    <li className="nav-item" data-item="forms">
                        <a className="nav-item-hold" href="#">
                            <i className="nav-icon i-File-Clipboard-File--Text" />
                            <span className="nav-text">Forms</span>
                        </a>
                        <div className="triangle" />
                    </li>
                    <li className="nav-item" data-item="sessions">
                        <a className="nav-item-hold" href="#">
                            <i className="nav-icon i-Administrator" />
                            <span className="nav-text">Sessions</span>
                        </a>
                        <div className="triangle" />
                    </li>
                </ul>
            </div>
            <div
                className="sidebar-left-secondary rtl-ps-none"
                data-perfect-scrollbar
                data-suppress-scroll-x="true"
            >
                <i className="sidebar-close i-Close" />
                <header>
                    <div className="logo">
                        <Image
                            src="/logo-text.png"
                            alt="Logo"
                            width={300}
                            height={300}
                        />
                    </div>
                </header>
                {/* Submenu Dashboards */}
                <div className="submenu-area" data-parent="dashboard">
                    <header>
                        <h6>Dashboard</h6>
                        <p>Lorem ipsum dolor sit.</p>
                    </header>
                    <ul className="childNav">
                        <li className="nav-item">
                            <a href="dashboard1.html">
                                <i className="nav-icon i-Clock-3" />
                                <span className="item-name">Resume</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="submenu-area" data-parent="forms">
                    <header>
                        <h6>Admission</h6>
                        <p>Lorem ipsum dolor sit.</p>
                    </header>
                    <ul className="childNav">
                        <li className="nav-item">
                            <a href="form.basic.html">
                                <i className="nav-icon i-File-Clipboard-Text--Image" />
                                <span className="item-name">
                                    Demandes Admission
                                </span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="form.layouts.html">
                                <i className="nav-icon i-Split-Vertical" />
                                <span className="item-name">
                                    Listes Concours
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="submenu-area" data-parent="apps">
                    <header>
                        <h6>Apps</h6>
                        <p>Lorem ipsum dolor sit.</p>
                    </header>
                    <ul className="childNav">
                        <li className="nav-item">
                            <a href="inbox.html">
                                <i className="nav-icon i-Email" />
                                <span className="item-name">Sent Mail</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="inbox.html">
                                <i className="nav-icon i-Email" />
                                <span className="item-name">Post</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="submenu-area" data-parent="sessions">
                    <header>
                        <h6>Profile</h6>
                        <p>Lorem ipsum dolor sit.</p>
                    </header>
                    <ul className="childNav">
                        <li className="nav-item">
                            <a href="../sessions/signin.html">
                                <i className="nav-icon i-Checked-User" />
                                <span className="item-name">Profil</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="../sessions/signup.html">
                                <i className="nav-icon i-Add-User" />
                                <span className="item-name">Mot de passe</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

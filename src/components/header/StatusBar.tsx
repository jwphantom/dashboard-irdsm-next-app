import Image from "next/image";

export default function StatusBar() {
    return (
        <div className="main-header">
            <div className="logo">
                <Image width={200} height={200} src="/images/logo.png" alt="" />
            </div>
            <div className="menu-toggle">
                <div />
                <div />
                <div />
            </div>
            <div style={{ margin: "auto" }} />
            <div className="header-part-right">
                {/* Full screen toggle */}
                <i
                    className="i-Full-Screen header-icon d-none d-sm-inline-block"
                    data-fullscreen
                />

                {/* Notificaiton */}
                <div className="dropdown">
                    <div
                        className="badge-top-container"
                        role="button"
                        id="dropdownNotification"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        <span className="badge badge-primary">3</span>
                        <i className="i-Bell text-muted header-icon" />
                    </div>
                    {/* Notification dropdown */}
                    <div
                        className="dropdown-menu dropdown-menu-right notification-dropdown rtl-ps-none"
                        aria-labelledby="dropdownNotification"
                        data-perfect-scrollbar
                        data-suppress-scroll-x="true"
                    >
                        <div className="dropdown-item d-flex">
                            <div className="notification-icon">
                                <i className="i-Speach-Bubble-6 text-primary mr-1" />
                            </div>
                            <div className="notification-details flex-grow-1">
                                <p className="m-0 d-flex align-items-center">
                                    <span>New message</span>
                                    <span className="badge badge-pill badge-primary ml-1 mr-1">
                                        new
                                    </span>
                                    <span className="flex-grow-1" />
                                    <span className="text-small text-muted ml-auto">
                                        10 sec ago
                                    </span>
                                </p>
                                <p className="text-small text-muted m-0">
                                    James: Hey! are you busy?
                                </p>
                            </div>
                        </div>
                        <div className="dropdown-item d-flex">
                            <div className="notification-icon">
                                <i className="i-Receipt-3 text-success mr-1" />
                            </div>
                            <div className="notification-details flex-grow-1">
                                <p className="m-0 d-flex align-items-center">
                                    <span>New order received</span>
                                    <span className="badge badge-pill badge-success ml-1 mr-1">
                                        new
                                    </span>
                                    <span className="flex-grow-1" />
                                    <span className="text-small text-muted ml-auto">
                                        2 hours ago
                                    </span>
                                </p>
                                <p className="text-small text-muted m-0">
                                    1 Headphone, 3 iPhone x
                                </p>
                            </div>
                        </div>
                        <div className="dropdown-item d-flex">
                            <div className="notification-icon">
                                <i className="i-Empty-Box text-danger mr-1" />
                            </div>
                            <div className="notification-details flex-grow-1">
                                <p className="m-0 d-flex align-items-center">
                                    <span>Product out of stock</span>
                                    <span className="badge badge-pill badge-danger ml-1 mr-1">
                                        3
                                    </span>
                                    <span className="flex-grow-1" />
                                    <span className="text-small text-muted ml-auto">
                                        10 hours ago
                                    </span>
                                </p>
                                <p className="text-small text-muted m-0">
                                    Headphone E67, R98, XL90, Q77
                                </p>
                            </div>
                        </div>
                        <div className="dropdown-item d-flex">
                            <div className="notification-icon">
                                <i className="i-Data-Power text-success mr-1" />
                            </div>
                            <div className="notification-details flex-grow-1">
                                <p className="m-0 d-flex align-items-center">
                                    <span>Server Up!</span>
                                    <span className="badge badge-pill badge-success ml-1 mr-1">
                                        3
                                    </span>
                                    <span className="flex-grow-1" />
                                    <span className="text-small text-muted ml-auto">
                                        14 hours ago
                                    </span>
                                </p>
                                <p className="text-small text-muted m-0">
                                    Server rebooted successfully
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Notificaiton End */}
                {/* User avatar dropdown */}
                <div className="dropdown">
                    <div className="user col align-self-end">
                        <Image
                            width={200}
                            height={200}
                            src="/images/faces/1.jpg"
                            id="userDropdown"
                            alt=""
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        />
                        <div
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="userDropdown"
                        >
                            <div className="dropdown-header">
                                <i className="i-Lock-User mr-1" /> Timothy
                                Carlson
                            </div>
                            <a className="dropdown-item">Account settings</a>
                            <a className="dropdown-item">Billing history</a>
                            <a className="dropdown-item" href="signin.html">
                                Sign out
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

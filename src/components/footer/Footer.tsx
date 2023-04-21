import Image from "next/image";
import { GlobalConstants } from "../../common/global-constants";

export default function Footer() {
    return (
        <>
            <div className="flex-grow-1" />
            <div className="app-footer">
                <div className="footer-bottom border-top pt-3 d-flex flex-column flex-sm-row align-items-center">
                    <Image
                        width={200}
                        height={200}
                        className="logo"
                        src="/logo-text.png"
                        alt=""
                    />

                    <span className="flex-grow-1" />
                    <div className="d-flex align-items-center">
                        <div>
                            <p className="m-0">
                                © {GlobalConstants.year} -{" "}
                                {GlobalConstants.email}
                            </p>
                            <p className="m-0">All rights reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

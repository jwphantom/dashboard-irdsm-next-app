export default function Core() {
    return (
        <div className="row">
            {/* ICON BG*/}
            <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="card card-icon-bg card-icon-bg-primary o-hidden mb-4">
                    <div className="card-body text-center">
                        <i className="i-Add-User" />
                        <div className="content">
                            <p className="text-muted mt-2 mb-0">New Leads</p>
                            <p className="text-primary text-24 line-height-1 mb-2">
                                205
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="card card-icon-bg card-icon-bg-primary o-hidden mb-4">
                    <div className="card-body text-center">
                        <i className="i-Financial" />
                        <div className="content">
                            <p className="text-muted mt-2 mb-0">Sales</p>
                            <p className="text-primary text-24 line-height-1 mb-2">
                                $4021
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="card card-icon-bg card-icon-bg-primary o-hidden mb-4">
                    <div className="card-body text-center">
                        <i className="i-Checkout-Basket" />
                        <div className="content">
                            <p className="text-muted mt-2 mb-0">Orders</p>
                            <p className="text-primary text-24 line-height-1 mb-2">
                                80
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="card card-icon-bg card-icon-bg-primary o-hidden mb-4">
                    <div className="card-body text-center">
                        <i className="i-Money-2" />
                        <div className="content">
                            <p className="text-muted mt-2 mb-0">Expense</p>
                            <p className="text-primary text-24 line-height-1 mb-2">
                                $120
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

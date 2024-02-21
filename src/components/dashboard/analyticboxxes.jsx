import React from "react";

const Analyticboxxes = (props)=>{
     return(
        <>
        <div className="topanalytical mb-4">
                        <h4 className="fw-light">{props.heading}</h4>
                    </div>
                    <div className="middleanalytical row">
                        <div className="col-lg-3 mainboxxes">
                         
                            <div className="boxxes d-flex align-items-center">
                                <img alt="" src="/images/analytic1.png"/>
                                <div className="ms-2">
                                    <h6 className="fw-light mb-0">Total Income</h6>
                                    <h2 className="boxxh2">2,064</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="boxxes d-flex align-items-center">
                                <img alt="" src="/images/analytic2.png"/>
                                <div className="ms-2">
                                    <h6 className="fw-light mb-0">Total Expense</h6>
                                    <h2 className="boxxh2">2,064</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="boxxes d-flex align-items-center">
                                <img alt="" src="/images/analytic3.png"/>
                                <div className="ms-2">
                                    <h6 className="fw-light mb-0">Total Assets</h6>
                                    <h2 className="boxxh2">2,064</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="boxxes d-flex align-items-center">
                                <img alt="" src="/images/analytic4.png"/>
                                <div className="ms-2">
                                    <h6 className="fw-light mb-0">Total Staff</h6>
                                    <h2 className="boxxh2">2,064</h2>
                                </div>
                            </div>
                        </div>
                    </div>
        </>
     )
}

export default Analyticboxxes;
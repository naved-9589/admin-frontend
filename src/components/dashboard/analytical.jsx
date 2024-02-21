import React from "react";
import Analyticboxxes from "./analyticboxxes";
import Chartanalytic from "./chartanalytic";

const Analytical = ()=>{
    return(
        <>
            <div className="analytical">
                <div className="inneranalytical p-4">
                    <Analyticboxxes heading={"Analytical"}/>
                    <Chartanalytic/>
                </div>
            </div>
        </>
    )
}

export default Analytical;
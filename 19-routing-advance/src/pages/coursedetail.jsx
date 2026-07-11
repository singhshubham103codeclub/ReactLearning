import React from "react";
import { useParams } from "react-router-dom";

// This page shows details for a specific course using a dynamic route parameter.
const Coursedetail = () => {
    const params = useParams()
    console.log(params)

    return (
        <div>
            <h1>{params.courseId} COURSE DETAILS</h1>
        </div>
    )
}

export default Coursedetail
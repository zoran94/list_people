import React from "react"

const FailedSearch = () => {

    return (

        <>
            <div className="failed">
                <div className="searched">
                    <i className="far fa-angry noSearch"></i>
                    <h3>We couldn't find any people
                        matching your search</h3>
                </ div>
            </div>
        </>
    )


}


export default FailedSearch;
import React from 'react'

export default function Card({ href, text, title }) {
    return (
        <>
          <div className='container-card'>
            <div  className=" card m-auto mt-5">
                <div className="row ">
                    <div className="col-md-8">
                        <div className="card-body ">
                            <h5 className="card-title  fs-4 fw-bold">{title}</h5>
                            <p className="card-text fw-medium ">
                                {text}
                            </p>
                            <div className="p-2 mx-5">
                                <button type="button" className="btn btn-primary  ">
                                    View More
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img src={href}
                            className="img-fluid rounded-start" alt="..." />
                    </div>
                </div>
            </div>
        </div>
        </>
      
    )
}



export default function NewRelease(){
    return(
        <div className="container">
            <div className="row my-4">
                <div className="col-12 offset-md-1 col-md-8 col-lg-4">
                <div className="space-sm"></div>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a className="link-primary" href="#"> Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page"> New Release </li>
                    </ol>
                </nav>
                    <div className="card text-white bg-transparent my-4">
                        <div className="card-body">
                            <h4 className="card-title"> Model Sens mini </h4>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Sed dapibus, diam sed vulputate vulputate, nisl urna blandit nunc, nec pellentesque metus quam sed metus.</p>
                                <div className="models my-2">
                                    <h5> Choose a model: </h5>
                                    <button type="button" className="btn btn-outline-primary me-2"> Sens Mini s </button>
                                    <button type="button" className="btn btn-outline-primary"> Sens Mini s- </button>
                                </div>
                                <div className="colors mb-2">
                                    <h5> Color: </h5>
                                    <button type="button" className="btn btn-outline-light rounded me-2"> BLACK </button>
                                    <button type="button" className="btn btn-outline-light rounded me-2"> WHITE </button>
                                </div>
                                <div className="price pt-2">
                                    <h6> Price: </h6>
                                    <p className="fw-light">79.99 €</p>
                                    <button type="button" className="btn btn-outline-light rounded fw-bold"> ADD TO CART </button>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



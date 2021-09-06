
export default function OurComponents(){
    return(
        <article className="vh-100">
            <div className="container">
            <div className="row justify-content-center">
                    <div className="col-12 col-sm-6 col-lg-5 my-2">
                        <div className="card-body text-center text-sm-start">
                            <h4 className=" display-4 card-title border-2 border-bottom border-primary pb-2"> OUR COMPONENTS </h4>
                                
                                <p className="card-text fw-light text-muted py-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    Maecenas nisi quam, malesuada in felis ut, aliquam placerat arcu. </p>
                                <p className="card-text fw-light text-muted">Nunc sagittis dui nec enim cursus sodales. 
                                    Aliquam at orci fermentum, molestie nibh nec, maximus purus. 
                                    Nunc ut felis laoreet dolor vulputate rhoncus. 
                                    Vestibulum mollis massa sit amet pulvinar vestibulum. </p>
                                    <button type="button" className="btn btn-outline-dark rounded fw-bold"> LEARN MORE </button>
                            </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4">
                        <div id="carouselDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                <button type="button" data-bs-target="#carouselDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active" data-bs-interval="10000">
                                    <img src="images/carousel03.png" className="d-block w-100" alt="Carousel01"/>
                                </div>
                                <div className="carousel-item" data-bs-interval="2000">
                                    <img src="images/carousel02.png" className="d-block w-100" alt="Carousel02"/>
                                </div>
                                <div className="carousel-item">
                                    <img src="images/carousel01.png" className="d-block w-100" alt="Carousel03"/>
                                </div>
                                <div className="carousel-item">
                                    <img src="images/carousel04.png" className="d-block w-100" alt="Carousel04"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}


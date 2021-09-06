

export default function Footer(){
    return(
        <footer className="vh-100 bg-secondary">
            <div className="d-flex flex-column justify-content-center align-items-center h-100">
                <div className="col-4">
                    <ul className="nav flex-column text-center py-2">
                        <li className="nav-item">
                            <a className="nav-link link-light" aria-current="page" href="#"> Faq </a>
                         </li>
                        <li className="nav-item">
                            <a className="nav-link link-light" href="#"> Downloads </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link link-light" href="#"> About us </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link link-light" href="#"> Contact </a>
                        </li>
                    </ul>
                </div>
                <div className="col-4 align-middle">
                    <ul className="nav justify-content-center text-center">
                        <li className="nav-item">
                            <a className="nav-link link-primary" aria-current="page" href="#"> <i className="fab fa-instagram fa-2x"></i> </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link link-primary" href="#"> <i className="fab fa-twitter fa-2x"></i> </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link link-primary" href="#"> <i className="fab fa-discord fa-2x"></i> </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link link-primary" href="#"> <i className="fab fa-twitch fa-2x"></i> </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}


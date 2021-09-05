import { Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSearch, faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import NewRelease from "./NewRelease";

export default function Header(){
    return(
        <main className="vh-100 bg-header">
            <nav className="navbar navbar-dark">
                <div className="container">
                    <Logo/>
                    <ul className="nav justify-content-end">
                        <li className="nav-item">
                            <a className="nav-link link-light" href="#"> <FontAwesomeIcon icon={faSearch}/> </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link link-light" href="#"> <FontAwesomeIcon icon={faShoppingCart}/> </a>
                        </li>
                    </ul>
                </div>
            </nav>
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <a className="nav-link link-light" href="#"> Mices </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link link-light" href="#"> Keyboards </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link link-light" href="#"> Accessories </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link link-light" href="#"> Audio </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link link-light" href="#"> Mousepads </a>
                </li>
            </ul>
            <NewRelease/>
        </main>
    )
}

function Logo(){
    return <Image src="images/logo.png" alt="logo" className="navbar-brand"/>
}
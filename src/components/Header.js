import React from 'react'
import propTypes from 'prop-types'



function Header(props) {
    const style = {

        position: "sticky",
        width: "100%",
        top: "0",
        zIndex: "100"
    }

    function ifCheckBox() {
        // props.setsearchBar(!props.searchBar);
        console.log("sdfarf")
    }

    return (
        <header className="h-fixed" style={style}>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        {props.title}
                    </a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    About
                                </a>
                            </li>
                        </ul>
                        <input type="checkbox" defaultChecked onChange={() => ifCheckBox} />

                        {
                            props.searchBar ?
                                <form className="d-flex">
                                    <input
                                        className="form-control me-2"
                                        type="search"
                                        placeholder="Search"
                                        aria-label="Search"
                                    />
                                    <button className="btn border-none shadow-none btn-outline-success" type="button" >
                                        Search
                                    </button>  </form> : ""
                        }
                    </div>
                </div>
            </nav>
        </header >
    );
}
Header.propTypes = {
    title: propTypes.string.isRequired,
    searchBar: propTypes.bool.isRequired
}
Header.defaultProps = {
    title: "App Title",
    searchBar: true
}
export default Header;
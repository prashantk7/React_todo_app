import React from 'react'
import propTypes from 'prop-types'



function Header(props) {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
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
                        {/* <input type="checkbox" id="ab" defaultChecked onChange={() => this.checked ?
                            (props.searchBar === false,
                                console.console.log(true)) :
                            (console.log(false),
                                props.searchBar === true)} /> */}

                        {props.searchBar ? <form className="d-flex">
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <button className="btn btn-outline-success" type="submit">
                                Search
                            </button>  </form> : ""}
                    </div>
                </div>
            </nav>
            <h1 className="text-center bg-dark text-white">This is Header</h1>
        </header>
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
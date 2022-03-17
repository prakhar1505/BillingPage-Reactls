import React, { Component } from 'react' 


class Header extends Component {
        constructor(props) {
            super(props)
    
            this.state = {
                // step 2
            }
        }
    
       
        render() {
            return (
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                            <a className="navbar-brand" href='http://localhost:3000/'>Home</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link active" href='http://localhost:3000/billSearch' aria-current="page">View Bills</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" href='http://localhost:3000/balance' aria-current="page">Balance</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" href='http://localhost:3000/addStock' aria-current="page">Add Stock</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" href='http://localhost:3000/viewStock' aria-current="page">View Stock</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            )
        }
    }

export default Header
import React, { Component } from 'react' 

class Footer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
        }
    }

    render() {
        return (
            <div>
                <footer className="footer">
                    <div className="container">
                        <span className="text-muted">Copyright to Ganapati Enterprises.</span>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer
import React, { Component } from 'react'

class BillSearch extends Component {
    constructor(props) {
        super(props)

        this.state = {
            from:'',
            to:'',
        }
        this.changeDateFromHandler = this.changeDateFromHandler.bind(this);
        this.changeDateToHandler = this.changeDateToHandler.bind(this);
        this.getList = this.getList.bind(this);
    }
    //function for getting all appointment by date and status
    getList(from,to){
        this.props.history.push(`/getList/${from}/${to}`);
    }
    //function for observing changes
    changeDateFromHandler= (event) => {
        this.setState({from: event.target.value});
    }
    changeDateToHandler= (event) => {
        this.setState({to: event.target.value});
    }
    
    render() {
        return (
            <div>
            <br></br><br></br>
            <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3">
                           <h3 align='center'>Find Bill</h3> 
                                <div className = "card-body">                   
                                    <form align="center">
                                    <div className="form-row">
                                        <div className="form-group col-md-12">
                                            <label> From Date: </label>
                                            <input type='date' placeholder="from" name="from" className="form-control" 
                                                value={this.state.from} onChange={this.changeDateFromHandler}/>
                                        </div>
                                        <div className="form-group col-md-12">
                                            <label> To Date: </label>
                                            <input type='date' placeholder="to" name="to" className="form-control" 
                                                value={this.state.to} onChange={this.changeDateToHandler}/>
                                        </div>
                                    </div>
                                        <script src="getList.js"></script>
                                        <button style={{marginLeft: "10px"}} className="btn btn-info" onClick={() => this.getList(this.state.from,this.state.to)}>Get List </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                   </div>
            </div>
        )
    }
}

export default BillSearch;
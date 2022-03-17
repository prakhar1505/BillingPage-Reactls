import React, { Component } from 'react'
import Bill from '../Service/Bill';

class BillBalance extends Component {
    constructor(props) {
        super(props)

        this.state = {
            date:'',
        }
        this.changeDateHandler = this.changeDateHandler.bind(this);
        this.getList = this.getList.bind(this);
    }
    
    getList(date){
        Bill.billBalance(date).then((res) => {
            console.log(res.data);
            alert("Total Sale for Date: "+this.state.date+" is: Rs."+res.data)
    });
}
    //function for observing changes
    changeDateHandler= (event) => {
        this.setState({date: event.target.value});
    }  
    render() {
        return (
            <div>
            <br></br><br></br>
            <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-10 offset-md-1">
                           <h3 align='center'>Balance by Date</h3> 
                            <div className = "card-body">                   
                                    <form align="center">
                                    <div className = "form-group">
                                            <label> Date: </label>
                                            <input type='date' placeholder="date" name="date" className="form-control" 
                                                value={this.state.date} onChange={this.changeDateHandler}/>
                                        </div>
                                        <script src="getList.js"></script>
                                        <button style={{marginLeft: "10px"}} className="btn btn-info" onClick={() => this.getList(this.state.date)}>Get List </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                   </div>
            </div>
        )
    }
}

export default BillBalance;
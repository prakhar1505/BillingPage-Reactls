import React, { Component } from 'react'
import Bill from '../Service/Bill'

class AddStock extends Component {
    constructor(props) {
        super(props)

        this.state = {
            item:'',
            qty:'',
        }
        this.changeItemHandler = this.changeItemHandler.bind(this);
        this.changeQtyHandler = this.changeQtyHandler.bind(this);
        this.getList = this.getList.bind(this);
    }
    //function for getting all appointment by date and status
    getList(item,qty){
        Bill.updateStock(item,qty).then((res) => {
            console.log(res.data);
            alert("Stock Update")
        });
    }
    //function for observing changes
    changeItemHandler= (event) => {
        this.setState({item: event.target.value});
    }
    changeQtyHandler= (event) => {
        this.setState({qty: event.target.value});
    }
    
    render() {
        return (
            <div>
            <br></br><br></br>
            <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-10 offset-md-1">
                           <h3 align='center'>Add Stock</h3> 
                            <div className = "card-body">                   
                                    <form align="center">
                                    <select className="form-select mb-3" aria-label="Default select example"
                                        value={this.state.item} onChange={this.changeItemHandler}>
                                            <option selected>Select Item</option>
                                            <option value="Jar">Jar</option>
                                            <option value="Poly">Poly</option>
                                            <option value="Bottle">Bottle</option>
                                        </select>
                                        <div className = "form-group">
                                        <label> Qty: </label>
                                            <input type='float' placeholder="Qty" name="qty" className="form-control" 
                                                value={this.state.qty} onChange={this.changeQtyHandler}/>
                                        </div>
                                        <script src="getList.js"></script>
                                        <button style={{marginLeft: "10px"}} className="btn btn-info" onClick={() => this.getList(this.state.item,this.state.qty)}>Add </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                   </div>
            </div>
        )
    }
}

export default AddStock;
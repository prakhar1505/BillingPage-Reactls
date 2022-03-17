import React, { Component } from 'react'
import Bill from '../Service/Bill';

class ViewBill extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id:this.props.match.params.id,
            name:'',
            date:'',
            item:'',
            qty:'',
            price:'',
            value:''
        }
    }

    componentDidMount(){
            Bill.getBill(this.state.id).then((res) => {
            console.log(res.data);
            this.setState({name: res.data.name});
            this.setState({date: res.data.date});
            this.setState({item: res.data.item});
            this.setState({qty: res.data.qty});
            this.setState({price: res.data.price});
            this.setState({value: res.data.value});
    });
}

    render() {
        return (
            <div>
                <br/>
               <div className = "container">
                        <div className = "card col-md-8 offset-md-2">
                            {
                                <h3 className="text-center">Bill</h3>
                            }
                            <div className = "card-body">
                            <div className="form-floating mb-3">
                                <input type="number" className="form-control" id="BillNo" placeholder="Number" 
                                value={this.state.id}/>
                                <label for="BillNo">Bill Number</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="Name" placeholder="Text" 
                                value={this.state.name}/>
                                <label for="Name">Customer Name</label>
                            </div>
                            
                            <div className="form-floating mb-3">
                                <input type="date" className="form-control" id="billDate" placeholder="Date"
                                value={this.state.date}/>
                                <label for="billDate">Date</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="item" placeholder="text"
                                value={this.state.item}/>
                                <label for="item">Item</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input type="float" className="form-control" id="Qty" placeholder="Float"
                                value={this.state.qty}/>
                                <label for="Qty">Quantity</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="float" className="form-control" id="Price" placeholder="Float"
                                value={this.state.price}/>
                                <label for="Price">Price</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="float" className="form-control" id="Value" placeholder="Float"
                                value={this.state.price*this.state.qty}/>
                                <label for="Value">Value</label>
                            </div>
                            <div className="col">
                                <button type="button" className="btn btn-danger" onClick={(e) => {e.preventDefault();window.location.href='http://localhost:3000/';}}>Home</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default ViewBill
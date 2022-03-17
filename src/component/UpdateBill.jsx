import React, { Component } from 'react' 
import Bill from '../Service/Bill';
import validator from 'validator';

class UpdateBill extends Component {
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
        this.changeCustmerNameHandler=this.changeCustmerNameHandler.bind(this);
        this.changeDateHandler=this.changeDateHandler.bind(this);
        this.changeItemHandler=this.changeItemHandler.bind(this);
        this.changeQtyHandler=this.changeQtyHandler.bind(this);
        this.changePriceHandler=this.changePriceHandler.bind(this);
        this.changeValueHandler=this.changeValueHandler.bind(this);
        this.update=this.update.bind(this);
    }
    changeCustmerNameHandler= (event) =>{
        this.setState({name : event.target.value});
    }
    changeDateHandler= (event) =>{
        this.setState({date : event.target.value});
    }
    changeItemHandler= (event) =>{
        this.setState({item : event.target.value});
    }
    changeQtyHandler= (event) =>{
        this.setState({qty : event.target.value});
    }
    changePriceHandler= (event) =>{
        this.setState({price : event.target.value});
    }
    changeValueHandler= (event) =>{
        this.setState({value : event.target.value});
    }

    valid()
    {
        if(validator.isEmpty(this.state.name))
        {
            return true;
        }
        else if(validator.isEmpty(this.state.date))
        {
            return true;
        }
        else if(validator.isEmpty(this.state.item))
        {
            return true;
        }
        else if(validator.isEmpty(this.state.price))
        {
            return true;
        }
        else if(validator.isEmpty(this.state.qty))
        {
            return true;
        }
        else
        return false;
    }

    update=(event)=>{
        event.preventDefault();
        let bill={
            id:this.state.id,
            name:this.state.name,
            date:this.state.date,
            item:this.state.item,
            qty:this.state.qty,
            price:this.state.price,
            value:this.state.qty*this.state.price
        }
        if(this.valid())
        {
            alert("Fill all field");           
        }
        else
        {
            Bill.updateBill(bill,this.state.id);
            window.location.href='http://localhost:3000/';
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
                <br/><br/>
               <div className = "container">
                        <div className = "card col-md-8 offset-md-2">
                            {
                                <h3 className="text-center">Add Employee</h3>
                            }
                            <div className = "card-body">
                            <div className="form-floating mb-3">
                                <input type="number" className="form-control" id="BillNo" placeholder="Number" 
                                value={this.state.id} disabled/>
                                <label for="BillNo">Bill Number</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="Name" placeholder="Text" 
                                value={this.state.name} onChange={this.changeCustmerNameHandler}/>
                                <label for="Name">Customer Name</label>
                            </div>
                            
                            <div className="form-floating mb-3">
                                <input type="date" className="form-control" id="billDate" placeholder="Date"
                                value={this.state.date} disabled/>
                                <label for="billDate">Date</label>
                            </div>
                            <select className="form-select mb-3" aria-label="Default select example"
                            value={this.state.item} onChange={this.changeItemHandler}>
                                <option selected>Select Item</option>
                                <option value="Jar">Jar</option>
                                <option value="Poly">Poly</option>
                                <option value="Bottle">Bottle</option>
                            </select>

                            <div className="form-floating mb-3">
                                <input type="float" className="form-control" id="Qty" placeholder="Float"
                                value={this.state.qty} onChange={this.changeQtyHandler}/>
                                <label for="Qty">Quantity</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="float" className="form-control" id="Price" placeholder="Float"
                                value={this.state.price} onChange={this.changePriceHandler}/>
                                <label for="Price">Price</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="float" className="form-control" id="Value" placeholder="Float"
                                value={this.state.price*this.state.qty} onChange={this.changeValueHandler}/>
                                <label for="Value">Value</label>
                            </div>
                            <div className="col">
                                <button type="submit" className="btn btn-primary" onClick={this.save}>Submit</button>
                                <button type="button" className="btn btn-danger" onClick={(e) => {e.preventDefault();window.location.href='http://localhost:3000/';}}>Reset</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default UpdateBill;
import React, { Component } from 'react' 
import Bill from '../Service/Bill';
import validator from 'validator';

class FormPage extends Component {
    constructor(props) {
        super(props)
        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();
        let currentdate = `${year}-${month<10?`0${month}`:`${month}`}-${date<10?`0${date}`:`${date}`}`;        
        
        this.state = {
            name:'',
            date:currentdate,
            item:'',
            qty:'',
            price:'',
            value:''
        }
        this.changeCustmerNameHandler=this.changeCustmerNameHandler.bind(this);
        this.changeItemHandler=this.changeItemHandler.bind(this);
        this.changeQtyHandler=this.changeQtyHandler.bind(this);
        this.changePriceHandler=this.changePriceHandler.bind(this);
        this.changeValueHandler=this.changeValueHandler.bind(this);
        this.save=this.save.bind(this);
    }
    changeCustmerNameHandler= (event) =>{
        this.setState({name : event.target.value});
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

    save=(event)=>{
        event.preventDefault();
        let bill={
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
            Bill.saveBill(bill);
            window.location.href='http://localhost:3000/';
        }
    }

    componentDidMount(){

    }
      
    render() {
        return (
            <div>
                <br/><br/>
               <div className = "container">
                        <div className = "card col-md-8 offset-md-2">
                            {
                                <h3 className="text-center">Add Bill</h3>
                            }
                            <div className = "card-body">
                            
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="Name" placeholder="Text" 
                                value={this.state.name} onChange={this.changeCustmerNameHandler}/>
                                <label for="Name">Customer Name</label>
                            </div>
                            
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="billDate" placeholder="Date"
                                value={this.state.date}/>
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

export default FormPage
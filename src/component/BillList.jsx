import React, { Component } from 'react'
import Bill from '../Service/Bill'


class BillList extends Component {
    constructor(props) {
        super(props)
        this.state = {
                from: this.props.match.params.from,
                to: this.props.match.params.to,
                bill: []
        }
        this.viewBill = this.viewBill.bind(this);
        this.updateBill=this.updateBill.bind(this);
    }
    //view appointment by individual id
    viewBill(id){
        this.props.history.push(`/viewBill/${id}`);
    }
    //update appointment by individual id
    updateBill(id){
        this.props.history.push(`/updateBill/${id}`);
    }

//functio for geting data from data base in appointment variable
    componentDidMount(){
        Bill.billList(this.state.from,this.state.to).then((res) => {
            this.setState({bill: res.data});
            console.log(res);
        });
    }
//frontend for display data 
    render() {
        return (
            <div>
                 <br></br>
                 <div className = "py-4">
                        <table className = "table table-striped table-bordered">

                            <thead class="thead-dark" align="center">
                                <tr>
                                    <th> Bill Number</th>
                                    <th> Customer Name </th>
                                    <th> Date </th>
                                    <th> Item </th>
                                    <th> Qty </th>
                                    <th> Price </th>
                                    <th> Value </th>
                                    <th> Actions </th>
                                </tr>
                            </thead>
                            <tbody align="center">
                                {
                                    this.state.bill.map(
                                        bill => 
                                        <tr key = {bill.id}>
                                             <td> {bill.id} </td>  
                                             <td> {bill.name} </td>   
                                             <td> {bill.date}</td>
                                             <td> {bill.item}</td>
                                             <td> {bill.qty}</td>
                                             <td> {bill.price}</td>
                                             <td> {bill.value}</td>
                                             <td>
                                                 <button  className="btn btn-info" onClick={() => this.updateBill(bill.id)}>Update </button>
                                                 <button style={{marginLeft: "10px"}} className="btn btn-info" onClick={() => this.viewBill(bill.id)}>View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>
            </div>
        )
    }
}

export default BillList;
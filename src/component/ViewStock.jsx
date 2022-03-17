import React, { Component } from 'react'
import Bill from '../Service/Bill'


class BillList extends Component {
    constructor(props) {
        super(props)
        this.state = {
                stock: []
        }
    }
    componentDidMount(){
        Bill.viewStock().then((res) => {
            this.setState({stock: res.data});
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
                                    <th> Stock Id</th>
                                    <th> Item </th>
                                    <th> Qty </th>
                                </tr>
                            </thead>
                            <tbody align="center">
                                {
                                    this.state.stock.map(
                                        stock => 
                                        <tr key = {stock.id}>
                                             <td> {stock.id} </td>  
                                             <td> {stock.item} </td>   
                                             <td> {stock.qty}</td>
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
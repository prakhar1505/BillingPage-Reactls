import axios from 'axios';
const BILL_API_BASE_URL = "http://localhost:5000/GC";

class Bill {

    getBill(billId){
        return axios.get(BILL_API_BASE_URL+'/viewBill/'+billId);
    }

    saveBill(bill){
        return axios.post(BILL_API_BASE_URL+'/saveBill', bill);
    }

    updateBill(bill,billId){
        return axios.put(BILL_API_BASE_URL + '/updateBill/'+billId, bill);
    }

    billList(from, to){
        return axios.get(BILL_API_BASE_URL + '/billList/' + from +'/'+ to);
    }
    billBalance(date){
        return axios.get(BILL_API_BASE_URL + '/billBalance/' + date);
    }

    updateStock(item,qty){
        return axios.put(BILL_API_BASE_URL + '/updateStock/'+item+'/'+  qty);
    }
    viewStock(){
        return axios.get(BILL_API_BASE_URL + '/viewStock');
    }
}

export default new Bill()

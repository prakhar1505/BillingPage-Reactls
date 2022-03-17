import React from 'react'; 
import './App.css';
import Footer from './component/Footer';
import {BrowserRouter as Router, Route , Switch} from 'react-router-dom';
import FormPage from './component/FormPage';
import ViewBill from './component/ViewBill';
import UpdateBill from './component/UpdateBill';
import BillSearch from './component/BillSearch';
import BillList from './component/BillList';
import Header from './component/Header';
import BillBalance from './component/BillBalance';
import AddStock from './component/AddStock';
import ViewStock from './component/ViewStock';

function App() {
  return (
    <div>
      <Header/>
          <Router>
                <Switch>
                      <Route path = "/" exact component={FormPage}/>

                      <Route path = "/billSearch"  component = {BillSearch}/>
                      <Route path = "/getList/:from/:to"  component = {BillList}/>
                      <Route path = "/viewBill/:id"  component = {ViewBill}/>
                      <Route path = "/updateBill/:id"  component = {UpdateBill}/>
                      
                      <Route path = "/balance"  component = {BillBalance}/>
                      
                      <Route path = "/addStock"  component = {AddStock}/>

                      <Route path = "/viewStock"  component = {ViewStock}/>
                </Switch>
          </Router>
      <Footer/>
    </div>
  );
}

export default App;
import React, { Component } from 'react';  
import ReactTable from "react-table";  
import "react-table/react-table.css";
import {connect} from 'react-redux';

class Dashboard extends Component { 
  render() {   
     const {userData} = this.props 
     const columns = [{  
       Header: 'Id',  
       accessor: 'id'
       },{  
       Header: 'Name',  
       accessor: 'name'  
       },
       {
        Header: 'Age',
        accessor: 'age'
       },
       {
        Header: 'Gender',
        accessor: 'gender'
       },
       {
        Header: 'Email',
        accessor: 'email'
       },
       {
        Header: 'Phone No',
        accessor: 'phoneNo'
       },
    ]  
    return (  
          <div>  
              <ReactTable  
                  data={userData}  
                  columns={columns}  
                  defaultPageSize = {2}  
                  pageSizeOptions = {[2,4, 6]}  
              />  
          </div>        
    )  
  }  
}  
function mapStateToProps(state){
  console.log('state', state)
  return {
    userData:state.userList.user
  }
}
export default connect(mapStateToProps)(Dashboard);
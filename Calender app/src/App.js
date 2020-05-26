import React, { Component } from 'react';
import './App.css';

import Calendar from './Components/Calendar/';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';


const style = {
  position: "relative",
  margin: "50px auto"
}

class App extends Component {
  onDayClick = (e, day) => {
    alert(day);
  }
  
  constructor (props){
    super(props);
    this.state={
      ColumnsDefs: [{
          headerName: "Sr.no.", field: "number"

      },
    {
      headerName: "Task", field: "task"

    },],
    rowData: [{
      number: "1", task: " Meeting With Rahul Sir"
    },
    {
      number: "2", task: " Meeting With Devesh Sir"
    }]
    }
  }
  render() {
    return (
      <div className="App" className="ag-theme-alpine" style={{height: '150px', width:'500px'}}>
        <h1 align= "center"> Calendar </h1>
        <Calendar style={style} width="302px" 
          onDayClick={(e, day)=> this.onDayClick(e, day)}/> 
         <h2 align= "center" >Table having Task Details</h2>
          <AgGridReact columnDefs={this.state.ColumnsDefs}
          rowData={this.state.rowData}>
          </AgGridReact>
         }
      </div>
    );
  }
}

export default App;
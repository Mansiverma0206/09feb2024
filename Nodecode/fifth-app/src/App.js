import { Component } from "react" ;
import dummy from "./dummyData"
 
export default class App extends Component
{
  constructor()
  {
    super()
    this.state = {
      employees : dummy
    }
    this.departments = [
      {key : 1 , value : "FullStack Developer"} ,
      {key : 2 , value : "Android Developer"} , 
      {key : 3 ,value  : "FrontEnd Developer"} , 
      {key : 4 ,value : "MERN Developer"}
    ]
  }
  render()
  {
    return<div className="container" style={{backgroundColor:"rgb(243,215,162)"}}>
      <h1 style={{textAlign:"center", backgroundColor:"orange", color:"white", fontFamily:"cursive"}}> <marquee> Employee Record  </marquee> </h1>
      <hr/>
      <div className="row">
        <div className="col-lg-4 col-md-4">
          <input type="text" className="form-control" placeholder="Enter Emp ID" />
        </div>
        <div className="col-lg-4 col-md-4">
          <input type="text" className="form-control" placeholder="Employee Name" />
        </div>
        <div className="col-lg-4 col-md-4">
          <input type="text" className="form-control" placeholder="Salary" />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-lg-4 col-md-4">
          <input type="text" className="form-control" placeholder="Email" />
        </div>
        <div className="col-lg-4 col-md-4">
          <select className="form-control">
            <option value="">Choose Department</option>
            {this.departments.map(dep=><option value={dep.key}>{dep.value}</option>)}
          </select>
        </div>
        <div className="col-lg-4 col-md-4 ">
          <button className="btn btn-outline-success">Save Employee</button>
        </div>
      </div>
    
      <hr/>
      <div className="row">
        <div className="col-lg-2 col-md-2"style={{ backgroundColor: "orange" }}>
          <marquee><b>Total</b></marquee>
        </div><div className="col-lg-4 col-md-4">
        </div>
        <div className="col-lg-3 col-md-3" style={{ backgroundColor: "orange" }}><marquee><b>FullStack Developer :</b></marquee><b></b></div>
        <div className="col-lg-3 col-md-3" style={{ backgroundColor: "orange" }}><marquee><b>Android Developer :</b></marquee></div> 
      </div>
      <div className="row mt-3">
        <div className="col-lg-6 col-md-6"></div>
        <div className="col-lg-3 col-md-3" style={{ backgroundColor: "orange" }}><marquee><b>FrondEnd Developer : </b></marquee></div>
        <div className="col-lg-3 col-md-3" style={{ backgroundColor: "orange" }}><marquee><b>FullStack Developer : </b></marquee></div>
      </div>
         <hr/>
      <table className="table table-striped" style={{backgroundColor:"rgb(243, 215, 162)"}}>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Employee ID</th>
            <th>Employee Name</th>
            <th>Salary</th>
            <th>Email</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
              {this.state.employees.map((ob,index)=><tr>
                <td>{index+1}</td>
                <td>{ob.empid}</td>
                <td>{ob.name}</td>
                <td>{ob.salary}</td>
                <td>{ob.email}</td>
                <td>{ob.department}</td>
              </tr>)}
        </tbody>
      </table>
    </div>
  }
}
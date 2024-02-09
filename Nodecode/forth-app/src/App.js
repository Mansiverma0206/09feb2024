import { Component } from "react";

export default class App extends Component
{
  constructor(){
    super()
    this.state = {
      result : 0 
    }
  }
  process = () => {
    var fnum = document.getElementById('fnum').value * 1;
    var snum = document.getElementById('snum').value * 1;
    var op = document.getElementById('op').value * 1;
    var z = 0 ;
    switch (op) {
      case 1: z = fnum + snum; break;
      case 2: z = fnum - snum; break;
      case 3: z = fnum * snum; break;
      case 4: z = fnum / snum; break;
      case 5: z = fnum % snum; break;
    }
    this.setState({ result: z })
  }
   render()
   {
    return<div>
      <h1>Calculation Demo</h1>
      <hr />
      <div className="container">

        <div className="row">

          <div className="col-lg-6 col-md-6">
            <input type="text" className="form-control" id="fnum" placeholder="First Number" />
          </div>

          <div className="col-lg-6 col-md-6">
            <input type="text" id="snum" className="form-control" placeholder="Second Number" />
          </div>

        </div>
        <div className="row mt-3">

          <div className="col-lg-6 col-md-6">
            <select className="form-control" id="op">
              <option value='1'>Addition</option>
              <option value='2'>Substraction</option>
              <option value='3'>Multiplication</option>
              <option value='4'>Division</option>
              <option value='5'>Modulas</option>
            </select>
          </div>

          <div className="col-lg-6 col-md-6">
          <button className="btn btn-primary" onClick={this.process}>Calculate</button>&nbsp;&nbsp;&nbsp;
          <b className="text-info">Result : {this.state.result}</b>
          </div>

        </div>

      </div>
    </div>
   }
}
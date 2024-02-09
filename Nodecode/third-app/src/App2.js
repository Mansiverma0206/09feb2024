import { Component } from "react"

class Demo extends Component 
{
    constructor()
    {
        super()
        this.state = 
        {
           cities : ["indoe","mhow","dewas"]
        }
    }
    add =()=>{
        var city =  document.getElementById('ct').value;
        this.setState({cities  : [...this.state.cities,city]})

        // this.state.cities.push(city)

        // var arr = this.state.cities
        // arr.push(city)
        // this.setState({cities : arr})
    }
    render()
    {
        return<div>
          <h1>Demo class</h1>
          <h3>city list</h3>
          <input type="text" id="ct" placeholder="enter city name"/>&nbsp;&nbsp;&nbsp;
          <button onClick={this.add}>Add City</button>
          <ol>{this.state.cities.map(city=><li>{city}</li>)}</ol>
        </div>
    }
}

export default Demo ;
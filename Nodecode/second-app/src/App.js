import { Component } from "react" ;

export class App extends Component
{
    constructor()
    {
        super()
        this.state = {
            title : "InfoGrains Indore !"
        }
    }
    change =()=>{
        // this.state.title = "MHOW........."
        this.setState({title:"MHOW..."})
    }
    render()
    {
        return<div>
          <h1>App Component</h1>
          <b>{this.state.title}</b>
          <hr/>
          <button onClick={this.change}>Change Title</button>
        </div>
    }
}


/*
  state => It is an object.
      state is a  data or infomation that is related with component .
      react state : binding
*/

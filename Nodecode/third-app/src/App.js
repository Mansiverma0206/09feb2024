import { Component} from "react" ;
import  Demo  from "./App2"

export default class App extends Component
{
  constructor()
  {
    super()
    this.state = {
      num : 123,
      friends : ["Sohel","Alfahad","Divya","Sarita","Shubham","Rahul","Aarti","Amaan","Santoshi","Mansi","Vikas"],
      numbers :[1,2,3,4,5,6,7,8,9,11,22,33,44,55,66,77]
    }
  }
  decrement = () => this.setState({ num: this.state.num - 2 });
  increment = () => this.setState({ num: this.state.num + 2 });
  render()
  {
    return<div>
      <h1>Third Practice</h1>
      <hr/>
      <Demo/>
      <hr/>
      <button onClick={this.decrement}>Decrement</button>
         &nbsp; &nbsp; &nbsp;<b>{this.state.num}</b> &nbsp; &nbsp; &nbsp;
         <button onClick={this.increment}>increment</button>
         <hr/>
          <ol>
              {this.state.friends.map(name=><li>{name}</li>)}
         </ol>
         <hr/>
         <ul>
          {this.state.numbers.map(num=><li>{num}:{num%2==0?"Even":"odd"}</li>)}
         </ul>
         <hr/>
    </div>
  }
}
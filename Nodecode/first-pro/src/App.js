import { Component} from "react" ;
import { First , Second } from "./Demo";
import Forth from  "./Demo" ;
class App extends Component 
{
  render()
  {
    var title =  "Mnsi"
    return <div>
      <h1>App component</h1>
      <First/>
      <b>{title}</b><hr/>
      <Second/>
      <Forth/>
      <hr/>
    </div>
  }
}
export default App ;

// import React from 'react'
// class App extends React.Componet{}
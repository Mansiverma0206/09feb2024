import { Component } from "react";
import { Third } from "./Demo2"
export class First extends Component{
    render(){
        return <div>
            <h2>First Component-First</h2>
        </div>
    }
}

export class Second extends Component{
    render(){
        return <div>
            <h3>Second Component -Demo</h3>
            <Third/>
        </div>
    }
}

export default class Forth extends Component {
    render()
    {
        return<div>
            <h5>Forth Component-Default </h5>
        </div>
    }
}
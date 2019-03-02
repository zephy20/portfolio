import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import { repos } from "../assets/projects.json";

// const reps = JSON.parse(JSON.stringify(repos))
// console.log(reps)
// var array = Object.keys(reps).map(key=>{
//   return  reps[key]
// })
// console.log(array)

export default class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    };
  }

  componentDidMount() {
    this.setState({
      repos: repos
    });
  }

  render() {
    this.state.repos.map((item,id) => {
      console.log(item,id);
    });
    

    return (
      <div style={{textAlign:"left"}}>
        <h3 style={{margin:"10px 0"}}>Some of my projects</h3>
        <div style={{margin:"10px 0", padding:"0.5rem 0"}}>
          {this.state.repos.map((item, id) => (
            <div id={id} style={{padding:".25rem 0"}}>
              <h6>
                <a href={item.link} target="_blank">
                  {item.name} : {item.description}
                </a>
              </h6>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

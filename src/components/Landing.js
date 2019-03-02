import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Landing extends Component {
  render() {
    return (
      <div style={{padding:"0.50rem"}}>
        <div
          className="top"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            borderBottom:"1px solid #e1e1e1"
          }}
        >          <Link to="/">

          <h1
            style={{
              margin: "0",
              fontSize: "3rem",
              fontWeight: "700",
              textAlign: "center",
              letterSpacing: "1px"
            }}
          >
            Kartik V
          </h1>
          </Link>
          <div
            className="row"
            style={{ justifyContent: "center", margin: "10px" }}
          >
            <h3>Front-end Developer in making</h3>
          </div>
         
          <div
            className="row"
            style={{ justifyContent: "center", margin: "10px" }}
          >
            <div style={{marginRight:"5px"}}>
              <h4>
                <Link to="/about">about</Link>
              </h4>
            </div>
            <div>
              <h4>
                |
              </h4>
            </div>
            <div style={{marginLeft:"5px"}}>
              <h4>
                <Link to="/contact"> contact me</Link>
              </h4>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

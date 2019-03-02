import React, { Component } from "react";
import axios from "axios";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";

const CLIENT_ID = "6f4e61dd4fe94d35a208934c5c832406";
const CLIENT_SECRET = "b33805fcca834f1984a00da0df529ef8";
const ACCESS_TOKEN = "205418237.1677ed0.7923e1ce8281408196c931a24c261e2d";
const URL = `https://api.instagram.com/v1/users/self/media/recent/?access_token=${ACCESS_TOKEN}`;

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      insta_data: []
    };
  }
  componentDidMount() {
    axios.get(URL).then(res => {
      this.setState({
        insta_data: res.data.data
      });
    });
  }

  render() {
    this.state.insta_data.map(item => {
      console.log(item);
    });
    return (
      <div>
        <h3>I like to build things.</h3>
        <div>
          Other than that, I like to take photos. Some of the snaps I took
          here..
        </div>
        <div style={{ border: "1px solid #f1f1f1", padding:"0.50rem", overflowY:"auto", maxHeight:"400px", overflowX:"hidden" }}>
          <div className="row">
            {this.state.insta_data &&
              this.state.insta_data.map((item, id) => {
                return id<6 ?(
                <div className="col-md-6">
                  <Card id={id} style={{margin:"5px"}}>
                    <img src={item.images.low_resolution.url} />
                  </Card>
                </div>
              ):null
              })}
          </div>
        </div>
      </div>
    );
  }
}

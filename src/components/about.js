import React, { Component } from "react";
import axios from "axios";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";

const URL = `https://api.instagram.com/v1/users/self/media/recent/?access_token=${
  process.env.REACT_APP_ACCESS_TOKEN
}`;

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      insta_data: []
    };
  }
  componentDidMount() {
    axios
      .get(URL)
      .then(res => {
        console.log(res.data.data);

        this.setState({
          insta_data: res.data.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h3>I like to build things.</h3>
        <div>
          Other than that, I like to take photos. Some of the snaps I took
          here..
        </div>
        <div
          style={{
            border: "1px solid #f1f1f1",
            padding: "0.50rem",
            overflowY: "auto",
            maxHeight: "400px",
            overflowX: "hidden"
          }}
        >
          <div className="row">
            {this.state.insta_data &&
              this.state.insta_data.map((item, id) => {
                return id < 6 ? (
                  <div className="col-md-6">
                    <Card id={id} style={{ margin: "5px" }}>
                      <img src={item.images.low_resolution.url} />
                    </Card>
                  </div>
                ) : null;
              })}
          </div>
        </div>
      </div>
    );
  }
}

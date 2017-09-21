import React, { Component } from 'react';
import '../styles/App.css';

export default class References extends Component {
  render() {
    let refStyle = {
      "backgroundColor": "#bce9f4",
      "backgroundSize": "cover",
      "backgroundPosition": "top",
      "height": "100%",
      "padding": "100px",
      "display": "flex",
      "flexDirection":"row",
      "justifyContent":"center"
    }
    let oneRefStyle={
      "paddingLeft":"30px",
      "fontSize":"25px",
      "textAlign":"center",
      "color":"#0d0056"
    }
    return(
      <div className="allReferences" style={refStyle}>
      <div className="reference" style={oneRefStyle}>
      <p>Name: santa</p>
      <p>Number: 1800santa</p>
      <p>About: randomrandomrandom</p>
      </div>
      <div className="reference" style={oneRefStyle}>
      <p>Name: toothfairy</p>
      <p>Number: 1800toothfairy</p>
      <p>About: randomrandomrandom</p>
      </div>
      <div className="reference" style={oneRefStyle}>
      <p>Name: easter bunny</p>
      <p>Number: 1800eaterbunny</p>
      <p>About: randomrandomrandom</p>
      </div>
      </div>
    )
  }
}

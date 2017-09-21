import React, { Component } from 'react';
import '../styles/App.css';

export default class About extends Component {
  render() {

let otherStyle = {
  "backgroundColor": "#bce9f4",
      "backgroundSize": "cover",
      "height": "50%",
      "padding": "100px",
      "fontFamily": "Arizonia",
      "textAlign":"center"
    }
    let aboutStyle = {
      "backgroundColor": "#bce9f4",
      "backgroundSize": "cover",
      "backgroundPosition": "top",
      "height": "50%",
      "fontFamily": "Arizonia",
      "padding": "100px",
      "textAlign":"center"
    }
    return (
      <div className="app-body about offset col-lg-10 col-lg-offset-1">
        <section className="row" style={aboutStyle}>
            <hr/>
            <p style={{color:"#0d0056", textAlign:"center"}} className="primary-text">
              Hello, my name is Sarah Shuey and I am a junior developer learning React!
            </p>
            <p style={{color:"#0d0056", textAlign:"center"}} className="primary-text">
              I have lived in Austin for 4 years and have a dog named Ginger. My hobbies include shopping, cleaning, organizing, and being outdoors.
            </p>
            <p style={{color:"#0d0056", textAlign:"center"}} className="primary-text">I am from Dallas Tx, I have 2 brothers and 1 sister. I am the youngest member of my family and also the shortest. </p>
        </section>
      </div>
    );
  }
}

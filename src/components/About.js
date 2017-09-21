import React, { Component } from 'react';
import '../styles/App.css';

export default class About extends Component {
  render() {

let otherStyle = {
  "backgroundColor": "#00FFCE",
      "backgroundSize": "cover",
      "height": "50%",
      "padding": "100px",
      "fontFamily": "Arizonia",
      "textAlign":"center"
    }
    let aboutStyle = {
      "backgroundColor": "#00FFCE",
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
          <article className="col-lg-6 col-lg-offset-3">
            <h2 className="headings">
              ME!
            </h2>
            <hr/>
            <p className="primary-text">
              This is my About section, I am a junior developer learning React!!!
            </p>
            <p className="primary-text">
              I have lived in Austin for 4 years, I have a dog named Ginger and my hobbies include shopping, cleaning, organizing, and being outdoors
            </p>
          </article>
        </section>
        <section className="row" style= {otherStyle}>
          <article className="col-lg-5">
            <hr/>
            <p className="primary-text">This is my other section of about me. I am from Dallas Tx, I have 2 brothers and 1 sister. I am the youngest member of my family and also the shortest. </p>
          </article>
        </section>
      </div>
    );
  }
}

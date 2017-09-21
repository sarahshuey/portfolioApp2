import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    // INLINE STYLING
    let otherStyle = {
      "backgroundColor": "#bce9f4",
      "backgroundSize": "cover",
      "height": "100%",
      "padding": "100px"
    }
    let aboutStyle = {
      "backgroundColor": "#bce9f4",
      "backgroundSize": "cover",
      "backgroundPosition": "top",
      "height": "100%",
      "padding": "100px"
    }
    return (
      <div className="app-body about offset col-lg-10 col-lg-offset-1">
        <section className="row" style={aboutStyle}>
          <article className="col-lg-6 col-lg-offset-3">
            <hr/>
            <p style={{color:"#0d0056", textAlign:"center"}}className="primary-text">
              Welcome to my Home Page, this is an mock portfolio that showcases my React abilities!
            </p>
          </article>
        </section>
      </div>
    );
  }
}

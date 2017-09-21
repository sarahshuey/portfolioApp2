import React, { Component } from 'react';
import image from '../images/download.jpg'
import image2 from '../images/image-slider2.jpg'
import image3 from '../images/images.jpg'

export default class Portfolio extends Component {
  render(){
    let style = {
      "backgroundColor": "#A18CFF",
      "backgroundSize": "cover",
      "height": "100%",
      "padding": "50px"
    }
    let subHeadings = {
      "color": "#fff",
    }
    return(
      <div className="app-body findus offset col-lg-10 col-lg-offset-1">
        <section className="row" style={style}>
        <div className="image">
        <img style={{width: 250, height: 250, padding:"10px"}} src={image} alt="img"></img>
          <img style={{width: 250, height: 250, padding:"10px"}} src={image2} alt="img"/>
          <img style={{width: 250, height: 250, padding:"10px"}} src={image3} alt="img"/>
          </div>
          <div className="col-lg-8 map">
            <h3 className="sub-headings" style={subHeadings}>Me</h3>
            <a href="/"><p className="primary-text">Sarah Shuey Austin Tx</p></a>
          </div>
    </section>
  </div>
    )
  }
}

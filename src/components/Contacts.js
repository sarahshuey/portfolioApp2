import React, { Component } from 'react';
import '../styles/App.css';
import {Link} from 'react-router-dom';

export default class Contacts extends Component {
  render() {
    let contactStyle = {
      "backgroundColor": "#bce9f4",
      "backgroundSize": "cover",
      "backgroundPosition": "top",
      "height": "100%",
      "padding": "100px",
      "display":"flex",
      "flexDirection":"row",
      "justifyContent":"center"
    }
    let linkStyle={
      "textDecoration":"none",
      "color":"#0d0056",
      "paddingLeft":"10px"
    }
    return(
      <div className="LinksContainer" style={contactStyle}>
      <p>
       <a style={linkStyle} target="_blank" href="https://github.com/">Github</a>
        </p>
        <p>
            <a style={linkStyle} target="_blank" href="https://facebook.com/">Facebook</a>
          </p>
          <p>
              <a style={linkStyle} target="_blank" href="https://linkedin.com/">LinkedIn</a>
            </p>
            <p>
                <a style={linkStyle} target="_blank" href="https://instagram.com/">Instagram</a>
              </p>
      </div>
    )
  }
}

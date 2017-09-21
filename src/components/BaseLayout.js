import React, {Component} from 'react';
// IMPORT LINK
import { NavLink } from 'react-router-dom';

export default class BaseLayout extends Component {
  render(){
    // INLINE STYLING
    let titleStyle = {
      "fontFamily": "Arizonia",
      "fontSize": "7rem",
      "padding": "0, auto"
    }
    let subtitleStyle = {
      "fontFamily": "Raleway",
      "fontSize": "4rem"
    }
    let headerStyle = {
      "textAlign": "center",
      "height": "200px",
      "color": "#fff",
      "backgroundColor": "#00FFCE",
      "backgroundSize": "cover",
      "backgroundPosition": "center",
      "boxShadow":"rgba(0, 0, 0, 0.22) -2px 9px 5px 0px",
      "textShadow": "1px 1px 2px black",
      "fontFamily": "Arizonia",
    }
    let navTitle = {
      "fontFamily": "Arizonia",
      "fontSize": "30px",
      "backgroundColor": "#00FFCE",
      "textAlign": "center",
      "textDecoration": "none",
      "display":"flex",
      "flexDirection": "row",
      "displayFlex": "center"
    }
    let footer = {
      "backgroundColor": "#A18CFF",
      "textAlign": "center"
    }

    return (
      <div className="container-fluid nav">
        <nav className="row navbar navbar-inverse">
          <div className="container-fluid">
            <div style={navTitle} className="navbar-header">
              <ul style={navTitle} className="nav navbar-nav">
                <li style={navTitle}>
                  <NavLink to="/">Home</ NavLink >
                </li>
                <li style={navTitle}>
                <NavLink to="/about"> About </NavLink>
              </li>
                <li style={navTitle}>
                  <NavLink  to="/portfolio"> Portfolio </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="col-lg-12 header"
            style={headerStyle}>
            <div className="header-title">
              <div
                className="restaurant-name"
                style={titleStyle}>
                Sarah Shuey
              </div>
              <div className="subtitle" style={subtitleStyle}>
                developer
              </div>
            </div>
          </div>
        </nav>
        {/*
          PASS IN CHILDREN
          */}
        {this.props.children}
        <footer style={footer} className="col-lg-11">
          <span className="footer-title">Sarah Shuey </span>
          <span>
            Austin Tx | (512) 000-9999
          </span>
        </footer>
      </div>
    );
  }
}

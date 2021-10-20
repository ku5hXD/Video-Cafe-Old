import React from "react";
import {
  Route,
  Link,
  Switch,
  NavLink,
} from "react-router-dom";
import "../css/Home.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNewspaper,
  faGamepad,
  faTheaterMasks,
  faPodcast,
  faFilm,
  faMusic,
  faBasketballBall,
} from "@fortawesome/free-solid-svg-icons";


import logo from "../images/logo-2.png";
import All from "./All";
import Movies from "./Movies";
import Comedy from "./Comedy";
import Sports from "./Sports";
import Podcasts from "./Podcasts";
import News from "./News";
import Gaming from "./Gaming";
import Music from "./Music";

const Home = () => {
  return (
    <div>
      <div className="navbar navbar-custom">
        <img src={logo} className="img1" style={{ marginLeft: "1rem" }} />

        <h2 className="cafe-title"> VIDEO CAFE </h2>

        <Link to="/upload">
          <button className="upld-btn">Upload</button>
        </Link>
      </div>

      <div className="main-body">
        <div className="leftBar">
          <h2 className="category-title">Categories</h2>

          <NavLink
            to="all"
            style={{ textDecoration: "none" }}
            activeStyle={{ backgroundColor: "black", textAlign: "center" }}
            className="cat-link"
          >
            <h5 className="cat-link-text" style={{ textAlign: "center" }}>
              All
            </h5>
          </NavLink>

          <NavLink
            to="news"
            style={{ textDecoration: "none" }}
            activeStyle={{ backgroundColor: "black", textAlign: "center" }}
            className="cat-link"
          >
            <h5 className="cat-link-text">
              <FontAwesomeIcon
                icon={faNewspaper}
                style={{ marginRight: "15px" }}
              />
              News
            </h5>
          </NavLink>

          <NavLink
            to="gaming"
            style={{ textDecoration: "none" }}
            activeStyle={{ backgroundColor: "black", textAlign: "center" }}
            className="cat-link"
          >
            <h5 className="cat-link-text">
              <FontAwesomeIcon icon={faGamepad} style={{ marginRight: "15px" }} />
              Gaming
            </h5>
          </NavLink>

          <NavLink
            to="comedy"
            style={{ textDecoration: "none" }}
            activeStyle={{ backgroundColor: "black", textAlign: "center" }}
            className="cat-link"
          >
            <h5 className="cat-link-text">
              <FontAwesomeIcon
                icon={faTheaterMasks}
                style={{ marginRight: "15px" }}
              />
              Comedy
            </h5>
          </NavLink>

          <NavLink
            to="podcasts"
            style={{ textDecoration: "none" }}
            activeStyle={{ backgroundColor: "black", textAlign: "center" }}
            className="cat-link"
          >
            <h5 className="cat-link-text">
              <FontAwesomeIcon icon={faPodcast} style={{ marginRight: "15px" }} />
              Podcasts
            </h5>
          </NavLink>

          <NavLink
            to="movies"
            style={{ textDecoration: "none" }}
            activeStyle={{ backgroundColor: "black", textAlign: "center" }}
            className="cat-link"
          >
            <h5 className="cat-link-text">
              <FontAwesomeIcon icon={faFilm} style={{ marginRight: "15px" }} />
              Movies
            </h5>
          </NavLink>

          <NavLink
            to="sports"
            style={{ textDecoration: "none" }}
            activeStyle={{ backgroundColor: "black", textAlign: "center" }}
            className="cat-link"
          >
            <h5 className="cat-link-text">
              <FontAwesomeIcon
                icon={faBasketballBall}
                style={{ marginRight: "15px" }}
              />
              Sports
            </h5>
          </NavLink>

          <NavLink
            to="music"
            style={{ textDecoration: "none" }}
            activeStyle={{ backgroundColor: "black", textAlign: "center" }}
            className="cat-link"
          >
            <h5 className="cat-link-text">
              <FontAwesomeIcon icon={faMusic} style={{ marginRight: "15px" }} />
              Music
            </h5>
          </NavLink>

        </div>

        <div className="right-bar">
          <Switch>
            <Route exact path="/home/all" component={All}></Route>
            <Route exact path="/home/sports" component={Sports}></Route>
            <Route exact path="/home/comedy" component={Comedy}></Route>
            <Route exact path="/home/gaming" component={Gaming}></Route>
            <Route exact path="/home/movies" component={Movies}></Route>
            <Route exact path="/home/news" component={News}></Route>
            <Route exact path="/home/podcasts" component={Podcasts}></Route>
            <Route exact path="/home/music" component={Music}></Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Home;

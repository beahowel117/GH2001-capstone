import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { logout } from "../store";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import SearchIcon from "@material-ui/icons/Search";
import GradeIcon from "@material-ui/icons/Grade";
import FormatAlignJustifyIcon from "@material-ui/icons/FormatAlignJustify";
import PersonIcon from "@material-ui/icons/Person";
import HomeIcon from "@material-ui/icons/Home";
import IconButton from "@material-ui/core/IconButton";
import SvgIcon from "@material-ui/core/SvgIcon";
import DescriptionIcon from "@material-ui/icons/Description";
import ArtTrackIcon from "@material-ui/icons/ArtTrack";
import Profile from "./profile";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ShopIcon from "@material-ui/icons/Shop";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import InfoIcon from "@material-ui/icons/Info";
import Tooltip from "@material-ui/core/Tooltip"


const useStyles = makeStyles(theme => ({
  appBar: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    top: "auto",
    background: "#BAC1B8"
  },
  grow: {
    flexGrow: 1
  }
}));

const BottomAppBar = props => {
  function handleClick(e) {
    e.preventDefault();
    if (e.target.name === "home") history.push("/");
    else if (e.target.name === "news") history.push("/news");
    else if (e.target.name === "search") history.push("/search");
    else if (e.target.name === "profile") history.push("/profile");
    else if (e.target.name === "signup") history.push("/signup");
    else if (e.target.name === "altCart") history.push("/altCart");
    else if (e.target.name === "rating") history.push("/rating");
    else history.push("/");
  }
  const classes = useStyles();
  const isLoggedIn = props.isLoggedIn;
  return (
    <AppBar
      position="fixed"
      style={{ background: "#f7f7f7" }}
      className={classes.appBar}
    >
      <Toolbar
        className={classes.toolbar}
        style={{
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        <div className="mainNav">
          <Tooltip title="Alternative Cart">
          <IconButton
            name="altCart"
            onClick={props.handleClick}
            component={RouterLink}
            to="/altCart"
          >
            <ShoppingCartIcon />
          </IconButton>
          </Tooltip>
          <Tooltip title="Company Rating">
          <IconButton
            name="rating"
            onClick={props.handleClick}
            component={RouterLink}
            to="/rating"
          >
            <GradeIcon />
          </IconButton>
          </Tooltip>
          <Tooltip title="Articles">
          <IconButton
            name="news"
            onClick={props.handleClick}
            component={RouterLink}
            to="/news"
          >
            <FormatAlignJustifyIcon />
          </IconButton>
          </Tooltip>
          <Tooltip title="Suggested Stores" >
          <IconButton
            name="search"
            onClick={props.handleClick}
            component={RouterLink}
            to="/search"
          >
            <CheckCircleIcon />
          </IconButton>
          </Tooltip>
        </div>
        <div className="navInfo">
          <Tooltip title="Home Page">
          <IconButton
            name="home"
            onClick={props.handleClick}
            component={RouterLink}
            to="/home"
          >
            <InfoIcon />
          </IconButton>
          </Tooltip>
          {isLoggedIn ? (
            <Tooltip title="Wishlist/Logout">
            <IconButton
              name="profile"
              onClick={props.handleClick}
              component={RouterLink}
              to="/profile"
            >
              <PersonIcon />
            </IconButton>
            </Tooltip>
          ) : (
            <Tooltip title="Login/Signup">
            <IconButton
              name="login"
              onClick={props.handleClick}
              component={RouterLink}
              to="/login"
            >
              <PersonIcon />
            </IconButton>
            </Tooltip>
          )}
        </div>
        {/* <nav>{navRoutes()}</nav> */}
      </Toolbar>
    </AppBar>
  );
};

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    isAdmin: !!state.user.isAdmin
  };
};

// const mapDispatch = dispatch => {
//   function handleClick() {
//     dispatch((logout))
//   }
//   return (
//     handleClick
//   )
// }
export default connect(mapState)(BottomAppBar);

/**
 * PROP TYPES
 */
BottomAppBar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  isAdmin: PropTypes.bool.isRequired
};

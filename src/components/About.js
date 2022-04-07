import React from "react";
import user from "../data/user"
import Links from "./Links"
console.log(user.links)

function About(props) {
  
  function showBio() {
    if (props.bio) {
      return (
        <p>{props.bio}</p>
      )
    } else {
      return null
    }
  }
  

  return (
    <div id="about">
      <h2>About Me</h2>
      {showBio()}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links />
    </div>
  );
}

export default About;

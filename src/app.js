/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { library } from "webpack";

window.onload = function() {
  //Array options
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let topLevelDomain = [".com", ".net", ".us", ".io", ".tv"];

  //Empty array to assign Array options values
  let domains = [];

  //Cycles to push the Array Options into domains
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < topLevelDomain.length; l++) {
          domains.push(pronoun[i] + adj[j] + noun[k] + topLevelDomain[l]);
        }
      }
    }
  }

  console.log(domains);

  document.getElementById("malditaListaDeDominios").innerHTML = domains;
};

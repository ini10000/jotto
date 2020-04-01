import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./App.css";

import Congrats from "./Congrats";
import GuessedWords from "./GuessedWords";
import { getSecretWord } from "./actions";
import Input from "./Input";

export const UCApp = props => {
  useEffect(() => props.getSecretWord(), [props]);
  return (
    <div className="container">
      <h1>Jotto</h1>
      <Congrats success={props.success} />
      <Input />
      <GuessedWords guessedWords={props.guessedWords} />
    </div>
  );
};

const mapStateToProps = state => {
  const { success, guessedWords, secretWord } = state;
  return { success, guessedWords, secretWord };
};

export default connect(mapStateToProps, { getSecretWord })(UCApp);

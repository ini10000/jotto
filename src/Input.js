import React from "react";
import { connect } from "react-redux";

import { guessWord } from "./actions";

export function UCInput(props) {
  const inputBox = React.useRef();
  const submitWord = evt => {
    evt.preventDefault();
    const guessedWord = inputBox.current.value;
    if (guessedWord && guessedWord.length > 0) {
      props.guessWord(guessedWord);
    }
  };
  const contents = props.success ? null : (
    <form className="form-inline">
      <input
        data-test="input-box"
        className="mb-2 mx-sm-3"
        ref={inputBox}
        id="word-guess"
        type="text"
        placeholder="Enter Guess"
      />
      <button
        data-test="submit-button"
        className="btn btn-primary mb-2"
        onClick={submitWord}
        type="submit"
      >
        Submit
      </button>
    </form>
  );
  return <div data-test="component-input">{contents}</div>;
}

const mapStateToProps = ({ success }) => {
  return { success };
};

export default connect(mapStateToProps, { guessWord })(UCInput);

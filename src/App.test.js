import React from "react";
import { shallow } from "enzyme";

import { storeFactory } from "../tests/testUtils";
import App, { UCApp } from "./App";

/**
 * Factpry function to crerate a ShallowWrapper for the GussedWords component
 * @function setup
 * @param {object} initialState
 * @return {ShallowWrapper}
 */

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<App store={store} />).dive();

  return wrapper;
};

describe("redux props", () => {
  test("has access to `success` state", () => {
    const success = true;
    const wrapper = setup({ success });
    const successProp = wrapper.props().success;
    expect(successProp).toBe(success);
  });
  test("has access to `secretWord` state", () => {
    const secretWord = true;
    const wrapper = setup({ secretWord });
    const secretWordProp = wrapper.props().secretWord;
    expect(secretWordProp).toBe(secretWord);
  });
  test("has access to `guessedWords` state", () => {
    const guessedWords = [{ guessWord: "train", letterMatchCount: 3 }];
    const wrapper = setup({ guessedWords });
    const guessedWordsProp = wrapper.props().guessedWords;
    expect(guessedWordsProp).toEqual(guessedWords);
  });
  test("getSecretWord action creator is a function prop", () => {
    const wrapper = setup();
    const getSecretWordProp = wrapper.props().getSecretWord;
    expect(getSecretWordProp).toBeInstanceOf(Function);
  });
});

describe("Authors", () => {
  let wrapper;
  let useEffect;
  let setState = jest.fn();

  const mockUseEffect = () => {
    useEffect.mockImplementation(f => f());
  };

  beforeEach(() => {
    useEffect = jest.spyOn(React, "useEffect");

    mockUseEffect();
    mockUseEffect();
  });

  describe("on start", () => {
    it("loads the authors", () => {
      const props = {
        getSecretWord: setState,
        success: false,
        guessedWords: []
      };
      wrapper = shallow(<UCApp {...props} />);
      expect(setState).toHaveBeenCalled();
    });
  });
});

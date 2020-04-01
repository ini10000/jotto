import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr, storeFactory } from "../tests/testUtils";
import Input, { UCInput } from "./Input";

/**
 * Factpry function to crerate a ShallowWrapper for the GussedWords component
 * @function setup
 * @param {object} initialState
 * @return {ShallowWrapper}
 */

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />)
    .dive()
    .dive();
  return wrapper;
};

const setupForRedux = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />).dive();

  return wrapper;
};

describe("render", () => {
  describe("word has not been guessed", () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: false };
      wrapper = setup(initialState);
    });
    test("renders component without error", () => {
      const component = findByTestAttr(wrapper, "component-input");
      console.log(component);
      expect(component.length).toBe(1);
    });
    test("renders input box", () => {
      const inputBox = findByTestAttr(wrapper, "input-box");
      expect(inputBox.length).toBe(1);
    });
    test("renders isubmit button", () => {
      const submitButton = findByTestAttr(wrapper, "submit-button");
      expect(submitButton.length).toBe(1);
    });
  });
  describe("word has been guessed", () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: true };
      wrapper = setup(initialState);
    });
    test("renders component without error", () => {
      const component = findByTestAttr(wrapper, "component-input");
      expect(component.length).toBe(1);
    });
    test("renders input box", () => {
      const inputBox = findByTestAttr(wrapper, "input-box");
      expect(inputBox.length).toBe(0);
    });
    test("renders isubmit button", () => {
      const submitButton = findByTestAttr(wrapper, "submit-button");
      expect(submitButton.length).toBe(0);
    });
  });
});
describe("redux props", () => {
  test("has success piece of state as props", () => {
    const wrapper = setupForRedux({ success: true });
    const successProp = wrapper.props().success;
    expect(successProp).toBe(true);
  });
  test("guessWord action creator is a function prop", () => {
    const wrapper = setupForRedux();
    const guessWordProp = wrapper.props().guessWord;
    expect(guessWordProp).toBeInstanceOf(Function);
  });
});
describe("guessword action creator call", () => {
  let guessWordMock;
  let wrapper;
  beforeEach(() => {
    guessWordMock = jest.fn();
    const props = {
      guessWord: jest.fn()
    };
    wrapper = shallow(<UCInput {...props} />);
    wrapper.inputBox.current = { value: "train" };
    const submitButton = findByTestAttr(wrapper, "submit-button");
    console.log(wrapper);
    submitButton.simulate("click", { preventDefault() {} });
  });
  test("calls guessWord when button is clicked", () => {
    expect(guessWordMock.mock.calls.length).toBe(1);
  });
  test("calls guessWord with input value as argument", () => {
    expect(guessWordMock.mock.calls[0][0]).toBe("train");
  });
});

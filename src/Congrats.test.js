import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr, checkProps } from "../tests/testUtils";
import Congrats from "./Congrats";

const defaultProps = { success: false };

/**
 * Factory function to create ShallowWrapper for the congrats component
 * @function setup
 * @param {object} props
 * @returns {ShallowWrapper}
 */

const setup = props => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Congrats {...setupProps} />);
};

test("renders without error", () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, "component-congrats");
  expect(component.length).toBe(1);
});
test("renders no text when `success` props is false", () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, "component-congrats");
  expect(component.text()).toBe("");
});
test("renders non-empty congrats message when `success` props is true", () => {
  const wrapper = setup({ success: true });
  const congratsMessage = findByTestAttr(wrapper, "congrats-message");
  expect(congratsMessage.text().length).not.toBe(0);
});
test("does not throw warning with expected props", () => {
  const expectedProps = { success: true };
  checkProps(Congrats, expectedProps);
});

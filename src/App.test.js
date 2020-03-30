// import React from "react";
// import { shallow, configure } from "enzyme";
// import Adapter from "enzyme-adapter-react-16";

// import App from "./App";

// configure({ adapter: new Adapter() });

// /**
//  * Factory function to create a ShallowWrapper for the App Component
//  * @function setup
//  * @param {object} props - Component props specific to this setup.
//  * @param {any} state - Initial state for setup.
//  * @returns {ShallowWrapper}
//  */
// const setup = (props = {}, state = null) => {
//   return shallow(<App {...props} />);
// };

// /**
//  * Return ShallowWrapper containing node(s) with the given data-test value.
//  * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within
//  * @param {string} val - Value of data-test attribute for search.
//  * @returns {ShallowWrapper}
//  */

// const findByTestAttr = (wrapper, val) => {
//   return wrapper.find(`[data-test="${val}"]`);
// };

// test("renders without error", () => {
//   const wrapper = setup();
//   const appComponent = findByTestAttr(wrapper, "component-app");
//   expect(appComponent.length).toBe(1);
// });
// test("renders increment button", () => {
//   const wrapper = setup();
//   const button = findByTestAttr(wrapper, "increment-button");
//   expect(button.length).toBe(1);
// });
// test("renders counter display", () => {
//   const wrapper = setup();
//   const counterDisplay = findByTestAttr(wrapper, "counter-display");
//   expect(counterDisplay.length).toBe(1);
// });
// test("renders decrement button", () => {
//   const wrapper = setup();
//   const button = findByTestAttr(wrapper, "decrement-button");
//   expect(button.length).toBe(1);
// });
// test("renders zero button", () => {
//   const wrapper = setup();
//   const button = findByTestAttr(wrapper, "zero-button");
//   expect(button.length).toBe(1);
// });
// test("counter starts at 0", () => {
//   const wrapper = setup();
//   const counter = 0;
//   expect(wrapper.find(`.click-${counter}`).length).toBe(1);
// });
// test("clicking button increments counter display", () => {
//   const counter = 0;
//   const wrapper = setup();
//   wrapper.find("[data-test='increment-button']").simulate("click");
//   wrapper.update();
//   const counterDisplay = findByTestAttr(wrapper, "counter-display");
//   expect(counterDisplay.text()).toContain(counter + 1);
// });
// test("clicking button decrements counter display", () => {
//   const wrapper = setup();
//   const counter = 0;
//   wrapper.find("[data-test='decrement-button']").simulate("click");
//   const counterDisplay = findByTestAttr(wrapper, "counter-display");
//   expect(counterDisplay.text()).toContain(counter - 1);
// });
// test("clicking button sets counter display to 0", () => {
//   const wrapper = setup();
//   wrapper.find("[data-test='zero-button']").simulate("click");
//   const counterDisplay = findByTestAttr(wrapper, "counter-display");
//   expect(counterDisplay.text()).toContain(0);
// });
// test("display error message if counter is negative", () => {
//   const wrapper = setup();
//   wrapper.find("[data-test='decrement-button']").simulate("click");
//   const counterDisplay = findByTestAttr(wrapper, "error-message");
//   expect(counterDisplay.length).toBe(1);
// });
// test("hide error message if counter is positive", () => {
//   const wrapper = setup();
//   wrapper.find("[data-test='increment-button']").simulate("click");
//   const counterDisplay = findByTestAttr(wrapper, "error-message");
//   expect(counterDisplay.length).toBe(0);
// });

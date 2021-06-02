import Header from "./header";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("header rendering", () => {
  test("header rendered", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists(".header")).toBe(true);
  });
  test("button is rendered", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists("button")).toBe(true);
  });
  test("button text rendered", () => {
    const wrapper = shallow(<Header />);
    const result = wrapper.find("button").text();
    expect(result).toBe("connect wallet");
  });
  test("logo is rendered", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists(".logo")).toBe(true);
  });
  test("menu is rendered", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists(".menu")).toBe(true);
  });
  test("menu has nested children", () => {
    const wrapper = shallow(<Header />);
    const result = wrapper.find(".menu").children().length;
    expect(result).toEqual(6);
  });
});

import App from "./App";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("header rendering", () => {
  test("header rendered", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists(".header")).toBe(true);
  });
  test("button is rendered", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists("button")).toBe(true);
  });
  test("button text rendered", () => {
    const wrapper = shallow(<App />);
    const result = wrapper.find("button").text();
    expect(result).toBe("connect");
  });
  test("logo is rendered", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists(".logo")).toBe(true);
  });
  test("menu is rendered", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists(".menu")).toBe(true);
  });
});

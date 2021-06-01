import App from "./App";

import { configure, mount, shallow } from "enzyme";
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
  test("hamburger is rendered", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists(".hamburger")).toBe(true);
  });
  test("menu has nested children", () => {
    const wrapper = shallow(<App />);
    const result = wrapper.find(".menu").children().length;
    expect(result).toEqual(7);
  });
  test("menu link text rendered", () => {
    const wrapper = shallow(<App />);
    const menu1 = wrapper.find(".menu").childAt(0).text();
    expect(menu1).toEqual("Home");
    const menu2 = wrapper.find(".menu").childAt(1).text();
    expect(menu2).toEqual("Trade");
    const menu3 = wrapper.find(".menu").childAt(2).text();
    expect(menu3).toEqual("Farms");
    const menu4 = wrapper.find(".menu").childAt(3).text();
    expect(menu4).toEqual("Pools");
    const menu5 = wrapper.find(".menu").childAt(4).text();
    expect(menu5).toEqual("Productions");
    const menu6 = wrapper.find(".menu").childAt(5).text();
    expect(menu6).toEqual("Collectibles");
    const menu7 = wrapper.find(".menu").childAt(6).text();
    expect(menu7).toEqual("More");
  });
});

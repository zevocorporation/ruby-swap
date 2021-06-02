import Footer from "./footer";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("Footer is rendering", () => {
  test("footer is rendered", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists(".footer")).toBe(true);
  });
  test("social media icons rendered", () => {
    const wrapper = shallow(<Footer />);
    const result = wrapper.find(".social_icons").children().length;
    expect(result).toEqual(6);
  });
  test("copyright text is rendered", () => {
    const wrapper = shallow(<Footer />);
    const result = wrapper.find("p").text();
    expect(result).toEqual("Copyright @ Rubyswap 2021");
  });
});

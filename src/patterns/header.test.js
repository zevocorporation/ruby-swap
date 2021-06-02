import Header from "./header";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("header rendering", () => {
  test("header rendered", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists(".header")).toBe(true);
  });
});

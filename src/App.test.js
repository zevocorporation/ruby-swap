import App from "./App";
import Header from "./patterns/header";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("App is rendered", () => {
  test("Header is rendered", () => {
    const wrapper = shallow(<App />);
    const result = wrapper.find(Header);
    expect(result.exists()).toBe(true);
  });
});

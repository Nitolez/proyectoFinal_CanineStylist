import React from "react";
import { shallow } from "enzyme";
import Galeria from "./Galeria";

describe("Galeria", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Galeria />);
    expect(wrapper).toMatchSnapshot();
  });
});

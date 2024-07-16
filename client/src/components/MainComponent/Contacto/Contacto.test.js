import React from "react";
import { shallow } from "enzyme";
import Contacto from "./Contacto";

describe("Contacto", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Contacto />);
    expect(wrapper).toMatchSnapshot();
  });
});

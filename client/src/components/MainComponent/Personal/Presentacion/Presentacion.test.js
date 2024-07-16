import React from "react";
import { shallow } from "enzyme";
import Presentacion from "./Presentacion";

describe("Presentacion", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Presentacion />);
    expect(wrapper).toMatchSnapshot();
  });
});

import React from "react";
import { shallow, mount } from "enzyme";

import Admin from "./Admin";

describe("<Admin />", () => {
  it("Renders without crashing", () => {
    shallow(<Admin />);
  });
});

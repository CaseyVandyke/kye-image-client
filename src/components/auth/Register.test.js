import React from "react";
import { shallow, mount } from "enzyme";

import Register from "./Register";

describe("<Register />", () => {
  it("Renders without crashing", () => {
    shallow(<Register />);
  });
});

import React from "react";
import { mount } from "enzyme";
import Banner from "./../../component/reusable/banner";

let component;

beforeEach(() => {
  component = mount(<Banner />);
});

it("shoud have heading ", () => {
  expect(component.find("h1").length).toEqual(1);
});

it("shoud have class background", () => {
  expect(component.exists(".background")).toEqual(true);
});

afterEach(() => {
  component.unmount();
});

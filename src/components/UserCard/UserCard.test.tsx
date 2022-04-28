import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render } from "@testing-library/react";
import UserCard from "../UserCard";
import { UserType } from "../../types";

let user: UserType = {
  name: {
    title: "mr",
    first: "brad",
    last: "gibson",
  },
  email: "brad.gibson@example.com",

  phone: "011-962-7516",
  picture: {
    large: "https://randomuser.me/api/portraits/men/75.jpg",
    medium: "https://randomuser.me/api/portraits/med/men/75.jpg",
    thumbnail: "https://randomuser.me/api/portraits/thumb/men/75.jpg",
  },
  nat: "IE",
};

describe("UserCard Tests", () => {
  let component: any;
  beforeEach(() => {
    component = render(<UserCard user={user} />);
  });
  test("renders content", () => {
    component.getByText("011-962-7516");
  });
  test("test if toggle big screen button works", () => {
    const toggleDiv = component.getByTestId("toggle-div");
    const button = component.getByTestId("big-screen-button");
    expect(button.innerHTML).toEqual("See more");
    fireEvent.mouseDown(toggleDiv);
    expect(button.innerHTML).toEqual("See less");
  });
  test("test if toggle small screen button works", () => {
    const toggleDiv = component.getByTestId("toggle-div");
    const button = component.getByTestId("small-screen-button");
    expect(button.innerHTML).toEqual("See more");
    fireEvent.mouseDown(toggleDiv);
    expect(button.innerHTML).toEqual("See less");
  });
});

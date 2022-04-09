import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

// import App from "../client/App";
import Emote from "../client/components/Emote";

describe("Unit testing React components", () => {
  describe("Emote", () => {
    let post;
    const props = {
      msg: "&#128065 &#128068 &#128065",
    };

    beforeAll(() => {
      post = render(<Emote {...props} />);
    });

    test("Renders the passed-in text as a post", () => {
      expect(post.getByText(props.msg)).toHaveTextContent(props.msg);
    });
  });
});

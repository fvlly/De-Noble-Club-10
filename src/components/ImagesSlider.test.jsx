import { describe, it, expect } from "vitest";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ImageSlider from "./ImageSlider";
import { communityImages } from "../images";

describe("ImageSlider", () => {
  it("should subtract one from curentSlideIndex", () => {
    const user = userEvent.setup();

    //first we should render the images slider
    render(<ImageSlider images={communityImages} />);

    // we check if background image changes by checking if there's a change in the index
    const numberOfImages = communityImages.length;
    const currentIndex = numberOfImages;

    //we click on the previous button(Icon)
    const previousButton = screen.getByLabelText(/previous button/i);
    screen.debug(previousButton)
    user.click(previousButton)

    expect(currentIndex).not.toBe(0)
    expect(currentIndex).not.toBe(numberOfImages )


  });
});

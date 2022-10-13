import { describe, it, expect } from "vitest";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ChakraThemeWrapper from "./ChakraThemeWrapper";

import ImageSlider from "./ImageSlider";
import { communityImages } from "../images";

describe("ImageSlider", () => {
  it("should have background Image", () => {
    //first we should render the images slider
    render(
      <ChakraThemeWrapper>
        <ImageSlider images={communityImages} wrap />
      </ChakraThemeWrapper>
    );

    const bgImage = screen.getByTestId(/backgroundimage/i);
    expect(bgImage).toHaveStyle(
      `background-image: url(${communityImages[0].src})`
    );
  });

  it("should change background image to next image", () => {
    const user = userEvent.setup();

    render(
      <ChakraThemeWrapper>
        <ImageSlider images={communityImages} />
      </ChakraThemeWrapper>
    );

    // background Image
    const bgImage = screen.getByTestId(/backgroundimage/i);

    const nextButton = screen.getByLabelText(/next button/i);
    screen.debug(nextButton);

    //we change the background image to change on click on  nextButton
    user.click(nextButton);

    expect(bgImage.style.background).not.toBe(
      `background-image: url(${communityImages[0].src})`
    );
  });
});

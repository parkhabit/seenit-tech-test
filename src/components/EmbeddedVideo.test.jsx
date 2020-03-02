import React from "react";
import { mount } from "enzyme";
import EmbeddedVideo from "./EmbeddedVideo";

describe("EmbeddedVideo", () => {
  const props = {
    headingText: "Heading text",
    video: { title: "Video Title", src: "www.url.com" }
  };

  it("Matches the snapshot", () => {
    const wrapper = mount(<EmbeddedVideo {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("video starts off visible", () => {
    const wrapper = mount(<EmbeddedVideo {...props} />)
    expect(wrapper.find('iframe').length).toEqual(1);
    expect(wrapper.find('iframe').hasClass('embeddedvideo-frame-hidden')).toBe(false);
  });

  it("changes visibility of video to hidden when first clicked", () => {
    const wrapper = mount(<EmbeddedVideo {...props} />)
    wrapper.find('h3').simulate('click');
    expect(wrapper.find('iframe').hasClass('embeddedvideo-frame-hidden')).toBe(true);
  });

  it("toggles visibility of video from hidden to visible when clicked multiple times", () => {
    const wrapper = mount(<EmbeddedVideo {...props} />)
    wrapper.find('h3').simulate('click');
    wrapper.find('h3').simulate('click');
    expect(wrapper.find('iframe').hasClass('embeddedvideo-frame-hidden')).toBe(false);
  })
});

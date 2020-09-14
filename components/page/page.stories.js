import React from "react";
import Page from "./page";

export default {
    title: "Page",
    component: Page,
};

const Template = (args) => <Page {...args} />;

export const page = Template.bind({});
page.args = {
    children: "Just some random page content",
    background: "secondary",
};

page.storyName = "Page";

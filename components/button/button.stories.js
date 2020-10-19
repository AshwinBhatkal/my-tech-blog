import React from "react";
import Button from "./button";

export default {
    title: "Button",
    component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: "Button",
    type: "primary",
};

export const Accent = Template.bind({});
Accent.args = {
    children: "Button",
    type: "accent",
};

export const ExtraLarge = Template.bind({});
ExtraLarge.args = {
    children: "Button",
    type: "primary",
    size: "x-large",
};

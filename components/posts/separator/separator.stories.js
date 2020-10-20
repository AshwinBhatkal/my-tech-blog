import React from "react";
import Separator from "./separator";

export default {
	title: "Separator",
	component: Separator,
};

const Template = args => <Separator {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	type: "primary",
};

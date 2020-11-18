import Button from "./button";
import wrapLink from "../utils/wrapLink";

export default ({ href, children, ...props }) => {
    if (href) {
        return wrapLink(Button, href, children, props);
    } else {
        return <Button {...props}>{children}</Button>;
    }
};

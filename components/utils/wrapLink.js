import React from "react";
import Link from "next/link";

export default (ComponentToWrap, href, children, props) => {
    const ComponentRef = React.forwardRef(({ children, ...props }, ref) => {
        return <ComponentToWrap {...props} ref={ref}>{children}</ComponentToWrap>;
    });

    return (
        <Link href={href} passHref>
            <ComponentRef {...props}>{children}</ComponentRef>
        </Link>
    );
};
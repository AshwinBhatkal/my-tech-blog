const breakpoints = ["576px", "768px", "992px", "1200px"];

const minWidthMQ = breakpoints.map((breakpoint) => `@media ( min-width: ${breakpoint})`);
const maxWidthMQ = breakpoints.map((breakpoint) => `@media ( max-width: ${breakpoint})`);

export { breakpoints, minWidthMQ, maxWidthMQ };
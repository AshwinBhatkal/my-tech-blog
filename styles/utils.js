// index Multiplier to generate styles for header
const indexMultiplier = {
    one: [1.5, 1.125, 1, 0.875, 0.75],
    two: [1.75, 1.125, 1, 0.875, 0.75],
    three: [2.25, 1.5, 1.125, 1, 0.875],
};

export const headerStyles = (index, base) => {
    return indexMultiplier[index].reduce((accumulator, currentValue, index) => {
        accumulator["h" + (index + 1)] = {
            fontSize: base * currentValue + "rem",
        };
        return accumulator;
    }, {});
};
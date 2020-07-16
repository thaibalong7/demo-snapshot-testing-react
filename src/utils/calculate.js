
// calculate sum of 2 integers
export const sum = (a, b) => {
    if (!Number.isInteger(a) || !Number.isInteger(b)) throw new Error('Invalid params');

    return a + b;
}
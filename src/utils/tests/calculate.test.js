/**
 *
 * Run `jest app/utils` to test this
 *
 */
import { sum } from '../calculate';

describe('Testing ButtonSwitch', () => {
    /**
     * Runs a function before each of the tests in this file runs.
     * If the function returns a promise or is a generator, Jest waits for that promise to resolve before running the test.
     */
    beforeEach(() => {

    });

    /**
     * Runs a function after each one of the tests in this file completes.
     * If the function returns a promise or is a generator, Jest waits for that promise to resolve before continuing.
     */
    afterEach(() => {

    });

    it('should true equal true', () => {
        // Assertion
        expect(true).toEqual(true);
    });

    it('should 1 + 2 equal 3', () => {
        expect(sum(1, 2)).toEqual(3);
    });

});

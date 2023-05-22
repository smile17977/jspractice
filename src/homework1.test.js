import { sumOfLength } from "./homework1"
import { multipleAndSum } from "./homework1"
import { jest } from '@jest/globals';
describe("sum", () => {
    it('it is a function', function () {
        expect(sumOfLength).toBeInstanceOf(Function)
    });

    it('console.log the sum of "abcd" length and "efgh" length', function () {
        const logSpy = jest.spyOn(console, 'log');

        sumOfLength("abcd","efgh")

        expect(logSpy).toHaveBeenCalledWith(8);
    });
})

describe("multipleAndSum", () => {
    it('it is a function', function () {
        expect(multipleAndSum).toBeInstanceOf(Function)
    });

    it('console.log the multiple and sum of 5 and 10', function () {
        const logSpy = jest.spyOn(console, 'log');

        multipleAndSum(5, 10)

        expect(logSpy).toHaveBeenCalledWith(50)
        expect(logSpy).toHaveBeenCalledWith(15);
    });
})
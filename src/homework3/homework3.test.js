
import { addNumbersBetween } from "./homework3.js";
import { multiplicationTableFor } from "./homework3.js";
import { jest } from "@jest/globals";
describe("addNumbersBetween", () => {
    it('should be a function', function () {
        expect(addNumbersBetween).toBeInstanceOf(Function)
    });

    it('should log 3825', function () {
        const logSpy = jest.spyOn(console, "log");

        addNumbersBetween(50, 100)

        expect(logSpy).toHaveBeenCalledWith(3825)
    });
})

describe("multiplicationTableFor", () => {
    it('should be a function', function () {
        expect(multiplicationTableFor).toBeInstanceOf(Function)
    });

    it('should log multiplication table for 7', function () {
        const logSpy = jest.spyOn(console, "log")
        const a = 7

        multiplicationTableFor(a)

        for (let i = 1; i <= 9; i++) {
            expect(logSpy).toHaveBeenCalledWith(`${a} x ${i} = ${ a * i }`)
        }
    });
})



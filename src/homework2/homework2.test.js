import { compare } from "./homework2.js";
import { getNameOfMonth } from "./homework2.js";
import { isCircleInSquare } from "./homework2.js";
import { jest } from "@jest/globals"

describe("compare two numbers", () => {
    it('it is a function', function () {
        expect(compare).toBeInstanceOf(Function);
    });

    it('console.log compare 4 and 8 ', function () {
        let logSpy = jest.spyOn(console, "log");

        compare(4, 8);

        expect(logSpy).toHaveBeenCalledWith(8);
    });
})

describe("get name of month", () => {
    it('it is a function', function () {
        expect(getNameOfMonth).toBeInstanceOf(Function);
    });

    it('console.log name of month ', function () {
        let logSpy = jest.spyOn(console, "log");

        getNameOfMonth(5)

        expect(logSpy).toHaveBeenCalledWith("Июнь")
    });
})

describe("is circle in square", () => {
    it('it is a function', function () {
        expect(isCircleInSquare).toBeInstanceOf(Function)
    });

    it('circle in square', function () {
        let sCircle = 50
        let sSquare = 100

        let result = isCircleInSquare(sSquare, sCircle)

        expect(result).toBeTruthy()
    });

    it('circle is not in square', function () {
        let sCircle = 150
        let sSquare = 100

        let result = isCircleInSquare(sSquare, sCircle)

        expect(result).toBeFalsy()
    });
})
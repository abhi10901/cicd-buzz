"use strict";

const generator = require('../buzz/generator'),
    expect = require('chai').expect,
    should = require('should');

describe("Testing generator", () => {

    describe("Testing Sampling", () => {
        it("should generate sample of size 1 when not passed size", () => {
            let items = [1, 2, 3, 4, 5];
            let sample = generator.getSample(items);

            expect(sample.length).to.be.equals(1);
            expect(items).to.include.members(sample);
        });

        it("should generate sample of size 2 when 2 passed as size", () => {
            let items = [1, 2, 3, 4, 5];
            let size = 2;
            let sample = generator.getSample(items, size);

            expect(sample).to.be.have.lengthOf(size);
            expect(items).to.include.members(sample);

            expect(sample[0]).to.be.not.equals(sample[1]);
        });
    });

    describe("Testing capitalize first character of the word", () => {
        it("should capitalize initial character", () => {
            let str = "abhishek";
            expect(generator.capitalizeFirst(str)).to.be.equals("Abhishek");
        });
    });

    describe("Testing capitalize first of each word utility", () => {
        it("should capitalize first letter of each word in statement", () => {
            let statement = "hello world";
            expect(generator.capitalizeFirstOfEachWord(statement)).to.be.equals("Hello World");
        });
    });

    describe("Testing buzz generator", () => {
        it("should generate buzz of at least 5 words", () => {
            let phrase = generator.generate_buzz();

            expect(phrase.split(" ")).to.have.length.greaterThan(5);
        });
    });
});
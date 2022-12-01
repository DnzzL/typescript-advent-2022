import day1 from "./index";
const fs = require("fs");

describe("On Day 1", () => {
  it(`part1`, () => {
    try {
      const data = fs.readFileSync("inputs/day1/part1_sample.txt", "utf8");
      expect(day1.solveForPartOne(data)).toBe(24000);
    } catch (err) {
      console.error(err);
    }
  });

  it(`part2`, () => {
    try {
      const data = fs.readFileSync("inputs/day1/part1_sample.txt", "utf8");
      expect(day1.solveForPartTwo(data)).toBe(45000);
    } catch (err) {
      console.error(err);
    }
  });
});

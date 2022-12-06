import day6 from "./index";
const fs = require("fs");

describe("On Day 5", () => {
  it(`part1`, () => {
    try {
      const data = fs.readFileSync("inputs/day6/part1_sample.txt", "utf8");
      expect(day6.solveForPartOne(data)).toBe("10");
    } catch (err) {
      console.error(err);
    }
  });

  it(`part2`, () => {
    try {
      const data = fs.readFileSync("inputs/day6/part1_sample.txt", "utf8");
      expect(day6.solveForPartTwo(data)).toBe("29");
    } catch (err) {
      console.error(err);
    }
  });
});

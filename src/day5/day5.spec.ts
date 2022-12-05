import day5 from "./index";
const fs = require("fs");

describe("On Day 5", () => {
  it(`part1`, () => {
    try {
      const data = fs.readFileSync("inputs/day5/part1_sample.txt", "utf8");
      expect(day5.solveForPartOne(data)).toBe("CMZ");
    } catch (err) {
      console.error(err);
    }
  });

  it(`part2`, () => {
    try {
      const data = fs.readFileSync("inputs/day5/part1_sample.txt", "utf8");
      expect(day5.solveForPartTwo(data)).toBe("MCD");
    } catch (err) {
      console.error(err);
    }
  });
});

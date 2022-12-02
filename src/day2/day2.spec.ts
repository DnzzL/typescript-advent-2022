import day2 from "./index";
const fs = require("fs");

describe("On Day 2", () => {
  it(`part1`, () => {
    try {
      const data = fs.readFileSync("inputs/day2/part1_sample.txt", "utf8");
      expect(day2.solveForPartOne(data)).toBe("15");
    } catch (err) {
      console.error(err);
    }
  });

  it(`part2`, () => {
    try {
      const data = fs.readFileSync("inputs/day2/part1_sample.txt", "utf8");
      expect(day2.solveForPartTwo(data)).toBe("12");
    } catch (err) {
      console.error(err);
    }
  });
});

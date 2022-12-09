import day8 from "./index";
const fs = require("fs");

describe("On Day 8", () => {
  it(`part1`, () => {
    try {
      const data = fs.readFileSync("inputs/day8/part1_sample.txt", "utf8");
      expect(day8.solveForPartOne(data)).toBe("21");
    } catch (err) {
      console.error(err);
    }
  });

  it(`part2`, () => {
    try {
      const data = fs.readFileSync("inputs/day8/part1_sample.txt", "utf8");
      expect(day8.solveForPartTwo(data)).toBe("8");
    } catch (err) {
      console.error(err);
    }
  });
});

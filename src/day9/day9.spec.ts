import day9 from "./index";
const fs = require("fs");

describe("On Day 9", () => {
  it(`part1`, () => {
    try {
      const data = fs.readFileSync("inputs/day9/part1_sample.txt", "utf8");
      expect(day9.solveForPartOne(data)).toBe("13");
    } catch (err) {
      console.error(err);
    }
  });

  it(`part2`, () => {
    try {
      const data = fs.readFileSync("inputs/day9/part2_sample.txt", "utf8");
      expect(day9.solveForPartTwo(data)).toBe("36");
    } catch (err) {
      console.error(err);
    }
  });
});

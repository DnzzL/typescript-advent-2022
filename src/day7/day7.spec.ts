import day7 from "./index";
const fs = require("fs");

describe("On Day 7", () => {
  it(`part1`, () => {
    try {
      const data = fs.readFileSync("inputs/day7/part1_sample.txt", "utf8");
      expect(day7.solveForPartOne(data)).toBe("95437");
    } catch (err) {
      console.error(err);
    }
  });

  it(`part2`, () => {
    try {
      const data = fs.readFileSync("inputs/day7/part1_sample.txt", "utf8");
      expect(day7.solveForPartTwo(data)).toBe("24933642");
    } catch (err) {
      console.error(err);
    }
  });
});

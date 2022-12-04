import day4 from "./index";
const fs = require("fs");

describe("On Day 4", () => {
  it(`part1`, () => {
    try {
      const data = fs.readFileSync("inputs/day2/part1_sample.txt", "utf8");
      expect(day4.solveForPartOne(data)).toBe("2");
    } catch (err) {
      console.error(err);
    }
  });

  it(`part1`, () => {
    try {
      const data = fs.readFileSync("inputs/day2/part1_sample.txt", "utf8");
      expect(day4.solveForPartOne(data)).toBe("4");
    } catch (err) {
      console.error(err);
    }
  });
});

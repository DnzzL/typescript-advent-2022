const fs = require("fs");
import day3 from "./index";

describe("On Day 3", () => {
  it(`part1`, () => {
    try {
      const data = fs.readFileSync("inputs/day2/part1_sample.txt", "utf8");
      expect(day3.solveForPartOne(data)).toBe("157");
    } catch (err) {
      console.error(err);
    }
  });

  it(`part1`, () => {
    try {
      const data = fs.readFileSync("inputs/day2/part1_sample.txt", "utf8");
      expect(day3.solveForPartOne(data)).toBe("70");
    } catch (err) {
      console.error(err);
    }
  });
});

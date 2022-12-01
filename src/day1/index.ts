import { Day } from "../day";

class Day1 extends Day {
  constructor() {
    super(1);
  }

  getCaloriesPerElf(input: string) {
    return input
      .split("\n\n")
      .map((e) => e.split("\n"))
      .map((e) => e.reduce((acc, n) => acc + parseInt(n), 0));
  }

  solveForPartOne(input: string): string {
    return Math.max(...this.getCaloriesPerElf(input)).toString();
  }

  solveForPartTwo(input: string): string {
    return this.getCaloriesPerElf(input)
      .sort((a, b) => b - a)
      .slice(0, 3)
      .reduce((acc, n) => acc + n, 0)
      .toString();
  }
}

export default new Day1();

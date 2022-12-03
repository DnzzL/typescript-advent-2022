import { Day } from "../day";

class Day3 extends Day {
  constructor() {
    super(3);
  }

  alphaVal = (s: string) =>
    s === s.toLocaleLowerCase()
      ? s.charCodeAt(0) - 97 + 1
      : s.charCodeAt(0) - 65 + 27;

  getIntersection(setA: Set<string>, setB: Set<string>): Set<string> {
    const intersection = new Set(
      [...setA].filter((element) => setB.has(element))
    );
    return intersection;
  }

  findItemInDouble(rucksack: string) {
    const partOne = new Set(rucksack.slice(0, rucksack.length / 2));
    const partTwo = new Set(
      rucksack.slice(rucksack.length / 2, rucksack.length)
    );
    return this.getIntersection(partOne, partTwo).values().next().value;
  }

  solveForPartOne(input: string): string {
    return input
      .split("\n")
      .map((rucksack) => this.findItemInDouble(rucksack))
      .map(this.alphaVal)
      .reduce((acc, x) => acc + x, 0)
      .toString();
  }

  solveForPartTwo(input: string): string {
    const rucksacks = input.split("\n");
    let priorities = 0;
    for (var i = 0; i < rucksacks.length; i += 3) {
      const intersection = this.getIntersection(
        this.getIntersection(new Set(rucksacks[i]), new Set(rucksacks[i + 1])),
        new Set(rucksacks[i + 2])
      );
      priorities += this.alphaVal(intersection.values().next().value);
    }
    return priorities.toString();
  }
}

export default new Day3();

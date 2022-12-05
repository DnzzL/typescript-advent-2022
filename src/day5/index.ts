import { Day } from "../day";

class Day5 extends Day {
  constructor() {
    super(5);
  }

  parseCrateInput(rawCrates: string) {
    const stacks = rawCrates
      .split("\n")
      .slice(-1)[0]
      .split(" ")
      .filter(Boolean)
      .map(Number);
    const piles: string[][] = stacks.map((k) => []);

    rawCrates
      .split("\n")
      .reverse()
      .slice(1)
      .forEach((level) => {
        for (let index = 0; index < Math.ceil(level.length / 4); index++) {
          const re = new RegExp(/[a-zA-Z]/g);
          const match = level.slice(index * 4, index * 4 + 3).match(re);
          if (match) {
            piles[index] = [...piles[index], match[0]];
          }
        }
      });
    return piles;
  }

  parseStepsInput(rawSteps: string) {
    let steps: number[][] = [];
    rawSteps.split("\n").forEach((step) => {
      const re = new RegExp(/\d+/g);
      const [amountToMove, sourcePile, destPile] = [...step.matchAll(re)];
      steps = [...steps, [+amountToMove[0], +sourcePile[0], +destPile[0]]];
    });
    return steps;
  }

  moveCrate(range: number, source: string[], dest: string[], reverse: Boolean) {
    const newSource = source.slice(0, -range);
    const crateToMove = source.slice(-range);
    const newDest = reverse
      ? [...dest, ...crateToMove.reverse()]
      : [...dest, ...crateToMove];
    return [newSource, newDest];
  }

  solveForPartOne(input: string): string {
    const [rawCrates, rawSteps] = input.split("\n\n");
    let piles = this.parseCrateInput(rawCrates);
    const steps = this.parseStepsInput(rawSteps);
    steps.forEach((step) => {
      const [amountToMove, sourcePile, destPile] = step;
      [piles[sourcePile - 1], piles[destPile - 1]] = this.moveCrate(
        amountToMove,
        piles[sourcePile - 1],
        piles[destPile - 1],
        true
      );
    });
    return piles.map((pile) => pile.slice(-1)).join("");
  }

  solveForPartTwo(input: string): string {
    const [rawCrates, rawSteps] = input.split("\n\n");
    let piles = this.parseCrateInput(rawCrates);
    const steps = this.parseStepsInput(rawSteps);
    steps.forEach((step) => {
      const [amountToMove, sourcePile, destPile] = step;
      [piles[sourcePile - 1], piles[destPile - 1]] = this.moveCrate(
        amountToMove,
        piles[sourcePile - 1],
        piles[destPile - 1],
        false
      );
    });
    return piles.map((pile) => pile.slice(-1)).join("");
  }
}

export default new Day5();

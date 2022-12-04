import { Day } from "../day";

class Day4 extends Day {
  constructor() {
    super(4);
  }

  range = (start: number, stop: number, step: number) =>
    Array.from(
      { length: (stop - start) / step + 1 },
      (_, i) => start + i * step
    );

  intersection = (set1: Set<number>, set2: Set<number>) =>
    new Set([...set1].filter((x) => set2.has(x)));

  isContained = (s1: string, s2: string) => {
    const [s1Min, s1Max] = s1.split("-");
    const [s2Min, s2Max] = s2.split("-");
    return +s1Min >= +s2Min && +s1Max <= +s2Max;
  };

  solveForPartOne(input: string): string {
    let fullyContained = 0;
    input.split("\n").forEach((assignments) => {
      const [assignement1, assignement2] = assignments.split(",");
      if (
        this.isContained(assignement1, assignement2) ||
        this.isContained(assignement2, assignement1)
      ) {
        fullyContained += 1;
      }
    });
    return fullyContained.toString();
  }

  solveForPartTwo(input: string): string {
    let overlaps = 0;
    input.split("\n").forEach((assignments) => {
      const [assignement1, assignement2] = assignments.split(",");
      const [s1Min, s1Max] = assignement1.split("-");
      const [s2Min, s2Max] = assignement2.split("-");
      const isOverlaping =
        this.intersection(
          new Set(this.range(+s1Min, +s1Max, 1)),
          new Set(this.range(+s2Min, +s2Max, 1))
        ).size > 0;
      if (isOverlaping) {
        overlaps += 1;
      }
    });
    return overlaps.toString();
  }
}

export default new Day4();

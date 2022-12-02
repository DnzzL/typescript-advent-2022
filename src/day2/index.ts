import { Day } from "../day";

class Day2 extends Day {
  constructor() {
    super(2);
  }

  getScorePartOne(playA: string, playB: string): number {
    const winScore = 6;
    const drawScore = 3;
    const lossScore = 0;
    const rockScore = 1;
    const paperScore = 2;
    const scissorsScore = 3;
    if (playA === "A") {
      return playB == "X"
        ? drawScore + rockScore
        : playB == "Y"
        ? winScore + paperScore
        : lossScore + scissorsScore;
    } else if (playA === "B") {
      return playB == "X"
        ? lossScore + rockScore
        : playB == "Y"
        ? drawScore + paperScore
        : winScore + scissorsScore;
    } else {
      return playB == "X"
        ? winScore + rockScore
        : playB == "Y"
        ? lossScore + paperScore
        : drawScore + scissorsScore;
    }
  }

  getScorePartTwo(playA: string, playB: string): number {
    const winScore = 6;
    const drawScore = 3;
    const lossScore = 0;
    const rockScore = 1;
    const paperScore = 2;
    const scissorsScore = 3;
    if (playA === "A") {
      return playB == "X"
        ? lossScore + scissorsScore
        : playB == "Y"
        ? drawScore + rockScore
        : winScore + paperScore;
    } else if (playA === "B") {
      return playB == "X"
        ? lossScore + rockScore
        : playB == "Y"
        ? drawScore + paperScore
        : winScore + scissorsScore;
    } else {
      return playB == "X"
        ? lossScore + paperScore
        : playB == "Y"
        ? drawScore + scissorsScore
        : winScore + rockScore;
    }
  }

  solveForPartOne(input: string): string {
    let score = 0;
    input.split("\n").forEach((round) => {
      const [playA, playB] = round.split(" ");
      score += this.getScorePartOne(playA, playB);
    });
    return score.toString();
  }

  solveForPartTwo(input: string): string {
    let score = 0;
    input.split("\n").forEach((round) => {
      const [playA, playB] = round.split(" ");
      score += this.getScorePartTwo(playA, playB);
    });
    return score.toString();
  }
}

export default new Day2();

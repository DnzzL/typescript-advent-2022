import { Day } from "../day";

class Day9 extends Day {
  constructor() {
    super(9);
  }

  getDistance(headPosition: number[], tailPosition: number[]) {
    const [headX, headY] = headPosition;
    const [tailX, tailY] = tailPosition;
    return Math.abs(headX - tailX) + Math.abs(headY - tailY);
  }

  areAtReach(headPosition: number[], tailPosition: number[]) {
    const [headX, headY] = headPosition;
    const [tailX, tailY] = tailPosition;
    return (
      (headX === tailX && Math.abs(headY - tailY) <= 2) ||
      (headY === tailY && Math.abs(headX - tailX) <= 2)
    );
  }

  getNewStraightPosition(direction: string, lastHeadPosition: number[]) {
    switch (direction) {
      case "U":
        return [lastHeadPosition[0], lastHeadPosition[1] + 1];
      case "D":
        return [lastHeadPosition[0], lastHeadPosition[1] - 1];
      case "L":
        return [lastHeadPosition[0] - 1, lastHeadPosition[1]];
      case "R":
        return [lastHeadPosition[0] + 1, lastHeadPosition[1]];
      default:
        return lastHeadPosition;
    }
  }

  getNewDiagonalPosition(
    newHeadPosition: number[],
    lastTailPosition: number[]
  ) {
    const [headX, headY] = newHeadPosition;
    const [tailX, tailY] = lastTailPosition;
    if (headX > tailX && headY > tailY) {
      return [tailX + 1, tailY + 1];
    } else if (headX < tailX && headY < tailY) {
      return [tailX - 1, tailY - 1];
    } else if (headX < tailX && headY > tailY) {
      return [tailX - 1, tailY + 1];
    } else {
      return [tailX + 1, tailY - 1];
    }
  }

  solveForPartOne(input: string): string {
    const motions = input.split("\n");
    const initialPosition = [0, 0];
    let lastHeadPosition = initialPosition;
    let lastTailPosition = initialPosition;
    const tailPositions: number[][] = [initialPosition];
    motions.forEach((motion) => {
      const [direction, steps] = motion.split(" ");

      Array.from({ length: Number(steps) }, (_, i) => i).forEach((_) => {
        const newHeadPosition = this.getNewStraightPosition(
          direction,
          lastHeadPosition
        );
        let newTailPosition = lastTailPosition;
        const distance = this.getDistance(newHeadPosition, lastTailPosition);
        const atReach = this.areAtReach(newHeadPosition, lastTailPosition);
        if (atReach && distance > 1) {
          newTailPosition = this.getNewStraightPosition(
            direction,
            lastTailPosition
          );
        } else if (!atReach && distance > 2) {
          newTailPosition = this.getNewDiagonalPosition(
            newHeadPosition,
            lastTailPosition
          );
        }
        lastHeadPosition = newHeadPosition;
        lastTailPosition = newTailPosition;
        tailPositions.push(newTailPosition);
      });
    });
    return [
      ...new Set(tailPositions.map((p) => JSON.stringify(p))),
    ].length.toString();
  }

  solveForPartTwo(input: string): string {
    const motions = input.split("\n");
    const initialPosition = [0, 0];
    const tailNumber = 10;
    let lastHeadPosition = initialPosition;
    const tailPositions = Array.from({ length: tailNumber }, () => [
      initialPosition,
    ]);
    motions.forEach((motion) => {
      const [direction, steps] = motion.split(" ");

      Array.from({ length: Number(steps) }, (_, i) => i).forEach((_) => {
        const newHeadPosition = this.getNewStraightPosition(
          direction,
          lastHeadPosition
        );
        for (let i = 0; i < tailNumber; i++) {
          const targetPosition =
            i === 0
              ? newHeadPosition
              : tailPositions[i - 1][tailPositions[i - 1].length - 1];
          let lastTailPosition = tailPositions[i][tailPositions[i].length - 1];
          let newTailPosition = lastTailPosition;
          const distance = this.getDistance(targetPosition, lastTailPosition);
          const atReach = this.areAtReach(targetPosition, lastTailPosition);
          if (atReach && distance > 1) {
            newTailPosition = this.getNewStraightPosition(
              direction,
              lastTailPosition
            );
          } else if (!atReach && distance > 2) {
            newTailPosition = this.getNewDiagonalPosition(
              targetPosition,
              lastTailPosition
            );
          }
          lastTailPosition = newTailPosition;
          tailPositions[i].push(newTailPosition);
        }
        lastHeadPosition = newHeadPosition;
      });
    });
    return [
      ...new Set(
        tailPositions[tailPositions.length - 1].map((p) => JSON.stringify(p))
      ),
    ].length.toString();
  }
}

export default new Day9();

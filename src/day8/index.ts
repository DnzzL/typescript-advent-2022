import { Day } from "../day";

class Day8 extends Day {
  constructor() {
    super(8);
  }

  solveForPartOne(input: string): string {
    const grid = input.split("\n").map((row) => [...row]);
    const flattenedGrid = grid.flat().map(Number);
    const rowNumber = grid.length;
    const columnNumber = flattenedGrid.length / rowNumber;
    let visibleCount = 0;
    flattenedGrid.forEach((tree, treeIndex) => {
      let isVisible = false;

      const leftTrees = flattenedGrid.slice(
        treeIndex - (treeIndex % columnNumber),
        treeIndex
      );
      const rightTrees = flattenedGrid.slice(
        treeIndex + 1,
        treeIndex + columnNumber - (treeIndex % columnNumber)
      );
      const topTrees = flattenedGrid.filter(
        (t, i) => i < treeIndex && i % columnNumber === treeIndex % columnNumber
      );
      const bottomTrees = flattenedGrid.filter(
        (t, i) => i > treeIndex && i % columnNumber === treeIndex % columnNumber
      );

      // compare to left trees
      if (leftTrees.filter((t) => t >= tree).length === 0) {
        isVisible = true;
      }
      // compare to right trees
      else if (rightTrees.filter((t) => t >= tree).length === 0) {
        isVisible = true;
      }
      // compare to upper trees
      else if (topTrees.filter((t) => t >= tree).length === 0) {
        isVisible = true;
      }
      // compare to bottom trees
      else if (bottomTrees.filter((t) => t >= tree).length === 0) {
        isVisible = true;
      }
      if (isVisible) {
        visibleCount += 1;
      }
    });
    return visibleCount.toString();
  }

  solveForPartTwo(input: string): string {
    const grid = input.split("\n").map((row) => [...row]);
    const flattenedGrid = grid.flat().map(Number);
    const rowNumber = grid.length;
    const columnNumber = flattenedGrid.length / rowNumber;
    let maxScenicScore = 0;
    flattenedGrid.forEach((tree, treeIndex) => {
      const leftTrees = flattenedGrid.slice(
        treeIndex - (treeIndex % columnNumber),
        treeIndex
      );
      const rightTrees = flattenedGrid.slice(
        treeIndex + 1,
        treeIndex + columnNumber - (treeIndex % columnNumber)
      );
      const topTrees = flattenedGrid.filter(
        (t, i) => i < treeIndex && i % columnNumber === treeIndex % columnNumber
      );
      const bottomTrees = flattenedGrid.filter(
        (t, i) => i > treeIndex && i % columnNumber === treeIndex % columnNumber
      );
      const exceedingLeftTreeIndex = leftTrees
        .reverse()
        .findIndex((t) => t >= tree);
      const leftScore =
        exceedingLeftTreeIndex === -1
          ? leftTrees.length
          : exceedingLeftTreeIndex + 1;
      const exceedingRightTreeIndex = rightTrees.findIndex((t) => t >= tree);
      const rightScore =
        exceedingRightTreeIndex === -1
          ? rightTrees.length
          : exceedingRightTreeIndex + 1;
      const exceedingTopTreeIndex = topTrees
        .reverse()
        .findIndex((t) => t >= tree);
      const topScore =
        exceedingTopTreeIndex === -1
          ? topTrees.length
          : exceedingTopTreeIndex + 1;
      const exceedingBottomTreeIndex = bottomTrees.findIndex((t) => t >= tree);
      const bottomScore =
        exceedingBottomTreeIndex === -1
          ? bottomTrees.length
          : exceedingBottomTreeIndex + 1;
      const scenicScore = leftScore * rightScore * topScore * bottomScore;

      if (scenicScore > maxScenicScore) {
        maxScenicScore = scenicScore;
      }
    });
    return maxScenicScore.toString();
  }
}

export default new Day8();

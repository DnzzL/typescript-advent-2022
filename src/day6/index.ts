import { Day } from "../day";

class Day6 extends Day {
  constructor() {
    super(6);
  }

  findMarker(signal: string, numberCharacters: number) {
    let characters: string[] = [];
    let markerPosition = 0;
    let index = 0;
    for (const c of signal) {
      if (new Set(characters).size === numberCharacters) {
        markerPosition = index;
        break;
      }
      characters =
        characters.length > numberCharacters - 1
          ? [...characters.slice(1), c]
          : [...characters, c];
      index++;
    }
    return markerPosition.toString();
  }

  solveForPartOne(input: string): string {
    return this.findMarker(input, 4);
  }

  solveForPartTwo(input: string): string {
    return this.findMarker(input, 14);
  }
}

export default new Day6();

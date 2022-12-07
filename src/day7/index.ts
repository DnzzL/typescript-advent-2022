import { Day } from "../day";

type File = { size: number; name: string };
type Folder = {
  name: string;
  parent: Folder;
  children: Folder[];
  files: File[];
};

class Day7 extends Day {
  constructor() {
    super(7);
  }

  tree: Folder = {
    name: "/",
    children: [],
    files: [],
    parent: null as any,
  };

  parseCommand = (line: string[], currentDir: Folder, tree: Folder) => {
    if (line[0] === "cd") {
      const arg = line[1];
      if (arg === "/") currentDir = tree;
      else if (arg === "..") currentDir = currentDir.parent;
      else if (arg.match(/[a-z]/))
        currentDir = currentDir.children.find((x) => x.name === arg)!;
    }

    return currentDir;
  };

  parseDir = (line: string[], currentDir: Folder) =>
    currentDir.children.push({
      name: line[0],
      children: [],
      files: [],
      parent: currentDir,
    });

  parseFile = (line: string[], showingDir: Folder) =>
    showingDir.files.push({ size: Number(line[0]), name: line[1] });

  generateTree = (input: string) => {
    const [...fileInput] = input.split("\n");
    let currentDir = this.tree;

    for (const parseCommand of fileInput) {
      const line = parseCommand.split(" ");

      if (line[0] === "$") {
        currentDir = this.parseCommand(line.slice(1), currentDir, this.tree);
      } else if (line[0] === "dir") {
        this.parseDir(line.slice(1), currentDir);
      } else if (line[0].match(/[0-9]/)) {
        this.parseFile(line, currentDir);
      }
    }
  };

  getFolderSizes = (folder: Folder): { name: string; size: number }[] => {
    const size = folder.files.reduce((acc, x) => (acc += x.size), 0);
    const childDirectories = folder.children.map((x) => this.getFolderSizes(x));
    const childDirectoriesSize = childDirectories
      .map((x) => x[0])
      .reduce((acc, x) => (acc += x.size), 0);

    return [
      { name: folder.name, size: size + childDirectoriesSize },
      ...childDirectories.flat(),
    ];
  };

  solveForPartOne(input: string): string {
    this.generateTree(input);
    const folders = this.getFolderSizes(this.tree);
    return folders
      .filter((x) => x.size <= 100000)
      .reduce((acc, x) => acc + x.size, 0)
      .toString();
  }

  solveForPartTwo(input: string): string {
    const rootFolderSize = 40000000;
    const folders = this.getFolderSizes(this.tree);
    const sizeToDelete =
      folders.find((x) => x.name === "/")!.size - rootFolderSize;
    return folders
      .filter((x) => x.size - sizeToDelete > 0)
      .sort((a, b) =>
        sizeToDelete - a.size < sizeToDelete - b.size ? 1 : -1
      )[0]
      .size.toString();
  }
}

export default new Day7();

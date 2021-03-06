import readFilesNames from './read-files-names';

class Cache {
  cache: string[];

  constructor() {
    this.cache = readFilesNames();
  }

  set(name: string): void {
    this.cache.push(name);
  }

  get(name: string): string | undefined {
    return this.cache.find((element) => element === name);
  }

  isExist(name: string): boolean {
    const element = this.get(name);

    return !!element;
  }
}

export default new Cache();

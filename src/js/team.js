export default class Team {
  constructor() {
    this.members = new Set();
  }
  add(newCharacter) {
    if (!this.members.has(newCharacter)) {
      this.members.add(newCharacter);
    } else {
      throw new Error("Персонаж уже существует");
    }
  }

  addAll(...newCharacters) {
    newCharacters.forEach((item) => {
      this.members.add(item);
    });
  }

  toArray() {
    return Array.from(this.members);
  }
}

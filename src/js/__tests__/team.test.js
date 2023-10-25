import Team from "../team.js";

describe("Team", () => {
  let team;

  beforeEach(() => {
    team = new Team();
  });

  test("должен добавлять уникальных персонажей", () => {
    const mario = { name: "Mario" };
    const luigi = { name: "Luigi" };

    team.add(mario);
    team.add(luigi);

    expect(team.members.size).toBe(2);
  });

  test("не должен добавлять дубликаты", () => {
    const mario = { name: "Mario" };

    team.add(mario);

    expect(() => {
      team.add(mario);
    }).toThrowError("Персонаж уже существует");
  });

  test("должен добавлять множество персонажей", () => {
    const mario = { name: "Mario" };
    const luigi = { name: "Luigi" };
    const peach = { name: "Peach" };

    team.addAll(mario, luigi, peach, mario);

    expect(team.members.size).toBe(3);
  });

  test("должен преобразовывать Set в массив", () => {
    const mario = { name: "Mario" };
    const luigi = { name: "Luigi" };

    team.addAll(mario, luigi);

    expect(team.toArray()).toEqual([mario, luigi]);
  });
});

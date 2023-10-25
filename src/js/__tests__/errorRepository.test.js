import ErrorRepository from "../errorRepository.js";

describe("ErrorRepository", () => {
  let repo;

  beforeEach(() => {
    repo = new ErrorRepository();
  });

  test("должен возвращать сообщение об ошибке по коду", () => {
    expect(repo.translate(400)).toBe("Неверный запрос");
    expect(repo.translate(403)).toBe("Доступ запрещен");
    expect(repo.translate(404)).toBe("Не найдено");
  });

  test("должен возвращать неизвестная ошибка для незарегистрированного кода", () => {
    expect(repo.translate(500)).toBe("Неизвестная ошибка");
  });
});

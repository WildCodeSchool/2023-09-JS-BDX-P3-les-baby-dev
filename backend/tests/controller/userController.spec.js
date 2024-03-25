const request = require("supertest");
const { faker } = require("@faker-js/faker");
const server = require("../../index");
const { database } = require("../setup");

describe("POST /users", () => {
  it("should create a user", async () => {
    const newUser = {
      email: faker.internet.email(),
      password: "1234",
      is_admin: false,
    };

    const response = await request(server).post("/api/users").send(newUser);

    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("parentId");
    expect(response.body).toHaveProperty("isAdmin");

    expect(typeof response.body.id).toBe("number");
    expect(typeof response.body.parentId).toBe("number");
    expect(typeof response.body.isAdmin).toBe("boolean");

    const [result] = await database.query(
      "SELECT * FROM parent WHERE id=?",
      response.body.parentId
    );

    const [parentInDatabase] = result;

    expect(parentInDatabase.user_id).toBe(response.body.id);
  });

  it("should return an error if email is not valid", async () => {
    const newUser = {
      email: "bad-email",
      password: "1234",
      isAdmin: false,
    };

    const response = await request(server).post("/api/users").send(newUser);
    expect(response.status).toBe(400);
  });
});

describe("GET /users/myprofil", () => {
  it("should return an error when not authenticated", async () => {
    const response = await request(server).get("/api/users/myprofil");
    expect(response.status).toBe(401);
  });
});

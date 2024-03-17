const request = require("supertest");
const { faker } = require("@faker-js/faker");
const server = require("../../index");

describe("POST /users", () => {
  it("should create a user", async () => {
    const newUser = {
      email: faker.internet.email(),
      password: "1234",
      isAdmin: false,
    };

    const response = await request(server).post("/api/users").send(newUser);
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("parentId");
    expect(response.body.parentId).toBeDefined();
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

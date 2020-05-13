import request from "supertest";
import WebServer from "../lib/WebServer";

let app: import("http").Server;

const createApp = (done: jest.DoneCallback) => {
    const server = new WebServer({
        port: 3000,
        corsOptions: {},
    });
    return server.app.listen(done);
};

beforeAll(async (done) => {
    app = createApp(done);
});

afterAll(async (done) => {
    app.close(done);
    jest.resetModules();
});

describe("Server default route", () => {
    it("should GET 'Hello ME!'", async () => {
        const res = await request(app).get("/");
        expect(res.text).toEqual("Hello ME!");
    });
});

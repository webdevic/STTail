import request from "supertest";
import WebServer from "../lib/WebServer";

let expressServer: import("http").Server;

const createApp = (done: jest.DoneCallback) => {
    const server = new WebServer({
        port: 3000,
        corsOptions: {},
        version: "/api/v1/",
    });
    server.app.get("/", (req, res) => res.send("Hello ME!"));
    return server.app.listen(done);
};

beforeAll(async (done) => {
    expressServer = createApp(done);
});

afterAll(async (done) => {
    expressServer.close(done);
    jest.resetModules();
});

describe("Server default route", () => {
    it("should GET 'Hello ME!'", async () => {
        const res = await request(expressServer).get("/");
        expect(res.text).toEqual("Hello ME!");
    });
});

const Koa = require("Koa");
const next = require("next");

console.log("process.env.NODE_ENV : ", process.env.NODE_ENV);
const dev = process.env.NODE_ENV !== "production";
const app = next({
    dev
});
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = new Koa();
    server.use(async (ctx, next) => {
        await handle(ctx.req, ctx.res);
        ctx.respond = false;
    });
    server.listen(3000, () => {
        console.log('server start on port 3000 !')
    })
});
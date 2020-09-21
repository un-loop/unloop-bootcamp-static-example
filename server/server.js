const path = require('path');
const koa = require('koa');
const staticRouter = require('unloop-static-router')( path.resolve(__dirname, "../client"),
[
    {
        route: '/',
        permissions: []
    },
]);

const koaApp = new koa();

koaApp.use(staticRouter(koaApp));

koaApp.listen(3000);

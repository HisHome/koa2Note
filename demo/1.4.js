const Koa = require('koa') // koa v2
const app = new Koa()

// 简单的打印日志中间件
async function loggerAsync( ctx, next ) {
    console.log( ctx.method, ctx.header.host + ctx.url )
    await next()
}
app.use(loggerAsync)

app.use(( ctx ) => {
    ctx.body = 'hello world!'
})

app.listen(3000)
console.log('the server is starting at port 3000')
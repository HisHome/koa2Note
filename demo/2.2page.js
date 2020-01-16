const Router = require('koa-router')
let page = new Router()
page.get('/', async ( ctx, nex )=>{
    ctx.body = '/'
})
page.get('/404', async ( ctx, nex )=>{
    ctx.body = '404 page!'
})
page.get('/helloworld', async ( ctx, nex )=>{
    ctx.body = 'helloworld page 2!'
})

module.exports = page;

const Router = require('koa-router')
let home = new Router()
home.get('/', async ( ctx, next )=>{
    ctx.body = '/'
})
home.get('home', async ( ctx, next )=>{
    ctx.body = 'home'
})
home.get('home/1', async ( ctx, next )=>{
    ctx.body = 'home/1'
})
module.exports = home;

import { Router } from './router.js'
import * as events from './events.js'


const router = new Router()
router.add("/", "/pages/home.html")
router.add("/universe", "/pages/universe.html")
router.add("/explorer", "/pages/explorer.html")
router.add(404, "/pages/404.html")



router.handle()

//events.registerControls()

window.onpopstate = () => router.handle()
window.route = () => router.route()



import {init} from '../stui@0.31.8/mod.js'
import {createViewer} from './mod.js'
init()
const style = document.createElement('style')
document.head.append(style)
style.textContent = `@import ${JSON.stringify(new URL('./main.css', import.meta.url).href)};`;
(async () => {
    const viewer = window.viewer = await createViewer()
    document.head.append(viewer.style)
    document.body.append(viewer.element)
    await viewer.autoLoad()
})()
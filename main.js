const {readdirSync, readFileSync, renameSync} = require('fs')
for (const name of readdirSync('dist')) {
    const {version} = JSON.parse(readFileSync(`dist/${name}/package.json`))
    renameSync(`dist/${name}`, `dist/${name.split('@', 1)[0]}@${version}`)
}
export const item = async (unit, compiler) => {
    if (unit.children.length === 0) {
        return document.createElement('div')
    }
    const first = unit.children[0]
    if (first.length === 0) {
        const element = document.createElement('ul')
        const li = document.createElement('li')
        element.append(li)
        li.append(await compiler.compileSTDN(unit.children.slice(1)))
        return element
    }
    const element = document.createElement('div')
    const mark = document.createElement('div')
    const content = document.createElement('div')
    element.append(mark)
    element.append(content)
    mark.append(await compiler.compileLine(first))
    content.append(await compiler.compileSTDN(unit.children.slice(1)))
    return element
}
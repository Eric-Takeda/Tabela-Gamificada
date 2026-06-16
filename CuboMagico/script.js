let box = document.querySelector('.box')

const color = ['#2db911', '#df980b', '#04a4f4', '#04f4a8', '#1932f3', '#bd0049'];

const directions = ['front', 'back', 'left', 'right', 'top', 'bottom']

for (var i of directions) {
    let direction = document.createElement('div')
    box.appendChild(direction)
    direction.classList.add(i)

    direction.setAttribute('style', `--clr:${color[directions.indexOf(i)]}`)

    for (let j = 0; j < 9; j++) {
        let span = document.createElement('span')
        direction.appendChild(span)

        let name = "         "

        if (i === 'bottom') {
            let nameCharacters = name.split('')
            span.innerHTML = nameCharacters[j]
            span.classList.add("nameLetters")
        }
    }
    direction.querySelector('span').setAttribute('style', `--clr:${color[directions.indexOf(i)]}`)
}


var isKeyDown = false;

rotateCube(-305, 100)

document.documentElement.addEventListener('mousedown', function (e) {
    isKeyDown = true;
    rotateCube(e.clientX, e.clientY)
})


document.documentElement.addEventListener('mouseup', function (e) {
    isKeyDown = false;
    rotateCube(-305, 100)
})


document.documentElement.addEventListener('mousemove', function (e) {
    isKeyDown && rotateCube(e.clientX, e.clientY)
})


function rotateCube(x, y) {
    console.log(x, y)
    let Xvalue = Math.floor((x / 2) + 100)
    let Yvalue = Math.floor((y / 2) + 100)
    box.style.transform = `rotateX(${Yvalue}deg) rotateY(${Xvalue}deg)`
}
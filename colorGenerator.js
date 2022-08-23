let numEl = document.getElementById("numel")

function generateColor(){
    // let hexNum = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'e', 'f']
    let hexNum = '0123456789abcdefghijklmnopqrstuvwxyz'
    let color = '#'

    for(let i = 0; i < 6; i++){
        let num = Math.round(Math.random()*19)
        let num2 = hexNum[num]
        color += num2
    }
    document.getElementById("container").style.backgroundColor = color
    numEl.style.color = color
    numEl.innerText = color
}

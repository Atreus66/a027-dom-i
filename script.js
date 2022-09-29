const frutas = ["laranja", "limão", "uva"];

console.log(frutas[0])

const fruta1 = document.getElementById("fruta-1")
// console.log(fruta1);
fruta1.innerHTML = frutas[0]

const frutas2 = document.getElementById("fruta-2")
frutas2.innerHTML = frutas[1]

const frutas3 = document.getElementById("fruta-3")
frutas3.innerHTML = frutas[2]

const inp = document.getElementById("name")
console.log(inp.value);

function clique(){
    const fruta4 = document.getElementById("fruta-4")
    fruta4.innerHTML = ""
    console.log(inp.value)
}

// const clique2 = () => {
//     const fruta4 = document.getElementById("fruta-4")
//     console.log(fruta4.value);
//     input.value = ""
// }
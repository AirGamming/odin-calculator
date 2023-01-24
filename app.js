let equals = 0
let equasion = ""
const ButtonsWithOrder = [
    1,2,3,"+",
    4,5,6,"-",
    7,8,9,"*",
    "=",0,"/"
];
const symbols = ["-", "/", "*", "+"]
const container = document.querySelector("#container"); 

ButtonsWithOrder.forEach(el => {
    let div = document.createElement("div");
    div.setAttribute("data-number", el);
    div.classList.add("button", "ui");
    div.innerHTML = `<p>${el}</p>`;
    container.appendChild(div);
});

let calculate = ()=> {
    let equals = 0
    let equasion = ""
    let p = document.querySelector('.calculations > p')
    let numbers = p.innerHTML.split(/[-+*/]/)
    let Symbols = p.innerHTML.split(/[0-9]/)
    Symbols = Symbols.filter(el => el != "")
    let equalsDiv = document.querySelector('.calculations > h1')
    numbers.forEach((el, i) => {
        if(i == 0) equals = Number(el)
        else if (Symbols[i-1] == "+") equals = equals + Number(el)
        else if (Symbols[i-1] == "-") equals = equals - Number(el)
        else if (Symbols[i-1] == "*") equals = equals * Number(el)
        else if (Symbols[i-1] == "/") equals = equals / Number(el)
    })
    equalsDiv.innerHTML = equals
    console.log("numbers: " + numbers)
    console.log("equals: " + equals)
}
let lastCharacter = (str) =>{
    return str.charAt(str.length - 1)
}
console.log(equasion)
let buttons = container.querySelectorAll(".button");
buttons.forEach(el => {
    el.addEventListener("click",() =>{
        let atribute = el.getAttribute("data-number")
        if(atribute == "=") calculate()
        else if(symbols.includes(atribute) && symbols.includes(lastCharacter(equasion)) ) {
            console.log(typeof(lastCharacter(equasion)) + " " + typeof symbols[1])
            console.log(atribute)
        }
        else equasion = equasion+atribute
        p= document.querySelector('.calculations > p')
        p.innerHTML = equasion
    })
});

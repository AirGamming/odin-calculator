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
    let equalsContainer = document.querySelector(".calculations > h1");
    equasion.split
}
let lastCharacter = (str) =>{
    return str.charAt(str.length - 1)
}
console.log(equasion)
let buttons = container.querySelectorAll(".button");
buttons.forEach(el => {
    el.addEventListener("click",() =>{
        let atribute = el.getAttribute("data-number")
        if(atribute == "=") {calculate();}
        // FIXME:
        else if(lastCharacter(equasion) in symbols && atribute in symbols) {console.log(atribute)}
        else equasion = equasion+atribute
        p= document.querySelector('.calculations > p')
        p.innerHTML = equasion
    })
});

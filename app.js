let equals = 0
let equasion = ""
const ButtonsWithOrder = [
    1,2,3,"+",
    4,5,6,"-",
    7,8,9,"*",
    "=",0,"/"
];
const container = document.querySelector("#container"); 

ButtonsWithOrder.forEach(el => {
    let div = document.createElement("div");
    div.setAttribute("data-number", el);
    div.classList.add("button", "ui");
    div.innerHTML = `<p>${el}</p>`;
    container.appendChild(div);
});

let calculate = ()=> {

}

let buttons = container.querySelectorAll(".button");
buttons.forEach(el => {
    el.addEventListener("click",() =>{
        let atribute = el.getAttribute("data-number")
        if(atribute == "=") calculate()
        else equasion = equasion+atribute
        console.log(equasion)
        p= document.querySelector('.calculations > p')
        p.innerHTML = equasion
    })
});
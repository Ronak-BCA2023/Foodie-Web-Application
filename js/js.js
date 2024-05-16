

let div = document.createElement("div")
let body = document.getElementsByTagName("body")[0];

let insidediv1 =  document.createElement("div")
let insidediv2 =  document.createElement("div")


body.insertAdjacentElement("afterbegin", div)
div.insertAdjacentElement("afterbegin", insidediv1)
div.insertAdjacentElement("beforeend", insidediv2)


let h1 = document.createElement("h1")
let h11 = document.createElement("h1")

insidediv1.insertAdjacentElement("afterbegin", h1)
insidediv2.insertAdjacentElement("afterbegin", h11)


insidediv1.style.width = "150px"
insidediv1.style.height = "50px"
insidediv1.style.background = "green"
insidediv1.style.border = "2px solid red"
insidediv1.style.borderRadius = ".4rem"
insidediv1.style.display = "flex"
insidediv1.style.justifyContent = "center"
insidediv1.style.alignItems = "center"


insidediv2.style.width = "150px"
insidediv2.style.height = "50px"
insidediv2.style.background = "green"
insidediv2.style.border = "2px solid red"
insidediv2.style.borderRadius = ".4rem"
insidediv2.style.display = "flex"
insidediv2.style.justifyContent = "center"
insidediv2.style.alignItems = "center"


h1.innerText = "Ronak";
h11.innerText = "Prajapati"








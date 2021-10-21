import { getMetals, setMetal } from "./database.js"
import { getOrders } from "./database.js"

const orders = getOrders()
const metals = getMetals()

const foundMetal = metals.find(
    (metal) => {
        return metal.id === orders.metalId
    }
)
export const totalCost = foundMetal.price

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "metal") {
            setMetal(parseInt(event.target.value))
        }
    }
)

export const Metals = () => {
    let html = "<ul>"
    
    // This is how you have been converting objects to <li> elements
    for (const metal of metals) {
        html += `<li>
        <input type="radio" name="metal" value="${metal.id}" /> ${metal.metal}
        </li>`
    }
    
    html += "</ul>"
    return html
}


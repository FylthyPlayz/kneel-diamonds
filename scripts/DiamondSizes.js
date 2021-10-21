import { getSizes, setSize } from "./database.js"
import { getOrders } from "./database.js"
const sizes = getSizes()
const orders = getOrders()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "size") {
            setSize(parseInt(event.target.value))
        }
    }
)

export const DiamondSizes = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = sizes.map(size => {
        return `<li>
            <input type="radio" name="size" value="${size.id}" /> ${size.carets}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}
const foundSize = sizes.find(
    (size) => {
        return size.id === orders.sizeId
    }
)
export const totalCost = foundSize.price

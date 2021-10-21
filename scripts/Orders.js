import { getOrders, setOrder } from "./database.js"
import { totalCost } from "./JewelryStyles.js" ; "./DiamondSizes.js" ;"./Metals.js"
const costString = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
})

const buildOrderListItem = (order) => {
    return `<li>
        Order #${order.id} was placed on ${order.timestamp} and costs ${costString}
    </li>`
}

export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}


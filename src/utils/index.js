/* 
This function calculate total proce of a new order
@param {Array} products cartProduct: Array of objets
@returns {number} Total price
*/

export const totalPrice = (products) => {
   
    let sum = 0 
    products.forEach(products => sum += products.price) 
    return sum
}

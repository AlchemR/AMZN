export const fetchCarts = () => {
  return $.ajax({
    method: "GET",
    url: '/api/carts'
  })
}


export const fetchCart = cartId => {
  return $.ajax({
    method: "GET",
    url: `/api/carts/${cartId}`
  })
}

export const createCart = cart => {
  return $.ajax({
    method: "POST",
    url: '/api/carts',
    data: { cart }
  })
}

// I don't think I need update or delete cart.  
// Might need a "active" boolean col on table for show page

// export const updateCart = cart => {
//   return $.ajax({
//     method: "PATCH",
//     url: `/api/carts/${cart.id}`,
//     data: { cart }
//   })
// }

// export const deleteCart = cartId => {
//   return $.ajax({
//     method: "DELETE",
//     url: `/api/carts/${cartId}`
//   })
// }
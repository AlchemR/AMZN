export const fetchProducts = data =>{
  return $.ajax({
    method: "GET",
    url: '/api/products',
    data: data
  })
}


// export const fetchProduct = id => {
//   return $.ajax({
//     method: "GET",
//     url: '/api/products',
//     data: data
//   })
// }


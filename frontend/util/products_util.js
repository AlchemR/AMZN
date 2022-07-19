export const fetchProducts = data =>{
  return $.ajax({
    method: "GET",
    url: '/api/products',
    data: data
  })
}




export const fetchProduct = prodId => {
  return $.ajax({
    method: "GET",
    url: `/api/products/${prodId}`
  })
}


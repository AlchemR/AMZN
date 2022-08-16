export const fetchProducts = data =>{
  console.log("product utils fetch products data",data)
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


import React from 'react'
import { requestProducts } from '../../actions/product_actions'
import { connect } from 'react-redux'
import ProductSingleCard from './product_single_card'

class ProductIndex extends React.Component{
constructor(props){
  super(props)
  console.log("product constructor props",props)
}

componentDidMount(){
  this.props.requestProducts()
  console.log("componentmount props",this.props)
}

render(){
  const {products} = this.props
  console.log("products",products)
return(
  <div className='product-index main'>
    {console.log("div products", products)}
    { products.map(product => console.log("productmap", product) )  }
    {/* { products.forEach(prod =>  <ProductSingleCard prod={prod}/> ) } */}

    <ProductSingleCard  />
  </div>
)
}

}



const mapStateToProps = state => ({
products: Object.values(state.entities.products)
});

const mapDispatchToProps = dispatch => ({
requestProducts: () => dispatch(requestProducts())
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductIndex)

// export default ProductIndex
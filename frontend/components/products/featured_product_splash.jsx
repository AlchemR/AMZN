import React from 'react'
import { requestProducts } from '../../actions/product_actions'
import { connect } from 'react-redux'
import ProductSingleCard from './product_single_card'
import { Link } from 'react-router-dom'
import { createLedger } from "../../actions/cart_ledger_actions"
import { requestCart } from '../../actions/cart_actions'

class FeaturedProduct extends React.Component {
  constructor(props) {
    super(props)
    // console.log("product constructor props",props)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    this.props.requestProducts()
    // console.log("componentmount props",this.props)
  }

  handleClick = (itemID, cartID) => e => {
    e.preventDefault()
    // console.log("handleclick action")
    this.props.createLedger({ product_id: itemID, quantity: 1, cart_id: cartID })
    // console.log("after createledger", cartID)
    this.props.requestCart(cartID)
    // console.log("after requestcart")
  }

  render() {
    const { products, cartId } = this.props
    // console.log("products",this.props)
    return (
      <div className='featured-product-container'>
        {products.map(prod =>
          <div className="featured-outer">
            <Link to={`/products/${prod.id}`}>
              <ProductSingleCard key={prod.id} prod={prod} />
            </Link>
            <button className='addcart' onClick={this.handleClick(prod.id, cartId)} >Add to Cart</button>
            {/* handleclick is not defined */}
          </div>
        )}

      </div>
    )
  }

}



const mapStateToProps = state => ({
  // console1: console.log("MSTP Productindex",state),
  products: Object.values(state.entities.products),
  cartId: state.session.cart
});

const mapDispatchToProps = dispatch => ({
  requestProducts: () => dispatch(requestProducts()),
  createLedger: (ledger) => dispatch(createLedger(ledger)),
  requestCart: (cartId) => dispatch(requestCart(cartId))
})

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedProduct)

// export default ProductIndex
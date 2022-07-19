import React from "react"
import { connect } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { requestCarts, requestCart } from "../../actions/cart_actions"
import { deleteLedger, requestLedger, updateLedger } from '../../actions/cart_ledger_actions'
import CartLedgerDetails from "./cart_show"
import EmptyCart from "./empty_cart";

class CartIndex extends React.Component {
  constructor(props) {
    super(props)
    this.handleQuantity = this.handleQuantity.bind(this)
  }

  componentDidMount() {
    this.props.requestCart(this.props.cartId)
    console.log("requestcarts", this.props)
  }

  handleQuantity = (e, cartitem) => {
    e.preventDefault()
    return ( this.props.updateLedger({ product_id: cartitem.product_id, quantity: e.target.value, cart_id: cartitem.cart_id, id: cartitem.id }).then(setTimeout(() => this.props.requestCart(this.props.cartId), 1) ) )
  }

  render() {
    const { cart } = this.props
    let price_total = 0;

    if (!cart) { console.log("isnull"); return <EmptyCart /> } else {
      return (

        <div key={`${cart.count}-x`} className="cart-index-main">
          <div className="checkout-title"><h1>Shopping Cart</h1> </div>
          <div className="checkout-subheader" ><span>deselect items</span> <span>price</span></div>
          <hr />
 
          {cart.slice(0, cart.length - 1).map(cartitem => 
          <div>
            {console.log("line 37", typeof cartitem.id)}


              {/* <CartLedgerDetails key={`${cartitem.id}x${cartitem.id}`} cartitem={cartitem} itemqty={cartitem.quantity} /> */}
            {price_total += (cartitem.quantity * cartitem.price) }
              <div key={`${cartitem}-#`} className="ledger-items-container">
                <div key={`${cartitem}-###`} className="ledger-checkbox"><input type="checkbox"/></div>
                <div key={`${cartitem.id}-##`} className="ledger-item-image" > placeholder for product image </div>

                <div key={`${cartitem.id}-1`} className="ledger-descriptions">
                  <div key={`${cartitem.id}-2`} className="ledger-item-title" >{cartitem.title}</div>
                  <div key={`${cartitem.id}-3`}>product_id: {cartitem.product_id} / best seller </div>
                  <div key={`${cartitem.id}-3#`}>instock </div>
                  <div key={`${cartitem.id}-3##`}> shipping / returns </div>                  
                  <div key={`${cartitem.id}-4`} ><select key={`${cartitem.id}-5`} value={cartitem.quantity} onChange={(e) => this.handleQuantity(e, cartitem)} className="dropdown" >
                    <option value={1}>Qty: 1</option>
                    <option value={2}>Qty: 2</option>
                    <option value={3}>Qty: 3</option>
                    <option value={4}>Qty: 4</option>
                    <option value={5}>Qty: 5</option>
                    <option value={6}>Qty: 6</option>
                    <option value={7}>Qty: 7</option>
                    <option value={8}>Qty: 8</option>
                    <option value={9}>Qty: 9</option>
                  </select>  |  <button key={`${cartitem.id}-6`} onClick={() => this.props.deleteLedger(cartitem.id).then(setTimeout(() => this.props.requestCart(this.props.cartId), 1)) }> delete this</button> | save for later | compare with similar items</div>
                </div>
                <div key={`${cartitem.id}-7`} className="ledger-item-price" > <div className="text-price"> price: {cartitem.price} </div>  <div>  Apply cupon dropdown <select name="cupon" id="">
                  <option value={1}>10% off</option>
                  <option value={2}>15% off</option>
                </select>
                 </div> </div>
              </div>
              <hr />
              
          </div>
          )}

          <div className="price-total" >price total : {price_total} </div>

          <div className="footer-margin"></div>

        </div>
      )
    }
  }

}

const mapStateToProps = (state, ownProps) => ({
  cartId: state.session.cart,
  console1: console.log("state", state),
  console2: console.log("ownProps", ownProps),
  console3: console.log("state entities cart", state.entities.cart),
  cart: state.entities.cart ? Object.values(state.entities.cart) : null,
  // cart: state.entities.cart,
});

const mapDispatchToProps = dispatch => ({
  requestLedger: (ledgerId) => dispatch(requestLedger(ledgerId)),
  updateLedger: (ledger) => dispatch(updateLedger(ledger)),
  deleteLedger: (ledgerId) => dispatch(deleteLedger(ledgerId)),
  requestCart: (cartId) => dispatch(requestCart(cartId)),
})


export default connect(mapStateToProps, mapDispatchToProps)(CartIndex)
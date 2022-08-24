import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import {deleteLedger, requestLedger, updateLedger} from '../../actions/cart_ledger_actions'
import {requestCart} from '../../actions/cart_actions'

class CartLedgerDetails extends React.Component {
  constructor(props) {
    super(props)
    // console.log("cartledgerdetails constructor",this.props)
    if (this.props.cartitem) {this.state = this.props.cartitem} else {this.state = null}
  }

  // componentDidMount() {
  //   this.props.requestLedger()
  // }

  handleQuantity = (e) => {
    e.preventDefault() 
    return ( this.setState({ quantity: parseInt(e.target.value) }) ,this.props.updateLedgers(this.state), this.props.requestCart(this.state.cart_id) )
  }

  render() {
    const { cartitem } = this.props

    if (!cartitem) { return null } else {
      return (

        <div className="ledger-items">
            {/* {console.log("render, cartitem",cartitem)} */}
            {/* {console.log("render, state", this.state)} */}
        
        
        <div key={`${cartitem.id}-1`} className="ledger-map">
            <div>Product Title: {cartitem.title}</div>
            <div>product_id: {cartitem.product_id}</div>
            <div>quantity: {cartitem.quantity}</div>

            <select onChange={(e) => this.handleQuantity(e)} className="dropdown" >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
              <option value={9}>9</option>
              </select>


          <button onClick={()=> this.props.deleteLedger(cartitem.id)}> delete this</button>
          </div>


        </div>
      )
    }
  }

}

const mapStateToProps = (state, ownProps) => ({
  // console: console.log("state", state),
  // console1: console.log("ownprops", ownProps),
  cartitem1: Object.values(ownProps.cartitem),
  cartitem: ownProps.cartitem
});

const mapDispatchToProps = dispatch => ({
  requestLedger:(ledgerId) => dispatch(requestLedger(ledgerId)),
  updateLedgers: (ledger) => dispatch(updateLedger(ledger)),
  deleteLedger: (ledgerId) => dispatch(deleteLedger(ledgerId)),
  requestCart: (cartId) => dispatch(requestCart(cartId))
})


export default connect(mapStateToProps, mapDispatchToProps)(CartLedgerDetails)
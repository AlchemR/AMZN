class Api::CartsController < ApplicationController

  def index
    # may be order history
    @carts = Cart.all
    render :index
  end

  def show
    # debugger
    @cart = Cart.find_by(id: params[:id])
    @cart_items = CartLedger.where(cart_id: @cart.id)
    # maybe active carts where cart_active: true
    # total carts is order history where 
    render :show
  end

  # user may be able to create one, need to have helper function to ensure only one exists
  def create
    @cart = Cart.create(cart_params)
    if @cart.save!
      render :show
    else
      render json: @cart.errors.full_messages, status:422
    end
  end

  def update
    @cart = Cart.find_by(id: params[:id])
    if cart.update(cart_params)
      render :show
    else
      render json: @cart.errors.full_messages, status:422
    end
  end

  def cartItemCount
    
  end

# add something to make it archived in order to conditionally edit or destroy it?  If archived cannot do either -- does that function go into carts model file?



  def cart_params
    params.require(:cart).permit(:user_id, :cart_ledger_id)
  end





end

class Api::CartLedgersController < ApplicationController

  # can only view these if cart.id = current_user.id
  # does that above function go into cart_ledger model?

  def index
    @cart_ledgers = CartLedger.all
    # render @cart_ledgers
    render :index
  end

  def show
    @cart_ledger = CartLedger.find_by(id: params[:id])
    render :show
  end

  def create
    @cart_ledger = CartLedger.create(ledger_params)
    if @cart_ledger.save!
      @cart_items = CartLedger.where(cart_id: @cart_ledger.cart_id)
      render :show
      # render "api/carts/show"
    else 
      render json: @cart_ledger.errors.full_messages, status:422
    end
  end

  def update
    @cart_ledger = CartLedger.find_by(id: params[:id])
    # params.require(:cart_ledger).permit(:product_id, :quantity, :cart_id, :id)
    if @cart_ledger.update(ledger_params)
      @cart_items = CartLedger.where(cart_id: @cart_ledger.cart_id)
      render :show
      # render "api/carts/show"
    else
      render json: @cart_ledger.errors.full_messages, status:422
    end
  end

  def destroy
    @cart_ledger = CartLedger.find_by(id: params[:id])
    # render "cartmaster" if @cart_ledger.destroy
    cart_id = @cart_ledger.cart_id
    if @cart_ledger.destroy
      @cart_items = CartLedger.where(cart_id: cart_id)
      render :show 
      # render "api/carts/show"
      # it is trying to rerender the item it deleted
     else
      render json: @cart_ledger.errors.full_messages, status: 422
     end

  end

  def ledger_params
    params.require(:cart_ledger).permit(:product_id, :quantity, :cart_id, :id, :discount)
  end

end

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
      render :show
    else 
      render json: @cart_ledger.errors.full_messages, status:422
    end
  end

  def update
    @cart_ledger = CartLedger.find_by(id: params[:id])
    # params.require(:cart_ledger).permit(:product_id, :quantity, :cart_id, :id)
    if @cart_ledger.update(ledger_params)
      render :show
    else
      render json: @cart_ledger.errors.full_messages, status:422
    end
  end

  def destroy
    @cart_ledger = CartLedger.find_by(id: params[:id])
    # render "cartmaster" if @cart_ledger.destroy
    if @cart_ledger.destroy
      render :show 
      # it is trying to rerender the item it deleted
     else
      render json: @cart_ledger.errors.full_messages, status: 422
     end

  end

  def ledger_params
    params.require(:cart_ledger).permit(:product_id, :quantity, :cart_id, :id)
  end

end

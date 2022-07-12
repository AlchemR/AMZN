class Api::ProductsController < ApplicationController

  def index
    @products = Product.all
    render :index
  end

  def show
    @product = Product.find_by(id: params[:id])
    # show by category?  Find by category?  Category.includes?
    render :show
  end

end

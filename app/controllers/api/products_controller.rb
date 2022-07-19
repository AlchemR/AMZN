class Api::ProductsController < ApplicationController

  def index
    @products = Product.all
    render :index
    # filter by cateogry in index
    # Product.find_by(categories)

    # if params[:categories] == "books"
      # @products = Product.where({categories.includes?("books")})
      # render :index
    # elsif params[:categories] == "firewood"
    # end
    
  end

  def show
    @product = Product.find_by(id: params[:id])
    # show by category?  Find by category?  Category.includes?
    render :show
  end

end

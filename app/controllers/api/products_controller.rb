class Api::ProductsController < ApplicationController

  def index

    if params[:category] == nil # category false
      if params[:query] ==  nil 
        # if both category and paramters are null then get everything
        @products = Product.all
      else  # where category false but query is true
        @products = Product.where("LOWER(title) LIKE LOWER(?)", "%#{params[:query]}%")
      end
    
    else
      if params[:query] ==  nil  # where category true but query is false
        @products = Product.where("?=ANY(categories)", "#{params[:category]}")
      else # wjere the category is true and # where query is true
        @products = Product.where("?=ANY(categories)", "#{params[:category]}").where("LOWER(title) LIKE LOWER(?)", "%#{params[:query]}%")      
      end
      
    end
    render :index
  end

  def show
    @product = Product.find_by(id: params[:id])
    # show by category?  Find by category?  Category.includes?
    total = 0
    i = 0

    render :show
  end

end

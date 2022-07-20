class Api::ReviewsController < ApplicationController

  def index
    @reviews = Review.all
    # @product_reviews = Reviews.all.where(product_id: params[:product_id])
    # @user_reviews   = Reviews.all.where(user_id: params[:user_id])
      render :index
  end

  def create
  @review = Review.new(review_params)
  # user = User.find_by(id: params[:user_id])
  # @review.review_author = user.account_fname + user.account_lname 
  # maybe can get by association?
  # @product = review.product
    if review.save
      render :show
      # Render individual review page details
    else 
      render json: @review.errors.full_messages, status: 422
    end
  end

  def show
    @review = Review.find_by(id: params[:id])
    render :show
  end

  def update
    @review = Review.find_by(id: params[:id])
    # @product = review.product
    if @review.update(review_params)
      render :show
      #redirect to product show page?  Or individual review page
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def destroy
    @review = Review.find_by(params[:id])

    if @review.destroy
      # @review.delete instead
      # how do I render product show?
    else
      render json: @review.errors.full_messages

    end
    
  end

  def review_params
    params.require(:review).permit(:id, :product_id, :user_id, :review_header, :review_author, :rating, :review_body, :verified_purchase)
  end

end

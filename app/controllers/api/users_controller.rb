class Api::UsersController < ApplicationController


  def create
    @user = User.create(user_params)
    if @user.save
      @user.carts = Cart.create!( user_id: @user.id)
      # @user.cart = cart.create(cart_params)
      # placeholder to remind to add associations to cart and user, user has many, cart belongs to user
      login!(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
      # do we want flash errors or json errors in users controller
      # flash[:errors] = @user.errors.full_messages
      # render :new
    end 
  end


  def user_params
    params.require(:user).permit(:username, :password, :email, :account_fname, :account_lname, :session_token)
  end




end

class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
    if @user
      # @cart = @user.carts
      # @cart_items = @user.carts.cartLedgers
      login!(@user)
      render "api/users/show"
      # render :show
    else
      render json: ["Invalid email/password"], status: 401
    end
  end



  def destroy
    @user = current_user
    if @user
      logout!
      render "api/users/show"
    else
      render json: ["No Current user logged in"], status: 404
    end
  end



end

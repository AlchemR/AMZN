class ApplicationController < ActionController::Base

  skip_before_action :verify_authenticity_token

  helper_method :require_logged_in, :current_user, :logged_in?

  def current_user
      return nil unless session[:session_token]
      @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def require_logged_in
    unless logged_in?
      render json: { base: ['invalid credentials'] }, status: 401 
    end
  end

  def login!(user)
    @current_user = user
    session[:session_token] = user.reset_session_token!
  end

  def logout!
    current_user.reset_session_token!
    session[:session_token] = nil
    @current_user = nil
  end

  def logged_in?
    !!current_user
  end



end

# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  account_fname   :string           not null
#  account_lname   :string           not null
#  email           :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
  # validates presence :username, :password
    validates :email, :account_fname, :account_lname, presence: true
    validates :email, :username, uniqueness:true
    validates :password, length: { minimum: 3}, allow_nil: true 

    has_one :carts, 
    primary_key: :id,
    class_name: "Cart", 
    foreign_key: "user_id"

    has_many :cart_items, 
    through: :carts, 
    source: :cartLedgers
    
    has_many :reviews, 
    primary_key: :id, 
    class_name: "Review", 
    foreign_key: "user_id"
   
    after_initialize :ensure_session_token

    attr_reader :password

    def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil if user.nil?
    user.is_password(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end


end

# == Schema Information
#
# Table name: cart_ledgers
#
#  id         :bigint           not null, primary key
#  product_id :integer
#  quantity   :integer
#  cart_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  price      :float
#  discount   :string
#
class CartLedger < ApplicationRecord

  belongs_to :cart, class_name: "Cart", foreign_key: "cart_id"

  belongs_to :product, 
  primary_key: :id,
  foreign_key: "product_id",
  class_name: "Product"
  
end

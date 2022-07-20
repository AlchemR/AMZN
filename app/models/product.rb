# == Schema Information
#
# Table name: products
#
#  id                        :bigint           not null, primary key
#  title                     :string
#  description               :string
#  detailed_description      :text
#  details_description_array :text             default([]), is an Array
#  additional_details        :text             default([]), is an Array
#  seller_id                 :integer
#  price                     :float
#  categories                :text             default([]), is an Array
#  discounts                 :text             default([]), is an Array
#  in_stock                  :boolean
#  inventory_count           :integer
#  created_at                :datetime         not null
#  updated_at                :datetime         not null
#
class Product < ApplicationRecord
  
  has_many :reviews, 
  primary_key: :id,
  class_name: "Review", 
  foreign_key: "product_id"

  has_many :cartledgers, 
  primary_key: :id,
  foreign_key: "product_id",
  class_name: "CartLedger"

  has_one_attached :photo
    # has_many_attached :photos

end

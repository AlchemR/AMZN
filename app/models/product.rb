# == Schema Information
#
# Table name: products
#
#  id                   :bigint           not null, primary key
#  title                :string
#  description          :string
#  detailed_description :text
#  price                :float
#  categories           :text             default([]), is an Array
#  created_at           :datetime         not null
#  updated_at           :datetime         not null
#
class Product < ApplicationRecord
  has_many :cartledgers, 
  primary_key: :id,
  foreign_key: "product_id",
  class_name: "CartLedger"

  has_one_attached :photo
    # has_many_attached :photos

end

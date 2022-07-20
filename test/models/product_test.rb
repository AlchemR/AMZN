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
require 'test_helper'

class ProductTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

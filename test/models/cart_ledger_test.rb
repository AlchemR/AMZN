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
require 'test_helper'

class CartLedgerTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

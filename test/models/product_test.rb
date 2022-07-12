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
require 'test_helper'

class ProductTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

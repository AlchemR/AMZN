# == Schema Information
#
# Table name: reviews
#
#  id                :bigint           not null, primary key
#  user_id           :integer
#  product_id        :integer
#  review_header     :string
#  review_author     :string
#  rating            :integer
#  review_body       :text
#  verified_purchase :boolean
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  wordcloud         :text
#
require 'test_helper'

class ReviewTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

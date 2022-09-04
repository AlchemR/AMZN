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
class Review < ApplicationRecord

belongs_to :user, class_name: "User", foreign_key: "user_id"
belongs_to :product, class_name: "Product", foreign_key: "product_id"

end

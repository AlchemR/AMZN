
# (product details by association, title)
# user details by association? -- maybe create in controller through association

json.extract! @review, :id, :product_id, :review_header, :review_author, :rating ,:wordcloud, :review_body, :verified_purchase, :updated_at, :user_id

json.set! @review.id do 
  json.extract! @review, :id, :product_id, :review_header, :review_author, :rating,:wordcloud, :review_body, :verified_purchase, :updated_at, :user_id
end


# 
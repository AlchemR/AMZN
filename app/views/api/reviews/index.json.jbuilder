

@reviews.each do |review|
json.set! review.id do 
  json.extract! review, :id, :product_id, :review_header, :review_author, :rating, :review_body, :verified_purchase, :updated_at, :user_id
  
end
end


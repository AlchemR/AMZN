json.extract! product, :id, :title, :description, :detailed_description, :price, :categories, :inventory_count, :in_stock, :details_description_array, :additional_details, :wordcloud_tags, :product_options
total = 0


# json.set! "reviews" 
if (product.reviews.length > 0) 
  product.reviews.each do |review|
    # json.review.id, :id, :product_id, :review_header, :review_author, :rating, :review_body, :verified_purchase, :updated_at, :user_id
    # json.set! review.id, :id, :product_id, :review_header, :review_author, :rating, :review_body, :verified_purchase, :updated_at, :user_id
    total += review.rating
  end
  total = (total / product.reviews.length)

end
json.reviews_avg total

json.photoUrl url_for(product.photo)
# reference photoUrl

 


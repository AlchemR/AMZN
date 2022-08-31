json.extract! product, :id, :title, :description, :detailed_description, :price, :categories, :inventory_count, :in_stock, :details_description_array, :additional_details
total = 0
# json.set! "reviews" 
if (product.reviews.length > 0) 
  product.reviews.each do |review|
    # json.review.id, :id, :product_id, :review_header, :review_author, :rating, :review_body, :verified_purchase, :updated_at, :user_id
    # json.set! review.id, :id, :product_id, :review_header, :review_author, :rating, :review_body, :verified_purchase, :updated_at, :user_id
    
    # if onestar add to review_onestar
    # if onestar add to review_twostar
    # if onestar add to review_threestar
    # if onestar add to review_fourstar
    # if onestar add to review_fivestar
    # 
    total += review.rating
  end
  total = (total / product.reviews.length)

end
json.reviews_avg total
# json.review_onestar = review_onestar
# json.review_twostar = review_onestar
# json.review_threestar = review_onestar
# json.review_fourstar = review_onestar
# json.review_fivestar = review_onestar

json.photoUrl url_for(product.photo)
# reference photoUrl

 


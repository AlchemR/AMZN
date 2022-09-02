json.extract! product, :id, :title, :description, :detailed_description, :price, :categories, :inventory_count, :in_stock, :details_description_array, :additional_details
total = 0
review_onestar = 0
review_twostar = 0
review_threestar = 0
review_fourstar = 0
review_fivestar = 0


# json.set! "reviews" 
if (product.reviews.length > 0) 
  product.reviews.each do |review|
    # json.review.id, :id, :product_id, :review_header, :review_author, :rating, :review_body, :verified_purchase, :updated_at, :user_id
    # json.set! review.id, :id, :product_id, :review_header, :review_author, :rating, :review_body, :verified_purchase, :updated_at, :user_id
    
    if review.rating == 1
       review_onestar += 1
    end
    if review.rating == 2
       review_twostar += 1
    end
    if review.rating == 3
       review_threestar += 1
    end
    if review.rating == 4
       review_fourstar += 1
    end
    if review.rating == 5
       review_fivestar += 1
    end

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

 


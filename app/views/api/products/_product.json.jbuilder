json.extract! product, :id, :title, :description, :detailed_description, :price, :categories, :inventory_count, :in_stock, :details_description_array, :additional_details
total = 0
product.reviews.each do |review|
total += review.rating
end
total = (total / product.reviews.length)
json.reviews_avg total
json.photoUrl url_for(product.photo)
# reference photoUrl

 


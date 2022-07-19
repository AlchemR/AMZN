@products.each do |product|
    json.set! product.id do
      # if you use instock, be sure to add it, currently not added
      # json.extract! product, :id, :title, :description, :detailed_description, :price, :categories
      json.partial! 'api/products/product', product: product
      #  I would prefer not to delegate to partial 
      # -- I don't particularly see an advantage to a one liner in a different file
    end
end
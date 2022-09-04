class AddWordcloudTagsToCartLedgers < ActiveRecord::Migration[5.2]
  def change
    add_column :products, :wordcloud_tags, :text,  array:true, default: []
    add_column :products, :product_options, :text,  array:true, default: []
    add_column :reviews, :wordcloud, :text
    add_column :cart_ledgers, :discount, :float
  end
end

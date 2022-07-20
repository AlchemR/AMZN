class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :user_id
      t.integer :product_id
      t.string :review_header
      t.string :review_author
      t.integer :rating
      t.text :review_body
      t.boolean :verified_purchase
      t.timestamps
      
    end
  end
end

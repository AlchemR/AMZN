class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :title
      t.string :description
      t.text :detailed_description 
      t.text :details_description_array, array:true, default:[]
      t.text :additional_details, array:true, default:[]
      t.integer :seller_id
      t.float :price
      t.text :categories, array:true, default:[]
      t.text :discounts, array:true, default:[]
      t.boolean :in_stock
      t.integer :inventory_count
      
      # t.string :title, null:false
      # t.string :description, null:false
      # t.text :detailed_description
      # t.float :price, null:false
      # t.text :categories, array:true, default:[]
      # t.boolean :in_stock, null:false
      t.timestamps
    end
  end
end

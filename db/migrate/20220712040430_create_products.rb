class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :title
      t.string :description
      t.text :detailed_description
      t.float :price
      t.text :categories, array:true, default:[]
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

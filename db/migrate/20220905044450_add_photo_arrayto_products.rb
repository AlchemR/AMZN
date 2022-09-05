class AddPhotoArraytoProducts < ActiveRecord::Migration[5.2]
  def change
    add_column :products, :additional_photos, :text,  array:true, default: []
  end
end

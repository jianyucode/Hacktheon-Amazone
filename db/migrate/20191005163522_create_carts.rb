class CreateCarts < ActiveRecord::Migration[5.2]
  def change
    create_table :carts do |t|
      t.string :prod_name
      t.float :price
      t.text :description
      t.integer :stock
      t.string :image_link

      t.timestamps
    end
  end
end

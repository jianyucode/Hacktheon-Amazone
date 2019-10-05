class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :name
      t.text :description
      t.float :price
      t.integer :stock
      t.belongs_to :department, foreign_key: true
      t.string :image_link

      t.timestamps
    end
  end
end

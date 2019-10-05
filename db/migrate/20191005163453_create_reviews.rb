class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.string :title
      t.text :body
      t.string :author
      t.string :rank
      t.string :rating
      t.string :date
      t.string :image_link
      t.belongs_to :product, foreign_key: true

      t.timestamps
    end
  end
end

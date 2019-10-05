class Product < ApplicationRecord
  
  belongs_to :department
  has_many :reviews
  dependent: :destroy

end

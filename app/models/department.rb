class Department < ApplicationRecord
  before_action :authenticated_user!
  belongs_to :user
  has_many :products
  dependent: :destroy
end

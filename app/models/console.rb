class Console < ApplicationRecord
    validates :model, :year, :storage, presence: true

    has_many :games
    has_many :users, through: :games
end

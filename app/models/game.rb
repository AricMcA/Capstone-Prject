class Game < ApplicationRecord
    validates :title, :year, :genre, presence: true

    belongs_to :user
    belongs_to :console
end

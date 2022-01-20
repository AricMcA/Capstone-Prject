class Game < ApplicationRecord
    validates :title, :year, :genre, presence: true

    belongs_to :user, dependent: :destroy
    belongs_to :console

    accepts_nested_attributes_for :console
end

class ConsoleSerializer < ActiveModel::Serializer
  attributes :id, :model, :year, :storage

  has_many :games
  has_many :users, through: :games
end

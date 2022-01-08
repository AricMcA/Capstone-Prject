class GameSerializer < ActiveModel::Serializer
  attributes :id, :title, :year, :genre, :user_id, :console_id

  belongs_to :user
  belongs_to :console
end

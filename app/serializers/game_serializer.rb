class GameSerializer < ActiveModel::Serializer
  attributes :id, :title, :year, :genre, :user_id, :console_id
end

class ConsoleSerializer < ActiveModel::Serializer
  attributes :id, :model, :year, :storage
end

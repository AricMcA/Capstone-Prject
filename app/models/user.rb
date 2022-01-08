class User < ApplicationRecord
    has_secure_password

    validates :name, :password, :password_confirmation, presence: true

    has_many :games
    has_many :consoles, through: :games
end

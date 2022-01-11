class ConsolesController < ApplicationController

    def index
        consoles = Console.all
        render json: consoles
    end

    def games_index
        console = Console.find(params[:console_id])
        games = console.games
        render json: games
    end

    def users_consoles
        consoles = current_user.consoles.uniq
        render json: consoles
    end

    def user_games_index
        console = current_user.consoles
        games = current_user.games
        render json: games
    end

    private

    def current_user
        User.find_by(id: session[:user_id])
    end
end

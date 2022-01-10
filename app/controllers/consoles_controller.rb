class ConsolesController < ApplicationController

    def index
        consoles = Console.all

        render json: consoles
    end

    def show
        console = Console.find(params[:id])
        render json: console
    end

    def games_index
        console = Console.find(params[:console_id])
        games = console.games
        render json: games, include: :console
    end
end

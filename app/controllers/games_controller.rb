class GamesController < ApplicationController

    def index
        games = current_user.games
        render json: games
    end

    def create
        game = current_user.games.create(game_params)
        if game.valid?
            render json: game
        else
            render json: { errors: game.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def show
        game = current_user.games.find_by(id: params[:id])
        if game
            render json: game
        else
            render json: { error: "Not found" }, status: :unauthorized
        end
    end

    def destroy
        
        game = current_user.games.find_by(id: params[:id])
        
        if game
            game.destroy
            head :no_content
        else
            render json: { error: "Not found" }, status: :not_found
        end

    end

    def update
        game = current_user.games.find_by(id: params[:id])
        if game
            game.update(game_params)
            render json: game, status: :accepted
        else
            render json: { error: "Game not found "}, status: :not_found
        end
    end


    private

    def current_user
        User.find_by(id: session[:user_id])
    end

    def game_params
        params.permit(:title, :year, :genre, :console_id, console_attributes: [:model, :year, :storage])
    end

end

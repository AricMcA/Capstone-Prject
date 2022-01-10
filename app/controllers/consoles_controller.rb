class ConsolesController < ApplicationController

    def index
        consoles = Console.all

        render json: consoles
    end

    
end

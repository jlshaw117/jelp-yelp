class Api::SearchesController < ApplicationController

    def search_businesses
        
    end

    def search_params
        params.require(:search).permit(:terms)
    end
end

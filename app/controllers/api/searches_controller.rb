class Api::SearchesController < ApplicationController

    def search_businesses
        search_terms = params[:terms].split
        result_string = search_terms.map do |term|
            "LOWER(name) LIKE '%#{term.downcase}%'"
        end.join(" OR ")
        @businesses = Business.where(result_string)
        render 'api/businesses/index'
    end
end

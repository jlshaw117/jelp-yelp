class Api::SearchesController < ApplicationController

    def search_businesses
        @string = params[:terms]
        search_terms = @string.split
        result_string = search_terms.map do |term|
            "LOWER(name) LIKE '%#{term.downcase}%'"
        end.join(" OR ")
        @result = Business.where(result_string)
        @results = @result.empty? ? false : true
        render 'api/searches/business_results'
    end
end

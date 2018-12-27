class Api::SearchesController < ApplicationController

    def search_businesses
        @string = params[:terms]
        search_terms = @string.split
        result_string = search_terms.map do |term|
            "LOWER(businesses.name) LIKE '%#{term.downcase}%' OR LOWER(tags.name) LIKE '%#{term.downcase}%'"
        end.join(" OR ")
        @result = Business.joins(:tags).where(result_string)
        @results = @result.empty? ? false : true
        render 'api/searches/business_results'
    end
end

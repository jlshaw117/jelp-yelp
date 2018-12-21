json.businesses do
    @result.each do |biz|
        json.set! biz.id do
            json.partial! 'api/businesses/business', business: biz
            json.reviewIds biz.reviews.map { |rev| rev.id}
            json.reviewText biz.reviews[0].body
        end
    end
end 

json.terms @string
json.results @results

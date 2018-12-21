@businesses.each do |bis|
    json.set! bis.id do
        json.partial! 'api/businesses/business', business: bis
        json.reviewIds bis.reviews.map { |rev| rev.id}
        json.reviewText bis.reviews[0].body
    end
end
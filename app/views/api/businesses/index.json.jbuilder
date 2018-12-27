@businesses.each do |biz|
    json.set! biz.id do
        json.partial! 'api/businesses/business', business: biz
        json.reviewIds biz.reviews.map { |rev| rev.id}
        json.reviewText biz.reviews[0].body
        json.businessTags biz.tags.map { |tag| tag.name }
    end
end
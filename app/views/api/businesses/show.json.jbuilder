# json.partial! 'api/businesses/business', business: @business

json.business do
  json.partial! '/api/businesses/business', business: @business
  json.reviewIds @business.reviews.pluck(:id)
  json.businessTags @business.tags.map { |tag| tag.name }
end


@business.reviews.each do |review|
  json.reviews do
    json.set! review.id do
      json.partial! 'api/reviews/review', review: review
    end
  end

  json.users do
    json.set! review.user.id do
      json.partial! 'api/users/user', user: review.user
    end
  end
end
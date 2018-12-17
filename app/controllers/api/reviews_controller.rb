class Api::ReviewsController < ApplicationController

    def create
        @review = Review.new(review_params)

        if @review.save
            render 'api/reviews/review'
        else
            render json: @review.errors.full_messages
        end
    end

    def update
        
    end

    def destroy
        
    end

    private

    def review_params
        params.require(:review).permit(:rating, :body, :user_id, :business_id)
    end
end

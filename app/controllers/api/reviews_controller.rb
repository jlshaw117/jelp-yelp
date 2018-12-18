class Api::ReviewsController < ApplicationController

    def create
        @review = Review.new(review_params)
        
        if @review.save
            render 'api/reviews/show'
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def update
        @review = Review.find_by(id: params[:id])

        if current_user.reviews.include?(@review) && @review.update(review_params)
            render 'api/reviews/show'
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def destroy
        @review = Review.find_by(id: params[:id])
        @review.destroy!
        render 'api/reviews/show'
    end

    private

    def review_params
        params.require(:review).permit(:rating, :body, :user_id, :business_id)
    end
end

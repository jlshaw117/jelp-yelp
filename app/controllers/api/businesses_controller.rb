class Api::BusinessesController < ApplicationController
  def index
    @businesses = Business.all
    render :index
  end

  def create
    @business = Business.new(business_params)

    if @business.save
      render 'api/businesses/show'
    else
      render json: @business.errors.full_messages, status: 422
    end
  end

  def show
    @business = Business.find_by(id: params[:id])

    if @business
      render 'api/businesses/show'
    else
      render json: ["Business does not exist yet"]
    end
  end

  def update
    @business = Business.find_by(id: params[:id])

    if @business && @business.update(business_params) 
      render 'api/businesses/show'
    else
      render json: @business.errors.full_messages
    end
  end

  private 

  def business_params
    params.require(:business).permit(:name, :long, :lat, :address, :city, :state, :zip, :owner_id, :price, :phone_number, :hours)
  end
end

class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    
    if @user.save
      @user.photo.attach(io: File.open("./app/assets/images/dog.png"), filename:"dog.png")
      login(@user)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find_by(id: params[:id])
    if @user && @user == current_user
      render 'api/users/show'
    else
      render json: ["Unautherized access"], status: 401
    end
  end

  private
  
  def user_params
    params.require(:user).permit(:email, :password, :f_name, :l_name)
  end
end


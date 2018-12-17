Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resources :reviews, only: [:update, :create, :destroy]
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :businesses, only: [:create, :update, :show, :index]
  end

  root 'static_pages#root'
end

Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resources :reviews, only: [:update, :create, :destroy]
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :businesses, only: [:create, :update, :show, :index]
    get 'search/businesses', to: 'searches#search_businesses'
    # get 'businesses/search', to: 'Searches#search_businesses'
  end

  root 'static_pages#root'
end

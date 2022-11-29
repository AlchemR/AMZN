# == Route Map
#
#                    Prefix Verb   URI Pattern                                                                              Controller#Action
#               api_session DELETE /api/session(.:format)                                                                   api/sessions#destroy {:format=>:json}
#                           POST   /api/session(.:format)                                                                   api/sessions#create {:format=>:json}
#                 api_users POST   /api/users(.:format)                                                                     api/users#create {:format=>:json}
#              api_products GET    /api/products(.:format)                                                                  api/products#index {:format=>:json}
#               api_product GET    /api/products/:id(.:format)                                                              api/products#show {:format=>:json}
#          api_cart_ledgers GET    /api/cart_ledgers(.:format)                                                              api/cart_ledgers#index {:format=>:json}
#                           POST   /api/cart_ledgers(.:format)                                                              api/cart_ledgers#create {:format=>:json}
#           api_cart_ledger GET    /api/cart_ledgers/:id(.:format)                                                          api/cart_ledgers#show {:format=>:json}
#                           PATCH  /api/cart_ledgers/:id(.:format)                                                          api/cart_ledgers#update {:format=>:json}
#                           PUT    /api/cart_ledgers/:id(.:format)                                                          api/cart_ledgers#update {:format=>:json}
#                           DELETE /api/cart_ledgers/:id(.:format)                                                          api/cart_ledgers#destroy {:format=>:json}
#                 api_carts GET    /api/carts(.:format)                                                                     api/carts#index {:format=>:json}
#                           POST   /api/carts(.:format)                                                                     api/carts#create {:format=>:json}
#                  api_cart GET    /api/carts/:id(.:format)                                                                 api/carts#show {:format=>:json}
#                           PATCH  /api/carts/:id(.:format)                                                                 api/carts#update {:format=>:json}
#                           PUT    /api/carts/:id(.:format)                                                                 api/carts#update {:format=>:json}
#               api_reviews GET    /api/reviews(.:format)                                                                   api/reviews#index {:format=>:json}
#                           POST   /api/reviews(.:format)                                                                   api/reviews#create {:format=>:json}
#                api_review GET    /api/reviews/:id(.:format)                                                               api/reviews#show {:format=>:json}
#                           PATCH  /api/reviews/:id(.:format)                                                               api/reviews#update {:format=>:json}
#                           PUT    /api/reviews/:id(.:format)                                                               api/reviews#update {:format=>:json}
#                           DELETE /api/reviews/:id(.:format)                                                               api/reviews#destroy {:format=>:json}
#                      root GET    /                                                                                        static_pages#root
#        rails_service_blob GET    /rails/active_storage/blobs/:signed_id/*filename(.:format)                               active_storage/blobs#show
# rails_blob_representation GET    /rails/active_storage/representations/:signed_blob_id/:variation_key/*filename(.:format) active_storage/representations#show
#        rails_disk_service GET    /rails/active_storage/disk/:encoded_key/*filename(.:format)                              active_storage/disk#show
# update_rails_disk_service PUT    /rails/active_storage/disk/:encoded_token(.:format)                                      active_storage/disk#update
#      rails_direct_uploads POST   /rails/active_storage/direct_uploads(.:format)                                           active_storage/direct_uploads#create

Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

    namespace :api, defaults: {format: :json} do
      resource :session , only: [:create, :destroy]
      resources :users, only: [:create]
      resources :products, only: [:index, :show] 
      resources :cart_ledgers, only: [:index, :show, :create, :update, :destroy]
      resources :carts, only: [:index, :show, :create, :update]
      resources :reviews, only: [:index, :show, :create, :update, :destroy]
      # check plurality if 404
    end


  get '*path', to: "static_pages#frontend_index"
  root "static_pages#root"
end

Rails.application.routes.draw do
  // add in api before every route
  namespace :api do
    namespace :v1 do
      resources :comments
      resources :projects
      # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
    end
  end
end

# http://localhost:3000/api/v1/projects
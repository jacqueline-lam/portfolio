Rails.application.routes.draw do
  # add in api before every route
  namespace :api do
    namespace :v1 do
      resources :stacks, only [:index]
      resources :projects, only: [:index, :show] do
        # only access comments routes nested inside of project
        resources :comments
      end
      # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
    end
  end
end

# http://localhost:3000/api/v1/projects
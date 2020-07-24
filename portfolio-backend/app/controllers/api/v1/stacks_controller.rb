class Api::V1::StacksController < ApplicationController
  # api/v1/stacks
  def index
    stacks = Stack.all
    render json: stacks.to_json(except: [:created_at, :updated_at])
  end
end
class Api::V1::ProjectStacksController < ApplicationController
  # api/v1/projects/:id/project_stacks
  def index
    project ||= Project.find(params[:project_id])
    project_stacks = project.project_stacks
    render json: project_stacks
  end
end

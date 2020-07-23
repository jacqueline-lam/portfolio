class Api::V1::ProjectsController < ApplicationController
  # api/v1/projects/
  def index
    projects = Project.all
    render json: ProjectSerializer.new(projects).to_serialized_json
  end

  # api/v1/projects/:id
  def show
    project = Project.find(params[:id])
    render json: ProjectSerializer.new(project).to_serialized_json
  end
end


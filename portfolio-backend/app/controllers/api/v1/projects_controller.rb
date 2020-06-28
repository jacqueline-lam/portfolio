class Api::V1::ProjectsController < ApplicationController
  def index
    projects = Project.all
    render json: ProjectSerializer.new(projects).to_serialized_json
  end

  def show
    project = Project.find_by(params[:id])
    render json: ProjectSerializer.new(project).to_serialized_json
  end
end

class Api::V1::CommentsController < ApplicationController
  before_action :get_project, only: [:index, :create]

  # api/v1/projects/:id/comments
  def index
    comments = @project.comments
    render json: comments
  end

  def create
    comment = @project.comments.build(comment_params)

    if comment.save
      render json: comment
    else
      render json: { message: 'Error: Failed to add comment.'}
    end
  end

  private

  def get_project
    @project ||= Project.find(params[:project_id])
  end

  def comment_params
    params.require(:comment).permit(:author, :email, :content, :project_id)
  end
end

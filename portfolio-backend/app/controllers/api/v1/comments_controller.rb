class Api::V1::CommentsController < ApplicationController
  before_action :set_project

  def index
    comments = project.
    render json: comments
  end

  def create
    project = Project.find_by(id: comment_params[:project_id])
    comment = project.comments.build(comment_params)

    if comment.save
      # render json: CommentSerializer.new(comment).instance_to_serialized_json
      render json: comment
    else
      render json: { message: 'Error: Failed to add comment.'}
    end
  end

  def show
    comment = Comment.find(params[:id])
    render json: comment
  end

  # def update
  # end

  def destroy
    comment = Comment.find(params[:id])
    comment.destroy
  end

  private

  def set_project
    project ||= Project.find(params[:project_id])
  end

  def comment_params
    params.require(:comment).permit(:author, :email, :content, :project_id)
  end
end

class Api::V1::CommentsController < ApplicationController
  before_action :get_project, only: [:index, :create]
  before_action :get_comment, only: [:show, :destroy]
  # api/v1/projects/:id/comments

  def index
    comments = @project.comments
    render json: comments
  end

  def show
    # comment = project.comments.find_by(params[:id])
    render json: @comment
  end

  def create
    binding.pry
    comment = @project.comments.build(comment_params)

    if comment.save
      # render json: CommentSerializer.new(comment).instance_to_serialized_json
      render json: @comment
    else
      render json: { message: 'Error: Failed to add comment.'}
    end
  end

  # def update
  # end

  def destroy
    # comment = Comment.find(params[:id])
    @comment.destroy
  end

  private

  def get_project
    @project ||= Project.find(params[:project_id])
  end

  def get_comment
    @comment ||= Comment.find(params[:id])
  end

  def comment_params
    params.require(:comment).permit(:author, :email, :content, :project_id)
  end
end

class Api::V1::CommentsController < ApplicationController
  def index
    @comments = Comment.all
    render json @comments
  end

  def show
    comment = Comment.find(params[:id])
    render json: comment
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

  # def update
  # end

  def destroy
    comment = Comment.find(params[:id])
    comment.destroy
  end

  private

  def comment_params
    params.require(:comment).permit(:author, :email, :content, :project_id)
  end
end

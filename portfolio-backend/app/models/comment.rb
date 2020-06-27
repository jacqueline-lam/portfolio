class Comment < ApplicationRecord
  belongs_to :project
  validates :project_id, :author, :email, :content, presence: true
end

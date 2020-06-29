class Project < ApplicationRecord
  has_many :comments
  has_many :project_stacks
  has_many :stacks, through: :project_stacks
end

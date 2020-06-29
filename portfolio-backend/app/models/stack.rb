class Stack < ApplicationRecord
  has_many :project_stacks
  has_many :projects, through: :project_stacks
end

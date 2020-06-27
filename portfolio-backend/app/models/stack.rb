class Stack < ApplicationRecord
  has_many :projects, :through => :project_stacks
end

class ProjectSerializer
  def initialize(project_object)
    @project_collection = project_object
  end

  def to_serialized_json
    @project_collection.to_json(:include => {
      :comments
    }, :except => [:created_at, :updated_at])
  end

end
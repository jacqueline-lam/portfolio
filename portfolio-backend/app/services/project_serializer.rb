class ProjectSerializer
  # object passed when initializing new instance of ProjectSerializer
  # will be stored as @project_collection
  def initialize(project_object)
    @project_collection = project_object
  end

  # handle inclusion & exclusion of attributes +
  # get data customized and converted to JSON str
  def to_serialized_json
    options = {
      include: :comments,
      except: [:created_at, :updated_at]
    }
    # call to_json on this instance variable
    @project_collection.to_json(options)
  end

end
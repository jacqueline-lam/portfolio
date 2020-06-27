# MODEL/ RELATIONSHIPS
PORTFOLIO

Project
has_many :comments
has_many :stacks (Ruby on rails, JS PostGres)
:id, :description -text, :github_url -string, :site_url -string, :demo_vid -string

Stack
has_many :projects
:name -string

Comment
belongs_to :project
  :project_id - integer, :content -text, :author -string, :email -string, :date -datetime

# ROUTES
/ (home)
/projects
/projects/:id
/blogs

# EXTERNAL APIs

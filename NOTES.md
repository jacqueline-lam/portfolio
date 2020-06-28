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

### Themes:
- Foodie
- Loves climbing
- Digital marketer
- Visual (with many pics)


### Features
- Filter projects by stack

My Blog posts
(https://dev.to/cdvillard/bringing-dev-to-to-your-blog-27nb)
- All blog posts: https://dev.to/api/articles?username=jacquelinelam
- Specific blog posts: https://dev.to/api/articles/:id
<!-- The v-for creates an instance of each "blog-preview" component
for each "blog" in the "blogList" we got earlier,
and attaches each property from the "blog" to an associated property
of the "blog-preview" component. Kind of like connect-the-dots.
If you want to learn more about Vue components and props, start with
the Vue documentation at https://vuejs.org/v2/guide/components.html -->
<blog-preview v-for="blog of blogList"
  :key="blog.id"
  :blog-title="blog.title"
  :blog-description="blog.description"
  :blog-link="blog.canonical_url"
></blog-preview>
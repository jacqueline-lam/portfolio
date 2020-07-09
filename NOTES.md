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


### "About me"
* I'm a fullstack software developer based in New York.
* When I'm not coding, you'll find me climbing at the local bouldering gym or testing new recipes like miso basil pasta!


TO DO
- Add NavBar + set up Links
- change images to be hosted on backend (instead of google photos)
- Design home page and draft A Little About Me page
- fix bug when unselecting stack tag

{/* <form onSubmit={this.handleOnSubmit}>
          <fieldset>
            <label className="btn btn-outline-secondary active">
              <input type="checkbox" checked="" aria-pressed="true" /> All
            </label> */}
    {/* <button type="button" id="allBtn" className="btn btn-outline-primary btn-sm active" aria-pressed="true" >
          All
        </button> */}
        // <input type="submit" />
        //   </fieldset>
        // </form>

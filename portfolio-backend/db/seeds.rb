# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Running DB seed..."

# Don't let seed duplicate data more than once
puts "Dropping DB..."
Project.destroy_all
Comment.destroy_all
Stack.destroy_all
ProjectStack.destroy_all

stacks = [
  "ActiveRecord",
  "BCrypt",
  "Bootstrap",
  "CRUD",
  "HTML & CSS",
  "Fetch API",
  "JavaScript",
  "MVC",
  "Nokogiri",
  "Omniauth",
  "PostgreSQL",
  "React.JS",
  "React Router",
  "Redux",
  "Redux Thunk",
  "RESTful API",
  "Ruby",
  "Ruby on Rails",
  "Sinatra",
  "SQLite3",
]

puts "Creating stacks..."
stacks.each do |stack|
  Stack.create(name: stack)
end

project_data = [
  # Project #1
  {
    name: "CLI Data Gem for Indecisive Shoppers",
    description: "I designed a CLI app that scraped data from the web page Outdoor Gear Lab. It provides shoppers with concise information about a type of product and gives them the option to inquire about the products based on chosen features/ rating catgories!",
    image_url: "http://drive.google.com/file/d/1WwtgDcBwrXa-tJ1pXbyBwBBkClDNdvst/view?usp=sharing",
    github_url: "http://github.com/jacqueline-lam/rain_jackets",
    site_url: "http://rubygems.org/gems/rain_jackets",
    demo_video: "http://drive.google.com/file/d/1UvR5-3OvvOv34_mZFd87xY5ypTTC_ics/view?usp=sharing",
    stacks: ['Ruby', 'Nokogiri'],
    comments: {
      author: "Nick",
      email: "nick@gmail.com",
      content: "Great job on scraping some product data and breaking down the data for making further specific queriries. This can be expanded into a great e-commerce backend project if you can scrape data for other products as well!"
    }
  },

  # Project 2
  {
    name: "Sinatra-based Bouldering Log App",
    description: "Bolderer is a Sinatra-powered web application that I created for aspiring boulderers. Climbers can keep track of the problems that they have climbed and check out other users' climbing progress as well.",
    image_url: "http://drive.google.com/file/d/1J4Eg6fbWHeaVA4J54vFu-j-FVMBqNCGo/view?usp=sharing",
    github_url: "http://github.com/jacqueline-lam/bolderer_sinatra_app",
    demo_video: "http://drive.google.com/file/d/1GlKuRM7RIYx4CLuGKLJ_fp43F8y29nrF/view?usp=sharing",
    stacks: ['ActiveRecord', 'Bootstrap', 'BCrypt', 'CRUD', 'HTML & CSS', 'MVC', 'RESTful API', 'Ruby', 'Sinatra', 'SQLite3']
  },
  # Project 3
  {
    name: "Ruby on Rails Bouldering Tracker (Improved Domain)",
    description: "The bolderer web application is an improved version of the Sinatra Bolderer project. Users can now  browse problems set in the indoor climbing gym by different filters, keep track of their sends, and check out other climbers who have sent the same problems. User authentication is also improved with more user validation and 3rd party authentication system.",
    image_url: "http://drive.google.com/file/d/13uMA34M2ChZVLgmy-c2CRdzqZN7d7gIg/view?usp=sharing",
    github_url: "http://github.com/jacqueline-lam/rails-bolderer-app",
    demo_video: "http://drive.google.com/file/d/1tSOdYo51wKh6nx6Vg7YiWOxRaRKmlDzB/view?usp=sharing",
    stacks: ['ActiveRecord', 'Bootstrap', 'BCrypt', 'CRUD', 'HTML & CSS', 'MVC', 'Omniauth', 'RESTful API', 'Ruby', 'Ruby on Rails', 'SQLite3']
  },

  # Project 4
  {
    name: "Re-thinking a Recipe Manager During COVID Lockdown",
    description: "Umami Pantry is a single page application that shows matching recipes for selected pantry ingredients. It is designed to encourage freestyle homecooking with easy-to-substitute ingredients.

    The app is composed of backend rails API and front-end modular JS clients, which use asynchronous Javascript to make HTTP requests to the API to get/ post data and render them to the user interface.",
    image_url: "http://drive.google.com/file/d/1YgYPEPUDikTL9hAitaLERqQPkB7IKF7E/view?usp=sharing",
    github_url: "http://github.com/jacqueline-lam/umami-pantry",
    demo_video: "http://drive.google.com/file/d/1P-kd38Q4OGIlEyix6Wuk1JdTDAp3pAuW/view?usp=sharing",
    stacks: ['ActiveRecord', 'Bootstrap', 'CRUD', 'Fetch API', 'HTML & CSS', 'JavaScript', 'PostgreSQL', 'RESTful API', 'Ruby', 'Ruby on Rails']
  }
]

puts "Creating projects..."

project_data.each do |data|
  project = Project.create(
    name: data[:name],
    description: data[:description],
    image_url: data[:image_url],
    github_url: data[:github_url],
    site_url: data[:site_url],
    blog_url: data[:blog_url],
    demo_vid: data[:demo_vid]
  )

  stack_names = data[:stacks]
  puts "Adding #{stack_names} styles to project - #{project.name}..."
  # retutn array of stacks instances for each project
  stacks_with_these_names = stack_names.map { |name| Stack.find_by(name: name) }

  # Create ProjectStack to make the many-to-many relation
  stacks_with_these_names.each do |stack|
    ps = ProjectStack.new
    ps.project_id = project.id
    ps.stack_id = stack.id
    ps.save!
  end

  # Create Comment
  puts "Adding comments for project - #{project.name}..."
  comment_data = data[:comments]
  unless comment_data.nil?
    c = Comment.new
    c.project_id = project.id
    comment_data.each do |key, value|
      c[key] = value
      # c.email = comment[:email]
      # c.content = comment[:content]
    end
    c.save!
  end
end

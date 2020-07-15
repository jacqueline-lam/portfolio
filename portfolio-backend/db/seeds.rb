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
  "Object Oriented Design",
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
    name: "Personal Website V.1",
    description: "Before taking the Flatiron School Software Engineering Bootcamp, I designed a personal website to showcase my education, experience and achievements.",
    reason: 'I wanted to practice the skills that I learned in my Web Applications and Programming minor at NYU, so I designed a simple personal responsive website for myself.',
    features: '<li>Responsive web design</li><li>Use of bootsrap cards, navbar, cards and carousel</li>',
    image_url: "personal-website-v1.png",
    site_url: "https://jacquelinelam.neocities.org/",
    stacks: ['HTML & CSS', 'Bootstrap'],
  },
  # Project #2
  {
    name: "CLI Data Gem for Indecisive Shoppers",
    description: "I designed a CLI app that scraped data from the web page Outdoor Gear Lab. It provides shoppers with concise information about a type of product and gives them the option to inquire about the products based on chosen features/ rating catgories!",
    reason: "I loved to do research before I purchase any clothing, and I wanted to design a CLI that could help different users make the purchase decision more easily and efficiently, by querying about the desired specifications such as comfort and durability.",
    features: '<li>Use Open-URI and Nokogiri to scrape data from third party website</li><li>Command Line Interface to accept user input</li><li>User can make shopping decisions more easily by getting detailed and tailormade information through queries such as "list jackets by specific rating category</li>',
    image_url: "cli_project_spread.jpg",
    github_url: "http://github.com/jacqueline-lam/rain_jackets",
    site_url: "http://rubygems.org/gems/rain_jackets",
    blog_url: "http://dev.to/jacquelinelam/building-my-first-project-cli-data-gem-50m4",
    demo_vid: "https://www.youtube.com/embed/RLkE5QlbYXo",
    stacks: ['Ruby', 'Nokogiri', 'Object Oriented Design'],
    comments: {
      author: "Nick Lam",
      email: "nick@gmail.com",
      content: "Great job on scraping some product data and breaking down the data for making further specific queriries. This can be expanded into a great e-commerce backend project if you can scrape data for other products as well!"
    }
  },

  # Project 3
  {
    name: "Sinatra-based Bouldering Log App",
    description: "Bolderer is a Sinatra-powered web application that I created for aspiring boulderers. Climbers can keep track of the problems that they have climbed and check out other users' climbing progress as well.",
    reason: "Some climbing friends discussed the desire to track their climbing progress digitally so that they could record problems that they have tried or completed. We thought it would be cool to create a content management system for indoor climbing problems where users could log their problems and browse problems saved by other users.",
    features: "<li>Sign Up Page: User validation - the user cannot sign up if the username already exists</li><li>Login Page: User authentication</li><li>All Problems - Users can view other climbers' logs</li><li>User Profile: User can create, edit and delete their own problem logs</li><li>Form Data Validation: a date, color and problem style must be selected</li>",
    image_url: "bolderer-sinatra-app_homepage.png",
    github_url: "http://github.com/jacqueline-lam/bolderer_sinatra_app",
    blog_url: "http://dev.to/jacquelinelam/sinatra-web-app-mvc-sessions-and-routes-52on",
    demo_vid: "https://www.youtube.com/embed/5xP86-lEm28",
    stacks: ['ActiveRecord', 'Bootstrap', 'BCrypt', 'CRUD', 'HTML & CSS', 'MVC', 'RESTful API', 'Ruby', 'Sinatra', 'SQLite3']
  },
  # Project 4
  {
    name: "Ruby on Rails Bouldering Tracker (Improved Domain)",
    description: "The Bolderer web application is an improved version of the Sinatra Bolderer project. Users are now able to browse problems in the bouldering gym by different filters, keep track of their sends, and check out other climbers who have sent the same problems. User authentication is also improved with more user validation and a 3rd party authentication system.",
    reason: "I really enjoyed working on the Bolderer domain and wanted to add more features to the app. Specifically, I wanted users to be able to filter problems by date and difficulty. Also, I wanted to promote the sense of community by allowing users to check if other climbers have 'sent'(finished) a problem that they have also sent, and to compete for different Leaderboard positions.",
    features: '<li>Login Page: Authentication system oAuth2 allows login from GitHub</li><li>User Sends: User can sort their sends by difficulty, date and color</li><li>User Sends: User can create a log by choosing an existing problem or creating a new problem</li><li>All Problems: User can browse problems and see which users have sent a specific problem and read their log</li><li>Validation Errors: Alert messages describing the validation failures will pop up if invalid form inputs or invalid URLs are entered</li>',
    image_url: "rails-bolderer-app_all-jackies-sends.png",
    github_url: "http://github.com/jacqueline-lam/rails-bolderer-app",
    blog_url: "http://dev.to/jacquelinelam/ruby-on-rails-app-domain-with-many-to-many-relationships-3f5i",
    demo_vid: "https://www.youtube.com/embed/gKyGpzi5n5w",
    stacks: ['ActiveRecord', 'Bootstrap', 'BCrypt', 'CRUD', 'HTML & CSS', 'MVC', 'Object Oriented Design', 'Omniauth', 'RESTful API', 'Ruby', 'Ruby on Rails', 'SQLite3']
  },

  # Project 5
  {
    name: "Re-thinking a Recipe Manager During COVID Lockdown",
    description: "Umami Pantry is a single page application that shows matching recipes for selected pantry ingredients. It is designed to encourage freestyle home-cooking with easy-to-substitute ingredients.

    The app is composed of backend rails API and front-end modular JS clients, which use asynchronous Javascript to make HTTP requests to the API to get/ post data and render them to the user interface.",
    reason: "Amidst the COVID lockdown in NYC, frequent grocery visits were discouraged and I wanted to encourage everyone to use pantry/ limited ingredients to cook delicious home-cooked meals. Therefore, I designed this app in which users could browse recipes for selected ingredients.",
    features: "<li>Single Page App: Users will not have to travel across different URL links</li><li>Pick Ingredients: Users can select ingredients by clicking the ingredient icons available</li><li>Matching Recipes: recipe results will automatically show up as users select ingredients</li><li>Recipe Card: Displays the recipe name, category, and ingredients</li><li>Selected Recipe: User can read the instructions, ingredient list and choose to add any substitute ingredients</li>",
    image_url: "umami-pantry.gif",
    github_url: "http://github.com/jacqueline-lam/umami-pantry",
    blog_url: "http://dev.to/jacquelinelam/building-a-single-page-cooking-app-for-covid-19-lockdown-28ke",
    demo_vid: "https://www.youtube.com/embed/xL5mj8t-rMM",
    stacks: ['ActiveRecord', 'Bootstrap', 'CRUD', 'Fetch API', 'HTML & CSS', 'JavaScript', 'PostgreSQL', 'RESTful API', 'Ruby', 'Ruby on Rails'],
    comments: {
      author: "Jess .T",
      email: "jess.t@gmail.com",
      content: "Searching recipes for pantry ingredients is an excellent idea and I love the design of the site 😍 Can't wait to see more recipes!"
    }
  }
]

puts "Creating projects..."

project_data.each do |data|
  project = Project.create(
    name: data[:name],
    description: data[:description],
    reason: data[:reason],
    features: data[:features],
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

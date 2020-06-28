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
ProblemStack.destroy_all

stacks = [
  "SQLite3",
  "PostgreSQL",
  "React.JS",
  "Ruby on Rails",
  "Ruby"
  "HTML & CSS",
  "Bootstrap"
  "Javascript",
  "Fetch API",
  "React Router",
  "Redux",
  "Redux Thunk",
  "Nokogiri"
]

puts "Creating stacks..."
stacks.each do |stack|
  Stack.create(name: stack)
end

project_data = [
  # Project #1
  {
    name: "CLI Data Gem for Indecisive Shoppers",
    description: "I designed a CLI app that scraoed data from the web page Outdoor Gear Lab, and provided shoppers with concise information about a type of product and gave them the option to inquire about the best products based on chosen features/ rating catgories!",
    image_url: "http://drive.google.com/file/d/1WwtgDcBwrXa-tJ1pXbyBwBBkClDNdvst/view?usp=sharing",
    github_url: "http://github.com/jacqueline-lam/rain_jackets",
    site_url: "https://rubygems.org/gems/rain_jackets",
    demo_video: "https://drive.google.com/file/d/1UvR5-3OvvOv34_mZFd87xY5ypTTC_ics/view?usp=sharing",
    stacks: ['Ruby', 'Nokogiri'],
    comments: {author: ''},
  }
  # Project 2
  {}
]

puts "Creating projects..."

project_data.each do |data|
  project = Project.new(
    name: data[:name]
    description: data[:description]
    image_url: data[:image_url]
    github_url: data[:github_url]
    site_url: data[:site_url]
    blog_url: data[:blog_url]
    demo_vid: data[:demo_vid]
  )


  stack_names = data[:stacks]
  puts "Adding #{stack_names} styles to problem #{project.id}..."
  # retutn array of stacks instances for each project
  stacks_with_these_names = tack_names.map { |name| Stack.find_by(name: name) }

  # Create ProjectStack to make the many-to-many relation
  stacks_with_these_names.each do |stack|
    ps = ProjectStack.new
    ps.project_id = project.id
    ps.stack_id = stack.id
    ps.save!
  end
end



recipe_data.each do |recipe_item|
  # Initialize new recipe object
  recipe = Recipe.new(
    name: recipe_item[:name],
    category: recipe_item[:category],
    directions: recipe_item[:directions],
    image_url: recipe_item[:image_url],
    servings: recipe_item[:servings],
    time: recipe_item[:time],
  )
  save_queue << recipe

  # Initialize the RecipeIngredient join table objects
  recipe_item[:ingredients].each do |ingredient_data|
    ri = RecipeIngredient.new(
      recipe: recipe,
      ingredient: ingredient_data[:item],
      amount: ingredient_data[:amount],
      preparation_method: ingredient_data[:preparation_method],
      substituted_ingredient_id: ingredient_data[:substituted_ingredient_id]
    )
    save_queue << ri
  end
end
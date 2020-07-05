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
    image_url: "https://lh3.googleusercontent.com/8tOpxe0Vl9HmVq7xR3eF88f959FvMqEIHpzLI3ANXHCZ63_8JIefE8rCyfYxdR93AIa-QfxlX-Q2hfpLZ27dz5Ub61swLUoY2l7FFnyuAwwk2pAJtAaEDifPnuwJuQn7AkefSAZhp_BOLQo30b2WOorm-Bup6K0d4wmWBM2C2xrtIMkH2qRJ9jbznNp9R2GZ5abRlXkyCcTN6WqgaMb2xmGYULYTyF4P24Qit5ETlXcMYAZsMqxSYTBTlYtwdOYocxIWrAe7LwtDCcPbbh8bDB10dPFy_FbNR0ekLdNNYnwLBhaJGuR1qE13g-12Irhsomi0vyXxVTK7lOzDSqnLYyERmtDOnm_HeTJFeuZbyPa_Bc81JjLsM_Q_Lgkr1D2Sqqq3sFcF1J2JArNqhEhH5sAHxEI0mMBQRGxj2Z3T96GJEaiREje3ifGE3wA8Nie5m5s3C8Sg0O1C_FOO24sRjMY9Mmd6FJVWU0LobREXBjYPPxEffa3hszRMeEyEXimfHa7UTR2UG6n5tXkph38G_z9G_0s6joNnOh3mHHnK5R2Sx68PItQSSuyyZmSEIm_IQgbjUx_F9gh3LQOn6MAMOQGbdoKinUj8gu_j8HIZPfeUpFeIJhSo4xet6xThUTPAQ0ToVc-_Z6c0UQCqBxn0SGowH2tP7WIBlC4Bnjickzez1BimhXsN9A=w1280-h720-no?authuser=0",
    github_url: "http://github.com/jacqueline-lam/rain_jackets",
    site_url: "http://rubygems.org/gems/rain_jackets",
    blog_url: "http://dev.to/jacquelinelam/building-my-first-project-cli-data-gem-50m4",
    demo_vid: "https://www.youtube.com/embed/RLkE5QlbYXo",
    stacks: ['Ruby', 'Nokogiri'],
    comments: {
      author: "Nick Lam",
      email: "nick@gmail.com",
      content: "Great job on scraping some product data and breaking down the data for making further specific queriries. This can be expanded into a great e-commerce backend project if you can scrape data for other products as well!"
    }
  },

  # Project 2
  {
    name: "Sinatra-based Bouldering Log App",
    description: "Bolderer is a Sinatra-powered web application that I created for aspiring boulderers. Climbers can keep track of the problems that they have climbed and check out other users' climbing progress as well.",
    image_url: "https://lh3.googleusercontent.com/nW2_cdMXFfiPTL0yT-hdLEJqHj21g1rOnw4g_dWcEIF_gWCD4U743hBGEuKWIokmYZq66-C9gSRiEEtWJf0_Q8ZXpnqBvkIu-cPzKHja0kij6aJ10Ga38uN3N4Xvx3E5dCmWuLYcT9qEyQK2MQX-qQJPlNKG_NaklUUNi4uhVqYLoP24H4jKkiwO_9wJU2taE7pJep2BvpR3nncXzXbxjBPUBkuiYffyBGCo6dEnaq-5bJswWwvgOwUlLCILr4AIWMsZKhdltNtKd8LV-tHtNGsjq8lgDR3qISU7S3YIwUuShEYr085FiLYYDJHFwWq1Gzk6OmEnEFHXv8yIAgPfJsQaLy0MiSKuz8fsk8ltUNgq0IfTo58pWkBC18_qsC6F30eLBK_D-U8iuXZny82Pzec8ul7T9Hk3tLXrUn84DbBnP85S0TQLwOD1D8wC_7ES6Y3kUbpU0X9SyUvo6XLBVhSzzg-l-9Hr8PzVAkrKDrOihSbaZswb6aCTl7zU7SgMcrLnd0a8wuFJalwfRUwl3noa90BYfmK06p_JijpNvXcH3NzLd1BORW-8TiTfkeM7QfPaqW-_hNEuG1357-OZ9MZ4QqZ45Rk4rBy4JdKgf4-5zH3KcrPHejVxMHgl9sJdj-HleZJz8rf9vRoLFM7QZ0ETNjESEv_SF1v6TaKfwUyrOQI4tzYfCQ=w431-h256-no?authuser=0",
    github_url: "http://github.com/jacqueline-lam/bolderer_sinatra_app",
    blog_url: "http://dev.to/jacquelinelam/sinatra-web-app-mvc-sessions-and-routes-52on",
    demo_vid: "https://www.youtube.com/embed/5xP86-lEm28",
    stacks: ['ActiveRecord', 'Bootstrap', 'BCrypt', 'CRUD', 'HTML & CSS', 'MVC', 'RESTful API', 'Ruby', 'Sinatra', 'SQLite3']
  },
  # Project 3
  {
    name: "Ruby on Rails Bouldering Tracker (Improved Domain)",
    description: "The bolderer web application is an improved version of the Sinatra Bolderer project. Users can now  browse problems set in the indoor climbing gym by different filters, keep track of their sends, and check out other climbers who have sent the same problems. User authentication is also improved with more user validation and 3rd party authentication system.",
    image_url: "https://lh3.googleusercontent.com/ZJj2-sMNGVeALHxF-8131mvsNOq_MIwdKeyK11Ak7OnMAWCinkpYDA0G2NX2X814v0_cqfKJ-_vneAM_-zLRC5xhy2J5rCPMk0I9tvaJGHQkh-_3WyvxlZb8fDUgpj5oH99zCyyGlcQ4WZaDG2Q50ChTge5wjCJoDP_IA-KcJgisHYD7q9QicOEFq1WqWswZgdc9fuaCiuoEtY1g4sjqrI3eDaDDebU_F9aAysS7Wbb7SShvUxiDUV7T-ckzkS3Q-99cWQVTbiL2i33_yOCnXiRRAglpBv5duaWZP3hPrjO6bWZzV6yee00ppzfM8Lg8W7NAx1l6XcZz3pvdZAqMHUcCpE2-UBgX_K62a9fNOAvYqzX8KMYPJu2mnXz5P2dWAH0WIm4y7AHSQvtRPKHShTKbtStNRaJgfGnUTjRgH6JrGyZnL62pIeDX-9KVQldJLBaPuj98tmufkXLYWvs5wX2QgSQqDaPUXkTHvhc4Esr0ugVzmPTEfw_k4YtroSEvOc0v_TDJynrDcW0w_ZRrvhhNHLbOxBVJvHSeN3B2nReq5rGMNT6p_Xr8RL1gs1A_1PE7lElK3-blMB-bJOA3h4FObXVBWT_DVCyzGO0Z1mYojdPVng-2QICO-U8870qjh-2lc-0OLzW0DlcgGqhobK4voyKg-hIpIq18E5HWRxH9OZ-xuqCdaw=w2072-h1312-no?authuser=0",
    github_url: "http://github.com/jacqueline-lam/rails-bolderer-app",
    blog_url: "http://dev.to/jacquelinelam/ruby-on-rails-app-domain-with-many-to-many-relationships-3f5i",
    demo_vid: "https://www.youtube.com/embed/gKyGpzi5n5w",
    stacks: ['ActiveRecord', 'Bootstrap', 'BCrypt', 'CRUD', 'HTML & CSS', 'MVC', 'Omniauth', 'RESTful API', 'Ruby', 'Ruby on Rails', 'SQLite3']
  },

  # Project 4
  {
    name: "Re-thinking a Recipe Manager During COVID Lockdown",
    description: "Umami Pantry is a single page application that shows matching recipes for selected pantry ingredients. It is designed to encourage freestyle homecooking with easy-to-substitute ingredients.

    The app is composed of backend rails API and front-end modular JS clients, which use asynchronous Javascript to make HTTP requests to the API to get/ post data and render them to the user interface.",
    image_url: "https://lh3.googleusercontent.com/tT4gD3Xolx6wVVgt6WCsuHjN8oQcT1z4ChE4JYBPOop3onPchVWWhvfLGHOr8QHhyTvG4T-L1-6Hk1fMK8nAWOQwb6PS-6rTDancTIi2Ya2ypeFmfVjMktXmejpelifZT9Gz9zg6Eawq5voayS545HIO99Otm4aA9UEdypHUl9JQ3EqX291lMzsYqMO2pT_CCqzYPD-OA002qy9X5RqrWroEUGG9-SQKOh-SVL89rfHh96Lz_rj7gMUaXT2Bns-DEJFcaTzIz8MD-Uykmcxjl1U-NsolvsZ6SOZW940ohnV-Vmfhgy4I7a0wuc_uCSBlWVU-QpOnX0cvTfB2egxdlHt9mJv1Xe0u6pmd12XKcUkMCWzMtzDiQH0fKb8dP6C8NzLSg9zKsQfTl_wxrScGzypHRZ7KvfMfyPhAG3o-1HcPee8R234uxA1owbjkagIwzu0idp9RSyKyAbxudJD_BWriJ6oyDEDPG4ns1SsrN-Wh4daUR-LbikgRLyi6cQ0hJvktZY3zjwbmVZ4XPJunPFB-7qwNz5Cs5j9K2CJ9G3_43_FBwQdv3Nq0iqsZj4cuyjRJ8rv2cODQxSfAJzSfwWoSPMCyvR7Moz4K81hloGaINA1pM_h9CbxmFEouMSQjCeHAOu3wBGn8vxzNENtQtaJl65bxqGsyuXnHszlMhGxVcsBm0mxnGg=w2072-h1554-no?authuser=0",
    github_url: "http://github.com/jacqueline-lam/umami-pantry",
    blog_url: "http://dev.to/jacquelinelam/building-a-single-page-cooking-app-for-covid-19-lockdown-28ke",
    demo_vid: "https://www.youtube.com/embed/xL5mj8t-rMM",
    stacks: ['ActiveRecord', 'Bootstrap', 'CRUD', 'Fetch API', 'HTML & CSS', 'JavaScript', 'PostgreSQL', 'RESTful API', 'Ruby', 'Ruby on Rails'],
    comments: {
      author: "Jess .T",
      email: "jess.t@gmail.com",
      content: "Searching recipes for pantry ingredients is an execellent idea and I love the design of the site 😍 Can't wait to see more recipes!"
    }
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

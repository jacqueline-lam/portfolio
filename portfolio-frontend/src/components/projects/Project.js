import React from 'react';

const Project = ({ project }) => {
  const projectStacks = project.stacks.map(stack => stack.name).join(' | ');
  return (
    <div>
      <h1>{project.name}</h1>
      <img className='project-thumbnail' alt='project thumbnail' src={project.image_url} />
      <i>{projectStacks}</i>
      <p>{project.description}</p>

      <button onClick={this.}>Source Code</button>
      <button onClick={}>Blog Post</button>
      <button onClick={}>Blog</button>
      {/* <CommentsContainer comments={project.comments} /> */}
    </div >
  )
}
export default Project

name: "CLI Data Gem for Indecisive Shoppers",
  description: "I designed a CLI app that scraped data from the web page Outdoor Gear Lab. It provides shoppers with concise information about a type of product and gives them the option to inquire about the products based on chosen features/ rating catgories!",
    image_url: "https://lh3.googleusercontent.com/8tOpxe0Vl9HmVq7xR3eF88f959FvMqEIHpzLI3ANXHCZ63_8JIefE8rCyfYxdR93AIa-QfxlX-Q2hfpLZ27dz5Ub61swLUoY2l7FFnyuAwwk2pAJtAaEDifPnuwJuQn7AkefSAZhp_BOLQo30b2WOorm-Bup6K0d4wmWBM2C2xrtIMkH2qRJ9jbznNp9R2GZ5abRlXkyCcTN6WqgaMb2xmGYULYTyF4P24Qit5ETlXcMYAZsMqxSYTBTlYtwdOYocxIWrAe7LwtDCcPbbh8bDB10dPFy_FbNR0ekLdNNYnwLBhaJGuR1qE13g-12Irhsomi0vyXxVTK7lOzDSqnLYyERmtDOnm_HeTJFeuZbyPa_Bc81JjLsM_Q_Lgkr1D2Sqqq3sFcF1J2JArNqhEhH5sAHxEI0mMBQRGxj2Z3T96GJEaiREje3ifGE3wA8Nie5m5s3C8Sg0O1C_FOO24sRjMY9Mmd6FJVWU0LobREXBjYPPxEffa3hszRMeEyEXimfHa7UTR2UG6n5tXkph38G_z9G_0s6joNnOh3mHHnK5R2Sx68PItQSSuyyZmSEIm_IQgbjUx_F9gh3LQOn6MAMOQGbdoKinUj8gu_j8HIZPfeUpFeIJhSo4xet6xThUTPAQ0ToVc-_Z6c0UQCqBxn0SGowH2tP7WIBlC4Bnjickzez1BimhXsN9A=w1280-h720-no?authuser=0",
      github_url: "http://github.com/jacqueline-lam/rain_jackets",
        site_url: "http://rubygems.org/gems/rain_jackets",
          blog_url: "http://dev.to/jacquelinelam/building-my-first-project-cli-data-gem-50m4",
            demo_vid: "http://drive.google.com/file/d/1UvR5-3OvvOv34_mZFd87xY5ypTTC_ics/view?usp=sharing",
              stacks: ['Ruby', 'Nokogiri'],
                comments: {
  author: "Nick Lam",
    email: "nick@gmail.com",
      content: "Great job on scraping some product data and breaking down the data for making further specific queriries. This can be expanded into a great e-commerce backend project if you can scrape data for other products as well!"
}
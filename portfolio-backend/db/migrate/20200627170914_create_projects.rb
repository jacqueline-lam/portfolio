class CreateProjects < ActiveRecord::Migration[6.0]
  def change
    create_table :projects do |t|
      t.string :name
      t.mediumtext :description
      t.string :github_url
      t.string :site_url
      t.string :demo_vid

      t.timestamps
    end
  end
end

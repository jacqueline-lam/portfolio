class CreateComments < ActiveRecord::Migration[6.0]
  def change
    create_table :comments do |t|
      t.integer :project_id
      t.string :author
      t.string :email
      t.text :content

      t.timestamps
    end
  end
end

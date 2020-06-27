class CreateProjectStacks < ActiveRecord::Migration[6.0]
  def change
    create_table :project_stacks do |t|
      t.integer :project_id
      t.integer :stack_id

      t.timestamps
    end
  end
end

class AddReasonAndFeaturesToProjects < ActiveRecord::Migration[6.0]
  def change
    add_column :projects, :reason, :text
    add_column :projects, :features, :text
  end
end

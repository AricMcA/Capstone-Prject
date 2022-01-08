class CreateConsoles < ActiveRecord::Migration[6.1]
  def change
    create_table :consoles do |t|
      t.string :model
      t.integer :year
      t.integer :storage

      t.timestamps
    end
  end
end

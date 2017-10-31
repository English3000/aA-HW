class CreateToys < ActiveRecord::Migration[5.1]
  def change
    create_table :toys do |t|
      t.string :name, null: false
      t.integer :toyable_id, null: false
      t.string :toyable_type, null: false
    end
    add_index :toys, [:name, :toyable_id, :toyable_type], unique: true
  end
end
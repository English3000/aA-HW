class People < ActiveRecord::Migration[5.1]
  def change
    create_table :people do |table|
      table.string :name, null: false
      table.integer :house_id, null: false
      table.timestamps
    end
  end
end

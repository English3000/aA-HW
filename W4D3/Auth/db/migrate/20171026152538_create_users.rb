class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :username, null: false, unique: true
      t.string :password_digest, null: false, unique: true #didn't validate uniqueness
      t.string :session_token, null: false, unique: true

      t.timestamps
    end

    add_index :users, :session_token
    add_index :users, :password_digest #didn't index
    add_index :users, :username
  end
end

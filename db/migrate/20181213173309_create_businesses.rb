class CreateBusinesses < ActiveRecord::Migration[5.2]
  def change
    create_table :businesses do |t|
      t.string :name, null: false
      t.float :long, null: false
      t.float :lat, null: false
      t.string :address, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.string :zip, null: false
      t.integer :owner_id
      t.string :price, null: false
      t.string :phone_number
      t.string :hours

      t.timestamps
    end

    add_index :businesses, :name, unique: true
  end
end

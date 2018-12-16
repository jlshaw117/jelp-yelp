class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :user_id, null: false
      t.integer :business_id, null: false
      t.integer :rating, null: false
      t.text :body, null: false

      t.timestamps
    end
    add_index :reviews, [:user_id, :business_id], unique: true
  end
end

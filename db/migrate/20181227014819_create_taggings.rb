class CreateTaggings < ActiveRecord::Migration[5.2]
  def change
    create_table :taggings do |t|
      t.integer :tag_id, null: false
      t.integer :business_id, null: false

      t.timestamps
    end
    add_index :taggings, [:tag_id, :business_id], unique: true
  end
end

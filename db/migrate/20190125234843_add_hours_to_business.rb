class AddHoursToBusiness < ActiveRecord::Migration[5.2]
  def change
    add_column :businesses, :hours, :text, array:true, default: []
  end
end

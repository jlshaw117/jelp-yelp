json.extract! business, :id, :name, :long, :lat, :address, :city, :state, :zip, :owner_id, :price, :phone_number, :hours, :average_rating
json.images business.images.map { |image| url_for(image)}
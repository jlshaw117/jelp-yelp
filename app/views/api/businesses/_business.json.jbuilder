json.extract! business, :id, :name, :long, :lat, :address, :city, :state, :zip, :owner_id, :price, :phone_number, :hours, :average_rating
json.photo url_for(business.photo)
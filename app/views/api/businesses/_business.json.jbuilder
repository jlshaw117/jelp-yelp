json.extract! business, :id, :name, :long, :lat, :address, :city, :state, :zip, :owner_id, :price, :phone_number, :hours
json.photo url_for(business.photo)
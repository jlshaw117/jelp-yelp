json.extract! user, :id, :email, :f_name, :l_name
json.photo url_for(user.photo)
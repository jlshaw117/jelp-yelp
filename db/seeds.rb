# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
ActiveRecord::Base.transaction do
  User.destroy_all
  Business.destroy_all
  Review.destroy_all

  user = User.create!(email: 'demo1@gmail.com', password: 'password', f_name: 'Demo', l_name: 'User')
  user.photo.attach(io: File.open("./app/assets/images/dog.png"), filename:"dog.png")
  user = User.create!(email: 'demo2@gmail.com', password: 'password', f_name: 'Demo', l_name: 'User')
  user.photo.attach(io: File.open("./app/assets/images/dog.png"), filename:"dog.png")
  user = User.create!(email: 'demo3@gmail.com', password: 'password', f_name: 'Demo', l_name: 'User')
  user.photo.attach(io: File.open("./app/assets/images/dog.png"), filename:"dog.png")
  user = User.create!(email: 'demo4@gmail.com', password: 'password', f_name: 'Demo', l_name: 'User')
  user.photo.attach(io: File.open("./app/assets/images/dog.png"), filename:"dog.png")
  user = User.create!(email: 'demo5@gmail.com', password: 'password', f_name: 'Demo', l_name: 'User')
  user.photo.attach(io: File.open("./app/assets/images/dog.png"), filename:"dog.png")
  user = User.create!(email: 'demo6@gmail.com', password: 'password', f_name: 'Demo', l_name: 'User')
  user.photo.attach(io: File.open("./app/assets/images/dog.png"), filename:"dog.png")
  user = User.create!(email: 'demo7@gmail.com', password: 'password', f_name: 'Demo', l_name: 'User')
  user.photo.attach(io: File.open("./app/assets/images/dog.png"), filename:"dog.png")
  user = User.create!(email: 'demo8@gmail.com', password: 'password', f_name: 'Demo', l_name: 'User')
  user.photo.attach(io: File.open("./app/assets/images/dog.png"), filename:"dog.png")
  user = User.create!(email: 'demo9@gmail.com', password: 'password', f_name: 'Demo', l_name: 'User')
  user.photo.attach(io: File.open("./app/assets/images/dog.png"), filename:"dog.png")
  user = User.create!(email: 'demo10@gmail.com', password: 'password', f_name: 'Demo', l_name: 'User')
  user.photo.attach(io: File.open("./app/assets/images/dog.png"), filename:"dog.png")
  User.create!(email: 'batman@gmail.com', password: 'password', f_name: 'Bruce', l_name: 'Wayne')
  User.create!(email: 'samp@gmail.com', password: 'password', f_name: 'Samantha', l_name: 'Parks')
  User.create!(email: 'west@gmail.com', password: 'password', f_name: 'Wesly', l_name: 'Thompson')
  User.create!(email: 'sams@gmail.com', password: 'password', f_name: 'Sam', l_name: 'Sampson')
  User.create!(email: 'maverick@gmail.com', password: 'password', f_name: 'Pete', l_name: 'Mitchell')
  User.create!(email: 'goose@gmail.com', password: 'password', f_name: 'Nick', l_name: 'Bradshaw')
  
  # User.create!(email: '', password: 'password', f_name: '', l_name: '')

  batman = User.find_by(email: 'batman@gmail.com')
  samp = User.find_by(email: 'samp@gmail.com')
  west = User.find_by(email: 'west@gmail.com')
  sams = User.find_by(email: 'sams@gmail.com')
  maverick = User.find_by(email: 'maverick@gmail.com')
  goose = User.find_by(email: 'goose@gmail.com')

  batman.photo.attach(io: File.open("./app/assets/images/batman_profile_pic.jpeg"), filename:"batman_profile_pic.jpg")
  samp.photo.attach(io: File.open("./app/assets/images/samp_profile_pic.jpeg"), filename:"samp_profile_pic.jpg")
  west.photo.attach(io: File.open("./app/assets/images/west_profile_pic.jpeg"), filename:"west_profile_pic.jpg")
  sams.photo.attach(io: File.open("./app/assets/images/sams_profile_pic.jpg"), filename:"sams_profile_pic.jpg")
  maverick.photo.attach(io: File.open("./app/assets/images/maverick_profile_pic.jpg"), filename:"maverick_profile_pic.jpg")
  goose.photo.attach(io: File.open("./app/assets/images/goose_profile_pic.jpg"), filename:"goose_profile_pic.jpg")

  Business.create(name: 'Fog Harbor Fish House', lat: 37.809271, long: -122.410119, address: 'Pier 39', city: 'San Fransisco', state: 'CA', zip: '94133', price: '$$', phone_number: '(415) 632-7593')
  Business.create(name: 'Liholiho Yacht Club', lat: 37.788291, long: -122.414695, address: '871 Sutter St', city: 'San Fransisco', state: 'CA', zip: '94109', price: '$$$', phone_number: '(415) 845-6384')

  fog_harbor = Business.find_by(name: 'Fog Harbor Fish House')
  yacht_club = Business.find_by(name: 'Liholiho Yacht Club')

  yacht_club.images.attach(io: File.open("./app/assets/images/yacht_club_0.jpg"), filename:"yacht_club_0.jpg")
  yacht_club.images.attach(io: File.open("./app/assets/images/yacht_club_1.jpg"), filename:"yacht_club_1.jpg")
  yacht_club.images.attach(io: File.open("./app/assets/images/yacht_club_2.jpg"), filename:"yacht_club_2.jpg")
  yacht_club.images.attach(io: File.open("./app/assets/images/yacht_club_3.jpg"), filename:"yacht_club_3.jpg")

  fog_harbor.images.attach(io: File.open("./app/assets/images/fog_harbor_0.jpg"), filename:"fog_harbor_0.jpg")
  fog_harbor.images.attach(io: File.open("./app/assets/images/fog_harbor_1.jpg"), filename:"fog_harbor_1.jpg")
  fog_harbor.images.attach(io: File.open("./app/assets/images/fog_harbor_2.jpg"), filename:"fog_harbor_2.jpg")
  fog_harbor.images.attach(io: File.open("./app/assets/images/fog_harbor_3.jpg"), filename:"fog_harbor_3.jpg")


  Review.create!(user_id: west.id, business_id: fog_harbor.id, rating: 3, body: 'Came here for dinner last night.  Its right on pier 39 overlooking the marina.  Seevice was good.  Our waitress was nice and attentive.  Ambience was inviting.  Food though was sub par, especially for the price.  The seafood was so so.')
  Review.create!(user_id: batman.id, business_id: fog_harbor.id, rating: 5, body: 'Great view of the sunset from the dining room.  Dinner started with fresh sourdough bread.  They buy the dough from Boudin and bake a batch hourly.  The outside is crispy while the inside is fluffy.  There was a strong sour flavor.  I ordered the mixed grill plate.  French fries were crunchy and had a nice potato flavor.  Shrimp were plump, juicy, with a strong bay seasoning flavor.  I liked the shrimp.  Cod was grilled with a slightly spicier seasoning.  I liked this dish but the mild flavor and the cod was hidden by the seasoning.  Salmon was grilled with a seasoning that had a sweet component.  I loved the interplay between the savory salmon and the sweet flavor from the dry rub.
  ')
  Review.create!(user_id: maverick.id, business_id: fog_harbor.id, rating: 5, body: 'I had dinner here for the first time and it was exceptionally scrumptious. I had been here for lunch prior to this visit but wow their dinner had nothing on their brunch. Best in pier 39 ever! Did not disappoint at all! I am so glad I chose to come here over all other restaurants around here.')


  Review.create!(user_id: sams.id, business_id: yacht_club.id, rating: 4, body: 'Finally get a chance to try this place out with a group of friend. Reservation is highly recommended for big party; It is always challenging to get so often you would have to make reservation 2 months in advance. 

The benefit of eating with a big group is you get to try many plates. 
Definitely recommend to others')
  Review.create!(user_id: goose.id, business_id: yacht_club.id, rating: 3, body: 'I\'ve heard more than enough raves and reviews about this place that my expectations were HYPED. UP. But what they say is true - the higher expectations rise, they harder they fall (ish). Not to say that Liholiho was bad or a poor experience, but I found the food just...OK.')
  Review.create!(user_id: maverick.id, business_id: yacht_club.id, rating: 4, body: 'Managed to walk in sans reservation the night before thanksgiving. The bar staff were incredibly  knowledgeable, and the drinks were delicious. I enjoyed every dish we ate - the chicken liver mousse toast was my favourite. Almost gave only 4 stars as the boyfriend didn\'t enjoy the food, but he can write his own review :) 
Probably wouldn\'t queue for this restaurant, or book ages in advance, but would most definitely eat here again.')
end
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
  Tag.destroy_all
  Tagging.destroy_all

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
  User.create!(email: 'jd@gmail.com', password: 'password', f_name: 'Jane', l_name: 'Doe')
  
  # User.create!(email: '', password: 'password', f_name: '', l_name: '')

  batman = User.find_by(email: 'batman@gmail.com')
  samp = User.find_by(email: 'samp@gmail.com')
  west = User.find_by(email: 'west@gmail.com')
  sams = User.find_by(email: 'sams@gmail.com')
  maverick = User.find_by(email: 'maverick@gmail.com')
  goose = User.find_by(email: 'goose@gmail.com')
  jane_doe = User.find_by(email: 'jd@gmail.com')

  batman.photo.attach(io: File.open("./app/assets/images/batman_profile_pic.jpeg"), filename:"batman_profile_pic.jpg")
  samp.photo.attach(io: File.open("./app/assets/images/samp_profile_pic.jpeg"), filename:"samp_profile_pic.jpg")
  west.photo.attach(io: File.open("./app/assets/images/west_profile_pic.jpeg"), filename:"west_profile_pic.jpg")
  sams.photo.attach(io: File.open("./app/assets/images/sams_profile_pic.jpg"), filename:"sams_profile_pic.jpg")
  maverick.photo.attach(io: File.open("./app/assets/images/maverick_profile_pic.jpg"), filename:"maverick_profile_pic.jpg")
  goose.photo.attach(io: File.open("./app/assets/images/goose_profile_pic.jpg"), filename:"goose_profile_pic.jpg")
  jane_doe.photo.attach(io: File.open("./app/assets/images/jane_doe.jpeg"), filename:"jane_doe.jpeg")

  # Restaurants
  Business.create!(name: 'Fog Harbor Fish House', lat: 37.809271, long: -122.410119, address: 'Pier 39', city: 'San Fransisco', state: 'CA', zip: '94133', price: '$$', phone_number: '(415) 632-7593', hours: ['17,23', '17,23', '17,23', '17,23', '17,23', '17,23', '17,23'])
  Business.create!(name: 'Liholiho Yacht Club', lat: 37.788291, long: -122.414695, address: '871 Sutter St', city: 'San Fransisco', state: 'CA', zip: '94109', price: '$$$', phone_number: '(415) 845-6384', hours: ['10,21', '11,21', '11,21', '11,21', '11,21', '11,22', '10,22'])
  Business.create!(name: 'The House', lat: 37.798412, long: -122.407058, address: '1230 Grant AVE', city: 'San Fransisco', state: 'CA', zip: '94133', price: '$$$', phone_number: '(415) 623-8956', hours: ['17,22', '12,22', '12,22', '12,22', '12,22', '12,23', '12,23'])
  Business.create!(name: 'El Farolito', lat: 37.752644, long: -122.418105, address: '2779 Mission St', city: 'San Fransisco', state: 'CA', zip: '94110', price: '$', phone_number: '(415) 902-6381', hours: ['10,24', '10,24', '10,24', '10,24', '10,24', '10,24', '10,24'])
  Business.create!(name: 'The Little Chihuahua', lat: 37.771960, long: -122.436854, address: '292 Divisadero St', city: 'San Fransisco', state: 'CA', zip: '94117', price: '$$', phone_number: '(415) 309-3685', hours: ['10,23', '11,23', '11,23', '11,23', '11,23', '11,23', '10,23'])
  Business.create!(name: 'Bella Trattoria', lat: 37.781390, long: -122.460947, address: '3854 Geary Blvd', city: 'San Fransisco', state: 'CA', zip: '94118', price: '$$', phone_number: '(415) 634-8356', hours: ['11,21', '17,22', '17,22', '11,22', '11,22', '11,23', '12,23'])
  Business.create!(name: 'Beretta', lat: 37.753825, long: -122.420582, address: '1199 Valencia St', city: 'San Fransisco', state: 'CA', zip: '94110', price: '$$', phone_number: '(415) 835-9642', hours: ['10,24', '0,0', '0,0', '0,0', '0,0', '0,0', '10,24'])
  Business.create!(name: 'Delfina', lat: 37.763697, long: -122.424297, address: '3621 18th St', city: 'San Fransisco', state: 'CA', zip: '94110', price: '$$$', phone_number: '(415) 883-6734', hours: ['12,22', '12,22', '17,22', '12,22', '12,22', '12,23', '12,22'])
  # Home
  Business.create!(name: 'Mizen Construction', lat: 37.781620, long: -122.455999, address: '3410 Geary Blvd', city: 'San Fransisco', state: 'CA', zip: '94118', price: '$$$$', phone_number: '(415) 663-2346', hours: ['0,0', '9,17', '9,17', '9,17', '9,17', '9,17', '9,17'])
  Business.create!(name: 'The Urban Builder', lat: 37.781620, long: -122.491953, address: '1258 33rd Ave', city: 'San Fransisco', state: 'CA', zip: '94110', price: '$$$', phone_number: '(415) 867-5309', hours: ['0,0', '9,17', '9,17', '9,17', '9,17', '9,17', '9,17'])
  Business.create!(name: 'Rick Brown Electrical', lat: 37.782081, long: -122.454811, address: '185 Parker Ave', city: 'San Fransisco', state: 'CA', zip: '94118', price: '$$$', phone_number: '(415) 786-3457', hours: ['0,0', '8,16', '8,16', '8,16', '8,16', '8,16', '0,0'])
  Business.create!(name: 'A 24 Electric Co', lat: 37.776470, long: -122.425221, address: '517 Hayes St,', city: 'San Fransisco', state: 'CA', zip: '94102', price: '$$$', phone_number: '(415) 945-2579', hours: ['0,0', '9,17', '9,17', '9,17', '9,17', '9,17', '0,0'])
  Business.create!(name: 'Ideal Landscape', lat: 37.761916, long: -122.423120, address: '600 Guerrero St,', city: 'San Fransisco', state: 'CA', zip: '94110', price: '$$', phone_number: '(415) 134-6452', hours: ['0,0', '7,17', '7,17', '7,17', '7,17', '7,17', '0,0'])
  Business.create!(name: 'Shambhala Landscapes', lat: 37.754763, long: -122.406232, address: '1001 Potrero Ave', city: 'San Fransisco', state: 'CA', zip: '94110', price: '$$$$', phone_number: '(415) 634-3632', hours: ['0,0', '7,17', '7,17', '7,17', '7,17', '7,17', '0,0'])
  Business.create!(name: 'Golden Bay Movers', lat: 37.778953, long: -122.411647, address: '1160 Mission St', city: 'San Fransisco', state: 'CA', zip: '94103', price: '$$', phone_number: '(415) 345-7521', hours: ['0,0', '8,18', '8,18', '8,18', '8,15', '8,18', '8,14'])
  Business.create!(name: 'Ontrack Moving', lat: 37.792410, long: -122.404674, address: '601 California St', city: 'San Fransisco', state: 'CA', zip: '94108', price: '$$$', phone_number: '(415) 735-2437', hours: ['0,0', '8,18', '8,18', '8,18', '8,18', '8,18', '10,14'])

  # Restaurants
  fog_harbor = Business.find_by(name: 'Fog Harbor Fish House')
  yacht_club = Business.find_by(name: 'Liholiho Yacht Club')
  the_house = Business.find_by(name: 'The House')
  el_farolito = Business.find_by(name: 'El Farolito')
  chihuahua = Business.find_by(name: 'The Little Chihuahua')
  bella = Business.find_by(name: 'Bella Trattoria')
  beretta = Business.find_by(name: 'Beretta')
  delfina = Business.find_by(name: 'Delfina')
  #Home
  mizen = Business.find_by(name: 'Mizen Construction')
  urban = Business.find_by(name: 'The Urban Builder')

  rick = Business.find_by(name: 'Rick Brown Electrical')
  electric24 = Business.find_by(name: 'A 24 Electric Co')

  ideal = Business.find_by(name: 'Ideal Landscape')
  shamb = Business.find_by(name: 'Shambhala Landscapes')

  golden = Business.find_by(name: 'Golden Bay Movers')
  track = Business.find_by(name: 'Ontrack Moving')

  # Restaurants
  yacht_club.images.attach(io: File.open("./app/assets/images/yacht_club_0.jpg"), filename:"yacht_club_0.jpg")
  yacht_club.images.attach(io: File.open("./app/assets/images/yacht_club_1.jpg"), filename:"yacht_club_1.jpg")
  yacht_club.images.attach(io: File.open("./app/assets/images/yacht_club_2.jpg"), filename:"yacht_club_2.jpg")
  yacht_club.images.attach(io: File.open("./app/assets/images/yacht_club_3.jpg"), filename:"yacht_club_3.jpg")

  fog_harbor.images.attach(io: File.open("./app/assets/images/fog_harbor_0.jpg"), filename:"fog_harbor_0.jpg")
  fog_harbor.images.attach(io: File.open("./app/assets/images/fog_harbor_1.jpg"), filename:"fog_harbor_1.jpg")
  fog_harbor.images.attach(io: File.open("./app/assets/images/fog_harbor_2.jpg"), filename:"fog_harbor_2.jpg")
  fog_harbor.images.attach(io: File.open("./app/assets/images/fog_harbor_3.jpg"), filename:"fog_harbor_3.jpg")

  the_house.images.attach(io: File.open("./app/assets/images/the_house_0.jpg"), filename:"the_house_0.jpg")
  the_house.images.attach(io: File.open("./app/assets/images/the_house_1.jpg"), filename:"the_house_1.jpg")
  the_house.images.attach(io: File.open("./app/assets/images/the_house_2.jpg"), filename:"the_house_2.jpg")
  the_house.images.attach(io: File.open("./app/assets/images/the_house_3.jpg"), filename:"the_house_3.jpg")

  el_farolito.images.attach(io: File.open("./app/assets/images/el_farolito_0.jpg"), filename:"el_farolito_0.jpg")
  el_farolito.images.attach(io: File.open("./app/assets/images/el_farolito_1.jpg"), filename:"el_farolito_1.jpg")
  el_farolito.images.attach(io: File.open("./app/assets/images/el_farolito_2.jpg"), filename:"el_farolito_2.jpg")
  el_farolito.images.attach(io: File.open("./app/assets/images/el_farolito_3.jpg"), filename:"el_farolito_3.jpg")

  chihuahua.images.attach(io: File.open("./app/assets/images/chihuahua_0.jpg"), filename:"chihuahua_0.jpg")
  chihuahua.images.attach(io: File.open("./app/assets/images/chihuahua_1.jpg"), filename:"chihuahua_1.jpg")
  chihuahua.images.attach(io: File.open("./app/assets/images/chihuahua_2.jpg"), filename:"chihuahua_2.jpg")
  chihuahua.images.attach(io: File.open("./app/assets/images/chihuahua_3.jpg"), filename:"chihuahua_3.jpg")

  bella.images.attach(io: File.open("./app/assets/images/bella_0.jpg"), filename:"bella_0.jpg")
  bella.images.attach(io: File.open("./app/assets/images/bella_1.jpg"), filename:"bella_1.jpg")
  bella.images.attach(io: File.open("./app/assets/images/bella_2.jpg"), filename:"bella_2.jpg")
  bella.images.attach(io: File.open("./app/assets/images/bella_3.jpg"), filename:"bella_3.jpg")

  beretta.images.attach(io: File.open("./app/assets/images/beretta_0.jpg"), filename:"beretta_0.jpg")
  beretta.images.attach(io: File.open("./app/assets/images/beretta_1.jpg"), filename:"beretta_1.jpg")
  beretta.images.attach(io: File.open("./app/assets/images/beretta_2.jpg"), filename:"beretta_2.jpg")
  beretta.images.attach(io: File.open("./app/assets/images/beretta_3.jpg"), filename:"beretta_3.jpg")
  
  delfina.images.attach(io: File.open("./app/assets/images/delfina_0.jpg"), filename:"delfina_0.jpg")
  delfina.images.attach(io: File.open("./app/assets/images/delfina_1.jpg"), filename:"delfina_1.jpg")
  delfina.images.attach(io: File.open("./app/assets/images/delfina_2.jpg"), filename:"delfina_2.jpg")
  delfina.images.attach(io: File.open("./app/assets/images/delfina_3.jpg"), filename:"delfina_3.jpg")

  #Home
  
  mizen.images.attach(io: File.open("./app/assets/images/mizen_0.jpg"), filename:"mizen_0.jpg")
  mizen.images.attach(io: File.open("./app/assets/images/mizen_1.jpg"), filename:"mizen_1.jpg")
  mizen.images.attach(io: File.open("./app/assets/images/mizen_2.jpg"), filename:"mizen_2.jpg")
  mizen.images.attach(io: File.open("./app/assets/images/mizen_3.jpg"), filename:"mizen_3.jpg")

  urban.images.attach(io: File.open("./app/assets/images/urban_0.jpg"), filename:"urban_0.jpg")
  urban.images.attach(io: File.open("./app/assets/images/urban_1.jpg"), filename:"urban_1.jpg")
  urban.images.attach(io: File.open("./app/assets/images/urban_2.jpg"), filename:"urban_2.jpg")
  urban.images.attach(io: File.open("./app/assets/images/urban_3.jpg"), filename:"urban_3.jpg")

  rick.images.attach(io: File.open("./app/assets/images/rick_0.jpg"), filename:"rick_0.jpg")
  rick.images.attach(io: File.open("./app/assets/images/rick_1.jpg"), filename:"rick_1.jpg")
  rick.images.attach(io: File.open("./app/assets/images/rick_2.jpg"), filename:"rick_2.jpg")
  rick.images.attach(io: File.open("./app/assets/images/rick_3.jpg"), filename:"rick_3.jpg")

  electric24.images.attach(io: File.open("./app/assets/images/electric24_0.jpg"), filename:"electric24_0.jpg")
  electric24.images.attach(io: File.open("./app/assets/images/electric24_1.jpg"), filename:"electric24_1.jpg")
  electric24.images.attach(io: File.open("./app/assets/images/electric24_2.jpg"), filename:"electric24_2.jpg")
  electric24.images.attach(io: File.open("./app/assets/images/electric24_3.jpg"), filename:"electric24_3.jpg")

  ideal.images.attach(io: File.open("./app/assets/images/ideal_0.jpg"), filename:"ideal_0.jpg")
  ideal.images.attach(io: File.open("./app/assets/images/ideal_1.jpg"), filename:"ideal_1.jpg")
  ideal.images.attach(io: File.open("./app/assets/images/ideal_2.jpg"), filename:"ideal_2.jpg")
  ideal.images.attach(io: File.open("./app/assets/images/ideal_3.jpg"), filename:"ideal_3.jpg")

  shamb.images.attach(io: File.open("./app/assets/images/shamb_0.jpg"), filename:"shamb_0.jpg")
  shamb.images.attach(io: File.open("./app/assets/images/shamb_1.jpg"), filename:"shamb_1.jpg")
  shamb.images.attach(io: File.open("./app/assets/images/shamb_2.jpg"), filename:"shamb_2.jpg")
  shamb.images.attach(io: File.open("./app/assets/images/shamb_3.jpg"), filename:"shamb_3.jpg")

  golden.images.attach(io: File.open("./app/assets/images/golden_0.jpg"), filename:"golden_0.jpg")
  golden.images.attach(io: File.open("./app/assets/images/golden_1.jpg"), filename:"golden_1.jpg")
  golden.images.attach(io: File.open("./app/assets/images/golden_2.jpg"), filename:"golden_2.jpg")
  golden.images.attach(io: File.open("./app/assets/images/golden_3.jpg"), filename:"golden_3.jpg")

  track.images.attach(io: File.open("./app/assets/images/track_0.jpg"), filename:"track_0.jpg")
  track.images.attach(io: File.open("./app/assets/images/track_1.jpg"), filename:"track_1.jpg")
  track.images.attach(io: File.open("./app/assets/images/track_2.jpg"), filename:"track_2.jpg")
  track.images.attach(io: File.open("./app/assets/images/track_3.jpg"), filename:"track_3.jpg")

  #Restaurants

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
  Review.create!(user_id: sams.id, business_id: the_house.id, rating: 4, body: 'I only leave ratings for restaurants that I would definitely come back to. You can read the gazillion other reviews already on Yelp.')
  Review.create!(user_id: maverick.id, business_id: the_house.id, rating: 5, body: 'Pretty much tried everything on the menu...and the specials too!
  
  The attention to detail and preparation makes "the House" my eternal favorite...  Nothing is flat in terms of sophistication and the blending of delicate flavors.')
  Review.create!(user_id: jane_doe.id, business_id: the_house.id, rating: 5, body: 'When I visited San Francisco, the one thing I knew I wanted to do was have dinner at The House! I had heard so many great compliments about this restaurant from friends and I needed to try it.')
  Review.create!(user_id: west.id, business_id: the_house.id, rating: 4, body: 'Came here during a conference in SF and I really enjoyed my meal. From the opening glass of wine and the pickled cucumber appetizer I was revved up and ready to eat. ')
  
  Review.create!(user_id: samp.id, business_id: el_farolito.id, rating: 3, body: '3 stars because it\'s cash only but it would be 4 stars.  Next to 24th St. BART exit so it\'s super convenient.  Line wasn\'t long because I came off hours.  Super fast service.  Self serve salsa bar.  I got cow brain regular burrito.  I\'ve never had cow brain before so it was exciting to try.  The regular burrito was big and plenty of cow brain.  Interesting flavor, cow brain taste similar to liver.  Red salsa was spicy.  2 meals for the price of 1.')
  Review.create!(user_id: batman.id, business_id: el_farolito.id, rating: 4, body: 'Wow, I was going to go to El Taqueria but after looking for the best burrito/quesadilla spot it seemed this place was the real winner. I like my burritos with rice, I\'m a true fat kid at heart. La Taqueria doesn\'t have them that way and leaves you wanting something more after waiting in a long ass line. El Farolito also has some great salsa options. Left here so full and didn\'t spend a lot. Try the super quesadilla! ')
  Review.create!(user_id: goose.id, business_id: el_farolito.id, rating: 3, body: 'The best tacos I\'ve ever feasted on. Period. My brother and I came around midday for a quick bite. The line in this place was always consistently nearly out the door. All the booths and tables were taken, but people quickly eat and leave, so it was a quick turnaround. I got two tacos (carnitas and carne asada) and a side of rice and beans. Although the rice and beans fell short, the tacos did not. The service was great also. Would definitely come back when I get a chance to come back to SF. FYI - Cash only!!!')
  Review.create!(user_id: west.id, business_id: el_farolito.id, rating: 5, body: 'Our safe go-to for a good Mexican meal!
  
  THE WAIT: There was a line to the door, as always, on a Monday night at 8:30pm. It took maybe 15-20 minutes to order and get our food.')
  
  Review.create!(user_id: maverick.id, business_id: chihuahua.id, rating: 3, body: 'Classic SF super burrito, I\'d say for a "chain" type burrito spot, the burritos are pretty delicious and can definitely hold their own in a city with some LEGIT authentic spots.')
  Review.create!(user_id: goose.id, business_id: chihuahua.id, rating: 5, body: 'This place has super fast and friendly service every time. I absolutely love the chili verde tofu. Also, BEST gluten free tortilla I\'ve ever had for a burrito. The salsa bar is great as well. The habanero salsa does not disappoint!')
  Review.create!(user_id: west.id, business_id: chihuahua.id, rating: 4, body: 'Opens late, decent for post drinking grub.')
  Review.create!(user_id: samp.id, business_id: chihuahua.id, rating: 3, body: '$42 bucks for two burritos and a veggie taco delivered. They could at least throw in some chips and salsa. Tasty tho.')
  Review.create!(user_id: batman.id, business_id: chihuahua.id, rating: 1, body: 'Just a bland belly bomb, rice beans some meat, guacamole etc......all bland and booooooring')
  
  Review.create!(user_id: batman.id, business_id: bella.id, rating: 4, body: 'This place really is the gem that everyone is raving about. Super cute date night spot with a very romantic atmosphere.')
  Review.create!(user_id: jane_doe.id, business_id: bella.id, rating: 5, body: 'Such a fancy and small location, but the food is delicious. I got the pasta with salmon and I never thought I\'d enjoy salmon this much (I usually don\'t like eating fish LOL).')
  Review.create!(user_id: samp.id, business_id: bella.id, rating: 3, body: 'A wonderful place, a 5 star rating for sure, except for one annoying thing, which I\'ll start with.  When our bill came, a number of items were a dollar or two more than stated on the menu.  The total added 6 or 7 dollars to the bill, and the meal was certainly worth it, so I didn\'t complain. But if you raise prices, print new menus! But the food was amazing, the service excellent, and our cozy seat in the corner very romantic.  We finished with the best cup of coffee ever, and we left happy.  Even if it did cost a bit more.')
  Review.create!(user_id: west.id, business_id: bella.id, rating: 5, body: 'I don\'t like Italian food. But I like this place! Flavorful al dente noodles. Nice ambience. Good service. Tasty olive oil. Couldn\'t have asked for more ')
  
  Review.create!(user_id: goose.id, business_id: beretta.id, rating: 3, body: 'Povi was our server and she was awesome. The food was good. The wait wasn\'t too bad. We did have to sit outside because my daughters wheelchair would not fit inside. The table we sat at was at the end and the last heater was not working so it got cold really quick. My daughter ended up with bronchitis. In hindsight, we should\'ve gone elsewhere when we realized we would have to sit outside with out the heater but hindsight is 20/20.')
  Review.create!(user_id: jane_doe.id, business_id: beretta.id, rating: 4, body: 'Excellent Italian food in San Francisco with many vegetarian options. Loved the walnut bread, because it was truly unique and unlike anything I\'ve ever had. It was marvelous. The zucchini parm was delicious as well, and the margherita burrata is a must! Service was great, but location is very bar-like.')
  Review.create!(user_id: samp.id, business_id: beretta.id, rating: 4, body: 'Got there at 5:30 on a Monday and it was super easy to get a table or sit at the bar. By 6:30 it was packed and loud. Good place to hang with a friend. Everyone we encountered was very friendly.')
  Review.create!(user_id: sams.id, business_id: beretta.id, rating: 5, body: 'One of my late night go-tos for dining. Good drinks, ambiance, service, and good menu options. I really like the sweet potato fries, funghi misti pizza, tiramisu, and Panna Cotta.')
  
  Review.create!(user_id: jane_doe.id, business_id: delfina.id, rating: 5, body: 'Visited for dinner with some friends who live nearby and swear by this place. Everything we ate and drank was incredible, and I was very impressed by how knowledgeable the wait staff was about the menu.')
  Review.create!(user_id: batman.id, business_id: delfina.id, rating: 4, body: 'Dang, why\'d it take be so long to get my butt here. What a great meal all around! Came on a Friday night and only waited around 20 minutes (for the pasta side). Our waiter was awesome and really knew his stuff! Great recommendations!')
  Review.create!(user_id: goose.id, business_id: delfina.id, rating: 5, body: 'Celebrated a friends birthday here and it was amazing. Food was made fresh  and cooked deliciously.  Our service was very friendly and was fun. They had many selections of wine but our fave was the Rose\'. Definitely recommend!')
  Review.create!(user_id: west.id, business_id: delfina.id, rating: 3, body: 'Solid meal! Started with some Tartine bread and Shishito Peppers. Then shared the Veal Casoncelli & Pappardelle. The Luigi Maffini Fiano "Kratos" Paestum was delicious. My only two observations were that the pastas were a bit too salty, and the portions were very small.')
  
  #Home
  Review.create!(user_id: samp.id, business_id: mizen.id, rating: 5, body: 'Ciaran and his team are beyond fantastic.  We hired them to do an overhaul of a 1950\'s house and they were more than we hoped for.  The team was so conscientious;  we did not have to "watch over" them or micro manage the project.  Everything went according to the timelines and budget originally provided - so no unpleasant surprises anywhere.  They provided great advice and the finished product was amazing.  The team was easy to work with, diligent, and very responsive.  Words do not do Ciaran and his team justice.  Highly recommended!!')
  Review.create!(user_id: sams.id, business_id: mizen.id, rating: 4, body: 'I called Mizen after reading the reviews about front step repairs because that is exactly what I needed. Rather than repeat all of the wonderful comments from the other reviewers, I will just say "ditto"! They were responsive, provided great work, easy to work with, done quickly and efficiently, etc. I am very pleased!!')
  Review.create!(user_id: batman.id, business_id: mizen.id, rating: 5, body: 'I can\'t say enough about Ciaran and his Irish crew.  We had a 10 experience with this customer experience oriented team.  We went through a full home remodel in Noe Valley.  Ciaran was focused on making sure we stayed on time, within budget and that we were completely satisfied.  I would highly recommend Mizen!  These guys are amazing and fun to work with.  Thank you Ciaran, Mark and team!!')
  Review.create!(user_id: jane_doe.id, business_id: mizen.id, rating: 3, body: 'Mizen.Construction added a closet, ceiling trim, replaced lights and repainted my master bedroom. I was so happy with their team, they showed up on time, kept things very clean and  completed the project on time! They were flexible about minor changes, very thorough and did a top notch job. I am very happy with the result and look forward using them again when I finally get around to renovating my kitchen.')

  Review.create!(user_id: maverick.id, business_id: urban.id, rating: 4, body: 'Really happy with the Rugs masters team. Very efficient, honest and hard-working people. They care for their customers and do the work like they\'re doing their own. Excellent customers service with an agenda of 100% customers satisfaction. Their services are very flexible and are easy to call or schedule. Moreover, they offer a reasonable price which is greatly appreciated. Topnotch services and awesome crew. Thanks a lot!')
  Review.create!(user_id: batman.id, business_id: urban.id, rating: 5, body: 'Kevin and his guys have now completed our Master bathroom and bedroom remodel.  They knocked it out of the park again ala SF Giants winning the World Series style!  See the pics that show how incredible our bath and bedroom!  These pics speak for themselves and show what an amazing job he can do for you.')
  Review.create!(user_id: west.id, business_id: urban.id, rating: 4, body: 'Major remodel: Kevin was the low bid, complete on-time and on budget to the highest quality with no unpleasant surprises.')
  Review.create!(user_id: sams.id, business_id: urban.id, rating: 5, body: 'My wife and I hired Kevin and his team to do build customized shelving, closets, put in new lighting, and put in doors in our bedrooms. Kevin was fantastic at managing his team and keeping the project on-budget and on-time. Best of all, the work has very high-quality. I highly recommend him.')

  Review.create!(user_id: goose.id, business_id: rick.id, rating: 5, body: 'Rick is the best electrician I have ever worked with.  He installed all of our outdoor lighting and has upgraded our electrical panel.  He is capable of managing a large electrical project in a timely manner and always responds to texts/calls/emails in a timely manner.  I would highly recommend him to anyone looking for high quality electrical work.')
  Review.create!(user_id: samp.id, business_id: rick.id, rating: 5, body: 'Rick was very prompt and helpful. His pricing was competitive - I checked with a few different electricians in the neighborhood, and he was one of the most knowledgeable. No charge for an estimate.  We will strongly consider Rick for our next job.')
  Review.create!(user_id: jane_doe.id, business_id: rick.id, rating: 4, body: 'Rick was a pleasure to work with: punctual, uncomplicated and friendly. He gave us good suggestions for the work we were proposing (changing an external light switch) and made the project easier than it would have been with other electrical services.')
  Review.create!(user_id: west.id, business_id: rick.id, rating: 5, body: 'Rick is awesome! We needed a doorbell fixed immediately, and Rick came out the very next morning. He fixed it within a few minutes and also gave me tips on how to self-fix it next time. I\'ll definitely keep him on my vendor list! The only thing is he doesn\'t take credit cards, so make sure you have cash or a check ready (he can give you a receipt).')

  Review.create!(user_id: maverick.id, business_id: ideal.id, rating: 3, body: 'This is the second time I\'ve had David and his amazingly professional team do work for us, having found them here on Yelp the first time around.  And I will hire them again! We had two large retaining walls that needed replacement, a (surprise) French drain that also needed full replacement, new front concrete steps, and a retaining fence above the first retaining wall (we live on a very steep slope).  The vision and look of the entire project was conjured up by David and the team in consultation with me; they were deeply attentive to detail, and to my aspirations for the overall aesthetic, within the constraints of what the land allowed.  They are true craftsmen!  I trusted them completely, and was rewarded with a superior job.  Thank you, David and your talented team!')
  Review.create!(user_id: batman.id, business_id: ideal.id, rating: 4, body: 'We hired David and his crew to do a complete overhaul of both front and back yards of an investment property my husband and I were putting on the market for sale.  Not only was David very responsive and communicative throughout the whole process, his crew did an impeccable job.  They redid the driveway and all hard scapes in the backyard, new grass, new concrete planters and plants...etc., complete with brand new irrigation system.  And they showed up early everyday, worked tirelessly and finished the job in 10 days.  
We would hire Ideal Landscape again in a heart beat.')
  Review.create!(user_id: samp.id, business_id: ideal.id, rating: 4, body: 'David and his guys are fantastic. I originally contacted them to do my driveway, but was so happy with them that I also had them do my front steps, fence, irrigation, and drainage. 

Their pricing is competitive, their quality and attention to detail is spot on, and they were fast. David is honest, responsive, and professional. I spoke to him daily during my project and he was knowledgeable about the work itself as well as the administrative things like permits. His crew worked hard and paid attention to details. If anything was unclear or unusual, they asked and didnt assume.')
  Review.create!(user_id: jane_doe.id, business_id: ideal.id, rating: 5, body: 'We just finished a full backyard make over and were thrilled with the work that David and his crew performed for us. The best part of going with Ideal, is that the project will be done fast and the quality will be great. I had other contractors estimate our yard to take 6 weeks and David\'s guys had it done in about a week! They are hard working and efficient. I also felt like they listened to what I really wanted and what mattered most to me and tried to make sure I was happy with the progress and the results. They were glad to make adjustments that I asked for and it was a collaborative process so I ended up with the yard I really envisioned.  Our project included a paver patio, new stairs, an artificial turf lawn and concrete pad for a hot tub. David is a good communicator and faithful to follow through on what he says he will do. His crew was respectful of our property and skilled at their craft. Couldn\'t be more happy that I chose Ideal and we now have the yard we always wanted for our family!')

  Review.create!(user_id: sams.id, business_id: electric24.id, rating: 5, body: 'Had an electrical problem after moving in. Due to the holiday weekend my own management company dragged its feet getting someone out for us. We have a young toddler and a fridge out of commission is certainly more stress on top of stress.

Called Eddie. He walked us through what ended up being a simple problem free of charge. Super patient and courteous on the phone. On top of that unless the issue needed him to physically come over (it did not), he did it free of charge!

Though I hope to not call him in the future, I definitely will be calling if other problems arise!')
  Review.create!(user_id: maverick.id, business_id: electric24.id, rating: 4, body: 'We needed some pretty major electrical upgrading to our older San Francisco home.  Eddie came to our house at the scheduled time and provided us a quote and contract.  He was the utmost professional through the whole process.  He had to spend a good 3 full days at our house and always arrived on-time.  I felt comfortable leaving him alone on the property, including one full day in our kitchen, while we were away at work.    Eddie took care of arranging the time with the city inspector and was on-site to meet with them.  His work passed inspection with flying colors.  He also made the initial calls to PG&E to start their piece of the project.  The quality of his work is top-notch, and he even cleaned up after himself!!!  Eddie couldn\'t have made the process any easier for us.  I will be using Eddie for any future licensed electricion needs, and highly recommend that you do the same.')
  Review.create!(user_id: jane_doe.id, business_id: electric24.id, rating: 5, body: 'My old door chime short-circuited and wouldn\'t stop ringing.  This is not a pleasant sound.  Imagine a fire alarm blaring at close range in your ears.  I called Eddie after hours and he arrived quickly.  Thanks to his prompt service and efficiency, the doorbell has been repaired so we can sleep peacefully tonight.  I would use his services again.')
  Review.create!(user_id: batman.id, business_id: electric24.id, rating: 2, body: 'Punctual: yes. Professional: yes. Extremely expensive? Yes.
I called on a Saturday. He came, could not find the issue, and still charged me $300 for coming.
Never Again.')

  Review.create!(user_id: maverick.id, business_id: shamb.id, rating: 2, body: 'No response to my query, so no basis for judgment except that they appear not to be interested in new business.  Or perhaps they are no longer in business??')
  Review.create!(user_id: batman.id, business_id: shamb.id, rating: 5, body: 'We\'re very pleased with the work Shambhala Landscapes did on our back yard.  Tsering and his crew were punctual, kept the job site tidy, and did great work.  We received a detailed quote before work started, and didn\'t have any problems throughout the project.')
  Review.create!(user_id: west.id, business_id: shamb.id, rating: 4, body: 'A mis understanding while he was out of town. A very nice gentleman who came by my home and gave me some good ideas. Do not hesitate to give him a call. He will respond in a timely manner and really knows his business.')
  Review.create!(user_id: sams.id, business_id: shamb.id, rating: 5, body: 'Tsering and his team were honest, fast, reliable and creative with the rather odd yard I took on when I bought my home. They accommodated some last minute changes too and have offered to replace one tree that isn\'t looking healthy after a crazy windstorm the day after it was planted. Highly recommend Shambhala. Most processional contractor I\'ve had work on my home.')

  Review.create!(user_id: maverick.id, business_id: golden.id, rating: 5, body: 'Golden Bay Movers were everything you could hope for with a moving company/service. Reserving the move and understanding the process was easy and professional with Vanessa. Fernando, William, and Alex were professional, kind, helpful, and hardworking. They arrived early and ready to go with smiles. They all took time to assist me with little things along the way and made sure the move was going well and I was comfortable the entire time. The kind, positive attitudes of this moving crew made my moving day so much better. And all of my belongings arrived safely. I give them my highest recommendation!')
  Review.create!(user_id: goose.id, business_id: golden.id, rating: 5, body: 'I used Jelp to find Golden Bay Relocation and am very happy I did. Communication with them was very clear, the pricing was great, the movers were super friendly and did a very thorough and efficient job. Would highly recommend them!')
  Review.create!(user_id: batman.id, business_id: golden.id, rating: 5, body: 'Excellent moving company. Fernando and his team are efficient, experienced, helpful and professional. On moving day, they were on time, worked effectively, efficiently, very clean and paid attention to details. We won\'t hesitate to use Fernando and his team for our future moves.')
  Review.create!(user_id: jane_doe.id, business_id: golden.id, rating: 5, body: 'I had such a great experience with Golden Bay Movers. From the booking experience to the day-of service, this company was professional, polite and prompt. I especially want to thank the moving team (Ceasar, Alex and Carlos) who made the experience so amazing. They were right on time, extremely careful with our things and fast! They were all really nice people which made the painful chore of moving (almost) delightful.  Thank you, Golden Bay Movers!')

  Review.create!(user_id: maverick.id, business_id: track.id, rating: 5, body: 'Professional, fast, so easy to work with. Fabian was a great foreman. They also took away some extra large junk for me (old bow flex, broken kayak) that I had been wanting to get rid of for years and did so graciously! Really a pleasure to work with them and I would book them again in a heartbeat!')
  Review.create!(user_id: samp.id, business_id: track.id, rating: 5, body: 'After doing some research, I decided to go with OnTrac. I am very happy with them. They did a great job. Fast efficient and especially on time. Thanks.')
  Review.create!(user_id: west.id, business_id: track.id, rating: 5, body: 'Best moving experience I\'ve ever had. The crew was quick, friendly, punctual, and extremely helpful. They explained everything they were going to do ahead of time including what I may be charged extra for (materials, etc) so there were no surprises.  It was only 6 hours from when they arrived at our 3 bedroom to when they were done unloading all boxes and staging all furniture in our new house! Will 100% use them if we need to move again and will recommend them to anyone who asks. Thanks Tony and crew for an amazing experience!!')
  Review.create!(user_id: sams.id, business_id: track.id, rating: 5, body: 'Best experience! This was our first time using movers, so we didn\'t know what to expect. We packed up as much as we could, and Jerome and JoJo took care of the rest. They arrived earlier than their appointment window, and were SO QUICK moving our stuff. My move was multi-point, so we went from my place in SF to my partners spot in Oakland, then to our new spot in Oakland - it was all so seamless and their communication was great. Took about 3.5 hours total. They were also very careful about wrapping up my furniture to avoid damage. 10000% recommend!!!')

  #Tags

  Tag.create!(name: 'Restaurant')
  Tag.create!(name: 'Seafood')
  Tag.create!(name: 'Italian')
  Tag.create!(name: 'Mexican')
  Tag.create!(name: 'Burgers')

  Tag.create!(name: 'Auto Services')
  Tag.create!(name: 'Dealer')
  Tag.create!(name: 'Auto Repair')
  Tag.create!(name: 'Towing')
  Tag.create!(name: 'Auto Detail')
  
  Tag.create!(name: 'Home Services')
  Tag.create!(name: 'Contractor')
  Tag.create!(name: 'Electrician')
  Tag.create!(name: 'Landscaping')
  Tag.create!(name: 'Mover')
  
  res = Tag.find_by(name: 'Restaurant')
  sea = Tag.find_by(name: 'Seafood')
  ital = Tag.find_by(name: 'Italian')
  mex = Tag.find_by(name: 'Mexican')
  burg = Tag.find_by(name: 'Burgers')

  auto_s = Tag.find_by(name: 'Auto Services')
  dealer = Tag.find_by(name: 'Dealer')
  auto_r = Tag.find_by(name: 'Auto Repair')
  tow = Tag.find_by(name: 'Towing')
  auto_d = Tag.find_by(name: 'Auto Detail')

  home_s = Tag.find_by(name: 'Home Services')
  cont = Tag.find_by(name: 'Contractor')
  elec = Tag.find_by(name: 'Electrician')
  land = Tag.find_by(name: 'Landscaping')
  mover = Tag.find_by(name: 'Mover')  

  #Tagging

  #fog tags
  Tagging.create!(tag_id: res.id, business_id: fog_harbor.id)
  Tagging.create!(tag_id: sea.id, business_id: fog_harbor.id)
  
  #yacht tags
  Tagging.create!(tag_id: res.id, business_id: yacht_club.id)
  Tagging.create!(tag_id: sea.id, business_id: yacht_club.id)
  
  #the house tags
  Tagging.create!(tag_id: res.id, business_id: the_house.id)

  #el falolito tags
  Tagging.create!(tag_id: res.id, business_id: el_farolito.id)
  Tagging.create!(tag_id: mex.id, business_id: el_farolito.id)

  #The little chihuahua tags
  Tagging.create!(tag_id: res.id, business_id: chihuahua.id)
  Tagging.create!(tag_id: mex.id, business_id: chihuahua.id)
  
  #Bella tags
  Tagging.create!(tag_id: res.id, business_id: bella.id)
  Tagging.create!(tag_id: ital.id, business_id: bella.id)

  #Beretta Tags
  Tagging.create!(tag_id: res.id, business_id: beretta.id)
  Tagging.create!(tag_id: ital.id, business_id: beretta.id)

  #delfina Tags
  Tagging.create!(tag_id: res.id, business_id: delfina.id)
  Tagging.create!(tag_id: ital.id, business_id: delfina.id)

  #Mizen Tags
  Tagging.create!(tag_id: home_s.id, business_id: mizen.id)
  Tagging.create!(tag_id: cont.id, business_id: mizen.id)

  #Urban Tags
  Tagging.create!(tag_id: home_s.id, business_id: urban.id)
  Tagging.create!(tag_id: cont.id, business_id: urban.id)

  #Rick Tags
  Tagging.create!(tag_id: home_s.id, business_id: rick.id)
  Tagging.create!(tag_id: elec.id, business_id: rick.id)

  #Electric 24 tags
  Tagging.create!(tag_id: home_s.id, business_id: electric24.id)
  Tagging.create!(tag_id: elec.id, business_id: electric24.id)
  
  # Ideal tags
  Tagging.create!(tag_id: home_s.id, business_id: ideal.id)
  Tagging.create!(tag_id: land.id, business_id: ideal.id)
  
  # Shamb tags
  Tagging.create!(tag_id: home_s.id, business_id: shamb.id)
  Tagging.create!(tag_id: land.id, business_id: shamb.id)
  
  # Golden tags
  Tagging.create!(tag_id: home_s.id, business_id: golden.id)
  Tagging.create!(tag_id: mover.id, business_id: golden.id)
  
  # track tags
  Tagging.create!(tag_id: home_s.id, business_id: track.id)
  Tagging.create!(tag_id: mover.id, business_id: track.id)

  
end
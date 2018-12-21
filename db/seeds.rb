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

  Business.create(name: 'Fog Harbor Fish House', lat: 37.809271, long: -122.410119, address: 'Pier 39', city: 'San Fransisco', state: 'CA', zip: '94133', price: '$$', phone_number: '(415) 632-7593')
  Business.create(name: 'Liholiho Yacht Club', lat: 37.788291, long: -122.414695, address: '871 Sutter St', city: 'San Fransisco', state: 'CA', zip: '94109', price: '$$$', phone_number: '(415) 845-6384')
  Business.create(name: 'The House', lat: 37.798412, long: -122.407058, address: '1230 Grant AVE', city: 'San Fransisco', state: 'CA', zip: '94133', price: '$$$', phone_number: '(415) 623-8956')
  Business.create(name: 'El Farolito', lat: 37.752644, long: -122.418105, address: '2779 Mission St', city: 'San Fransisco', state: 'CA', zip: '94110', price: '$', phone_number: '(415) 902-6381')
  Business.create(name: 'The Little Chihuahua', lat: 37.771960, long: -122.436854, address: '292 Divisadero St', city: 'San Fransisco', state: 'CA', zip: '94117', price: '$$', phone_number: '(415) 309-3685')

  fog_harbor = Business.find_by(name: 'Fog Harbor Fish House')
  yacht_club = Business.find_by(name: 'Liholiho Yacht Club')
  the_house = Business.find_by(name: 'The House')
  el_farolito = Business.find_by(name: 'El Farolito')
  chihuahua = Business.find_by(name: 'The Little Chihuahua')

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
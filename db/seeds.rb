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

  Business.create(name: 'Fog Harbor Fish House', long: 37.809271, lat: -122.410119, address: 'Pier 39', city: 'San Fransisco', state: 'CA', zip: '94133', price: '$$', phone_number: '(415) 632-7593')
  Business.create(name: 'Liholiho Yacht Club', long: 37.788291, lat: -122.414695, address: '871 Sutter St', city: 'San Fransisco', state: 'CA', zip: '94109', price: '$$$', phone_number: '(415) 845-6384')

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
end
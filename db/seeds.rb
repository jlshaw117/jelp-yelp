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

  User.create!(email: 'demo1@gmail.com', password: 'password', f_name: 'Demo', l_name: 'User')
  User.create!(email: 'demo2@gmail.com', password: 'password', f_name: 'Demo', l_name: 'User')
  User.create!(email: 'demo3@gmail.com', password: 'password', f_name: 'Demo', l_name: 'User')
  User.create!(email: 'demo4@gmail.com', password: 'password', f_name: 'Demo', l_name: 'User')
  User.create!(email: 'demo5@gmail.com', password: 'password', f_name: 'Demo', l_name: 'User')
  User.create!(email: 'demo6@gmail.com', password: 'password', f_name: 'Demo', l_name: 'User')
  User.create!(email: 'demo7@gmail.com', password: 'password', f_name: 'Demo', l_name: 'User')
  User.create!(email: 'demo8@gmail.com', password: 'password', f_name: 'Demo', l_name: 'User')
  User.create!(email: 'demo9@gmail.com', password: 'password', f_name: 'Demo', l_name: 'User')
  User.create!(email: 'demo10@gmail.com', password: 'password', f_name: 'Demo', l_name: 'User')


end
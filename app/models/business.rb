# == Schema Information
#
# Table name: businesses
#
#  id           :bigint(8)        not null, primary key
#  name         :string           not null
#  long         :float            not null
#  lat          :float            not null
#  address      :string           not null
#  city         :string           not null
#  state        :string           not null
#  zip          :string           not null
#  owner_id     :integer
#  price        :string           not null
#  phone_number :string
#  hours        :string
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Business < ApplicationRecord

    validates :name, presence: true, uniqueness: true
    validates :long, :lat, :address, :city, :state, :zip, :price, presence: true
    validates :price, inclusion: {in: ['$', '$$', '$$$', '$$$$', '$$$$$']}

    belongs_to :owner,
        primary_key: :id,
        foreign_key: :owner_id,
        class_name: :User,
        optional: true

    has_many :reviews,
        primary_key: :id,
        foreign_key: :business_id,
        class_name: :Review

    has_one_attached :photo
    has_many_attached :images

    def average_rating
        reviews.average(:rating)
    end
end

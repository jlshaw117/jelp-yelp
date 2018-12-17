# == Schema Information
#
# Table name: reviews
#
#  id          :bigint(8)        not null, primary key
#  user_id     :integer          not null
#  business_id :integer          not null
#  rating      :integer          not null
#  body        :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Review < ApplicationRecord

    validates :body, presence: true
    validates :rating, presence: true, inclusion: {in: [1,2,3,4,5]}
    validates :user_id, :business_id, presence: true
    validates :user_id, uniqueness: { scope: :business_id }

    has_one :user
    has_one :business
end

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
    validates :business_id, uniqueness: { scope: :user_id}

    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :business,
        primary_key: :id,
        foreign_key: :business_id,
        class_name: :Business
    
    def biz_average_rating
        self.business.average_rating
    end
end

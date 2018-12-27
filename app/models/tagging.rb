# == Schema Information
#
# Table name: taggings
#
#  id          :bigint(8)        not null, primary key
#  tag_id      :integer          not null
#  business_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Tagging < ApplicationRecord

    validates :tag_id, uniqueness: { scope: :business_id}

    belongs_to :tags,
        primary_key: :id,
        foreign_key: :tag_id,
        class_name: :Tag

    belongs_to :businesses,
        primary_key: :id,
        foreign_key: :business_id,
        class_name: :Business 
end

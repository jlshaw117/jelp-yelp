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

require 'test_helper'

class TaggingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

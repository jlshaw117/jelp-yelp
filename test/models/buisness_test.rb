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

require 'test_helper'

class BusinessTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

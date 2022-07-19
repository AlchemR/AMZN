# == Schema Information
#
# Table name: carts
#
#  id             :bigint           not null, primary key
#  cart_ledger_id :integer
#  user_id        :integer
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#
    # t.integer "product_id"
    # t.integer "quantity"
    # t.integer "user_id"
    # t.datetime "created_at", null: false
    # t.datetime "updated_at", null: false

class Cart < ApplicationRecord
has_many :cartLedgers, class_name: "CartLedger", foreign_key: "cart_id"

belongs_to :user, class_name: "User", foreign_key: "user_id"

def cartCount
total = 0
    cartLedgers.each do |ledger|
    total += ledger.quantity
    end
    return total
end


end

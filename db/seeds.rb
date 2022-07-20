# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# add destroys to all items before seeding db

require 'open-uri'

User.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!("users")
Product.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!("products")
Cart.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!("carts")
CartLedger.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!("cart_ledgers")
# do this for all tables and future tables

u1 = User.create!({  username: "bob", account_fname: "bob1", account_lname: "bob2", email: "bob@bob", password: "123" })
u2 = User.create!({  username: "Demo_User", account_fname: "Demo", account_lname: "_User", email: "Demo@user.com", password: "12345678" })
u3 = User.create!({  username: "billy", account_fname: "goatse", account_lname: "galaxy", email: "bill@bob", password: "123" })

p1 = Product.create({  title: 'Acer SB220Q bi 21.5 Inches Full HD (1920 x 1080)', description: "IPS Ultra-Thin Zero Frame Monitor (HDMI & VGA Port), Black", details_description_array: [ "Personal", "gaming" ,"Refresh Rate",  "75 Hz" , "Brand", "Acer" , "Screen Size", "21.5 Inches" , "Special Feature", "Frameless"], detailed_description: "computer monitor"  , additional_details:["21.5 inches Full HD (1920 x 1080) widescreen IPS display", "And Radeon free sync technology. No compatibility for VESA Mount" ,"Refresh rate: 75 hertz - Using HDMI port" , "Zero-frame design; Ultra-thin; 4ms response time; IPS panel", "Ports: 1 x HDMI & 1 x VGA" ,  "Aspect ratio - 16:9. Color supported - 16.7 million colors. Brightness - 250 nit" , "Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree" , "75 hertz" ] , price: 99.99, categories: ['electronics', 'computers & accessories', 'monitors', discounts:[ "10% 0ff", "15% off", "25% off" ], seller_id: 1, in_stock: :true, inventory_count: 10 ] } )
p2 = Product.create( {  title: '2022 Acer 15inch HD IPS Chromebook', description: ", Intel Dual-Core Celeron Processor Up to 2.55GHz, 4GB RAM, 32GB Storage, Super-Fast WiFi Up to 1300 Mbps, Chrome OS-(Renewed) (Dale Silver)", details_description_array: ["Brand", "Acer" ,"Series", "Acer 15inch Chromebook" ,"Screen Size","15" ,"Color",	"Dale Silver" ,"Hard Disk Size", "32 GB" ,"CPU Model", "Celeron" ,"Ram Memory","Installed Size	4 GB" ,"Operating System", "Chrome OS" ,"Card Description", "Integrated" ,"CPU Speed", "3 GHz"] , detailed_description: "computer monitor"  , additional_details:[ "15inch HD IPS LED Display(1366x768), Intel Graphics" ,"Intel Dual-Core Celeron Processor Up to 2.55GHz, 4GB RAM, 32GB Storage" ,"2x USB Type-A, 2x USB Type-C, 1x Headphone/microphone, Micro SD Card Reader" ,"Super-Fast WiFi Up to 1300 Mbps, Bluetooth 5.0" ,"Chrome OS"] , price: 129.99, categories: ['electronics', 'computers & accessories', 'monitors', discounts:[ "10% 0ff", "15% off", "25% off" ], seller_id: 1, in_stock: :true, inventory_count: 10 ] } )
p3 = Product.create( {  title: 'book3', description: "its a book", detailed_description: 'detailed description of a book', price: 3.50, categories: ['books', 'paperbacks', 'firewood', 'paper', 'tree products', 'occasionally edible' ] } )
p4 = Product.create( {  title: 'book4', description: "its a book", detailed_description: 'detailed description of a book', price: 3.50, categories: ['books', 'paperbacks', 'firewood', 'paper', 'tree products', 'occasionally edible' ] } )
p5 = Product.create( {  title: 'book5', description: "its a book", detailed_description: 'detailed description of a book', price: 3.50, categories: ['books', 'paperbacks', 'firewood', 'paper', 'tree products', 'occasionally edible' ] } )




# c2 = Cart.create!({ user_id: -1 }) # guest user ID?
# will need to start with cart_ledger_id's blank, when add to cart, push the ledgerId to the cart's recordkeeping.  this is hopefully for transaction history
c11 = Cart.create!({user_id: u1.id})
c12 = Cart.create!({user_id: u2.id })
c13 = Cart.create!({user_id: u3.id })

c2 = CartLedger.create!({ product_id: p1.id , quantity: 4, cart_id: c11.id})
c3 = CartLedger.create!({ product_id: p2.id, quantity: 2, cart_id: c11.id})
c4 = CartLedger.create!({ product_id: p3.id, quantity: 3, cart_id: c11.id})
c5 = CartLedger.create!({ product_id: p4.id, quantity: 1, cart_id: c11.id})



r1 = Review.create!({ user_id: u1.id, product_id: p1.id, review_header: "Test Review for computer monitor", review_author: u1.account_fname, rating: 2, review_body: "standard review tbh.  no flipside feature thought, where in austrailia they show things upside down to show where gravity inverts; so I would have given it a higher rating if they didn't release it to production with so many bugs", verified_purchase: true })
r2 = Review.create!({ user_id: u2.id, product_id: p1.id, review_header: "Additional review for monitor", review_author: u2.account_fname, rating: 5, review_body: "basically a deskweight that has a plug.  But the plug in feature was very well thoguht out so I have to give it a high rating", verified_purchase: true })
r2 = Review.create!({ user_id: u3.id, product_id: p1.id, review_header: "Additional review for monitor", review_author: u3.account_fname, rating: 2, review_body: "slotted feature worked but it made the wall socket fuses get spicy when I gave it a drink", verified_purchase: true })
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
do this for all tables and future tables

u1 = User.create!({  username: "Sceptre", account_fname: "Sceptre", account_lname: "Electronics", email: "Sceptre@electronics.com", password: "123456" })
u2 = User.create!({  username: "Demo_User", account_fname: "Demo", account_lname: "_User", email: "Demo@user.com", password: "12345678" })
u3 = User.create!({  username: "Acer", account_fname: "Acer", account_lname: "Electronics", email: "Acer@electronics.com", password: "123456" })
u4 = User.create!({  username: "Kyy", account_fname: "Kyy", account_lname: "Electronics", email: "Kyy@electronics.com", password: "123456" })
u5 = User.create!({  username: "Also", account_fname: "Also", account_lname: "Electronics", email: "also@electronics.com", password: "123456" })
u6 = User.create!({  username: "Roku1", account_fname: "Roku", account_lname: "Electronics", email: "Rokuq@electronics.com", password: "123456" })
u7 = User.create!({  username: "Roku", account_fname: "Roku", account_lname: "Electronics", email: "Roku@electronics.com", password: "123456" })
u8 = User.create!({  username: "Basic", account_fname: "Basic", account_lname: "Electronics", email: "Basic@allelectronics.com", password: "123456" })
u9 = User.create!({  username: "Samsung", account_fname: "Samsung", account_lname: "Electronics", email: "Samsung@allelectronics.com", password: "123456" })

u10 = User.create!({  username: "Ray", account_fname: "Ray-Ray", account_lname: "Knar", email: "Ray@gnar.com", password: "123456" })
u11 = User.create!({  username: "Briney", account_fname: "pickle_morty", account_lname: "Fermented", email: "dill_ish@pickle_morty.com", password: "123456" })

u12 = User.create!({  username: "Big", account_fname: "the_big_sad", account_lname: "small_sad", email: "the_big_sad@small_sad.com", password: "123456" })
u18 = User.create!({  username: "little", account_fname: "little_dissapointment", account_lname: "historical_reference", email: "little_big@sad.com", password: "123456" })

u16 = User.create!({  username: "A", account_fname: "A_choo", account_lname: "Electronics", email: "a_sneeze@allergies.com", password: "123456" })
u17 = User.create!({  username: "A2", account_fname: "A_sneeze", account_lname: "father of a_choo", email: "a_choo@robinhood.com", password: "123456" })

u13 = User.create!({  username: "Bert", account_fname: "Bert", account_lname: "Sesame", email: "Bert@sesame.com", password: "123456" })
u14 = User.create!({  username: "ernie", account_fname: "Ernie", account_lname: "Sesame", email: "ernie@sesame.com", password: "123456" })
u15 = User.create!({  username: "Muppeteer", account_fname: "working_puppeteer", account_lname: "Muppets", email: "how_did_i_get_this_job@television.com", password: "123456" })

u19 = User.create!({  username: "Improbable_but_true", account_fname: "a_red_dino", account_lname: "Saur", email: "difficult_typing@prehistoric.com", password: "123456" })
u20 = User.create!({  username: "Unlikely_and_unreal", account_fname: "a_green_dino", account_lname: "Saurus", email: "second_place@prehistoric.com", password: "123456" })
u21 = User.create!({  username: "Bender", account_fname: "Rodriguez", account_lname: "Robot", email: "bite_my_shiny@robot.com", password: "123456" })
u22 = User.create!({  username: "nibbler", account_fname: "the_dog", account_lname: "sentient-gaurdian", email: "dark_matter_litterbox@planetexpress.com", password: "123456" })
u22 = User.create!({  username: "zoidberg", account_fname: "the_crab_creature", account_lname: "scavenger_sandwich", email: "dissapointed@friendships.com", password: "123456" })
u23 = User.create!({  username: "Professor", account_fname: "Prof_farnsworth", account_lname: "upset_scientist", email: "good_news@everyone.com", password: "123456" })
u24 = User.create!({  username: "Fry", account_fname: "Fry_farnsworth", account_lname: "delta_brain", email: "clumsy_family_tree@planetexpress.com", password: "123456" })
u25 = User.create!({  username: "Leelah", account_fname: "Leelah", account_lname: "large_contacts", email: "driver@planetexpress.com", password: "123456" })



p1 = Product.create({  
  title: "Acer SB220Q bi 21.5 Inches Full HD (1920 x 1080)", 
  description: "IPS Ultra-Thin Zero Frame Monitor (HDMI & VGA Port), Black", 
  details_description_array: [ "Personal", "gaming" ,"Refresh Rate",  "75 Hz" , "Brand", "Acer" , "Screen Size", "21.5 Inches" , "Special Feature", "Frameless"], 
  detailed_description: "computer monitor"  , 
  additional_details:["21.5 inches Full HD (1920 x 1080) widescreen IPS display", "And Radeon free sync technology. No compatibility for VESA Mount" ,"Refresh rate: 75 hertz - Using HDMI port" , "Zero-frame design; Ultra-thin; 4ms response time; IPS panel", "Ports: 1 x HDMI & 1 x VGA" ,  "Aspect ratio - 16:9. Color supported - 16.7 million colors. Brightness - 250 nit" , "Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree" , "75 hertz" ] , 
  price: 99.99, 
  categories: ['electronics', 'computers & accessories', 'monitors'] , 
    discounts:[ "10% 0ff", "15% off", "25% off" ], 
    seller_id: u1.id, 
    in_stock: :true, inventory_count: 10 } )
p1.photo.attach(io: open('https://amzn-app-seed.s3.us-west-1.amazonaws.com/81QpkIctqPL._AC_SL1500_.jpg'), filename: 'Computer monitor1.jpg' )
# p1.photo.attach(io: open('amazon path'), filename: 'same as image name' )

p2 = Product.create({
  title: 'Sceptre 24" Professional Thin 75Hz 1080p LED Monitor 2x HDMI VGA Build-in Speakers,',  
  description: "Machine Black (E248W-19203R Series)",  
  details_description_array: [  "Brand",	"Sceptre",  "Model Number",	"E248W-19203R","Refresh Rate"	, "60 Hz", "Display Resolution Maximum",	"1920 x 1080 Pixels", "Response Time", "5 Milliseconds" ],  
  detailed_description: "Computer Monitors by Sceptre"  , 
  additional_details:[ "24 Ultra slim profile" , "Contemporary sleek metallic design" , "Slim bezel with thin chassis. Power Range (V, A, Hz)- AC-DC Adapter Input 100  240 VAC, 50/60 Hz, 1.0A (Max.) Output - 12V DC, 2.5A. Power Consumption (Typical)- 25.4W. Neck/Stand Detachable: Yes" , "2 x HDMI Ports (convertible to DVI).Contrast Ratio:1000 : 1" , "VESA wall mount ready. HDMI Input Signal Support - 1920 x 1080 @ 75Hz, 1080/60p, 1080/60i, 720p, 480p, 480i, Built-in Speakers - 2 x 2W 8 Ohm.Mounting type: VESA Hole Pattern 100mm x 100mm"  ] , 
  price: 116.98,  
  categories: ['electronics', 'computers & accessories', 'monitors' ]  ,
  discounts:[ "10% 0ff" ], 
  seller_id: u1.id,  
  in_stock: :true,  
  inventory_count: 7  })
p2.photo.attach(io: open('https://amzn-app-seed.s3.us-west-1.amazonaws.com/71rXSVqET9L._AC_SL1257_.jpg'), filename: 'Computer monitor2.jpg' )

p3 = Product.create({
  title: 'Acer R240HY bidx 23.8-Inch IPS HDMI DVI VGA',  
  description: "(1920 x 1080) Widescreen Monitor, Black",  
  details_description_array: [  "Brand",	"Acer", "Model Number",	"R240HY bidx", "Refresh Rate",	"60 Hz", "Display Resolution Maximum",	"1920 x 1080 Pixels", "Response Time",	"4 Milliseconds" ],  
  detailed_description: "in Computer Monitors by Acer"  , 
  additional_details:[ "23.8 Full HD IPS widescreen with 1920 x 1080 resolution" ,"Response time: 4ms, refresh rate: 60 hertz, pixel pitch: 0.2745 millimeter. 178 degree wide viewing angle, display colors: 16.7 million" ,"The zero frame design provides maximum visibility of the screen from edge to edge" ,"Signal inputs: 1 x HDMI, 1 x DVI (withHDCP) & 1 x VGA. Does not support HDCP 2.2, the version this monitor supports is HDCP 1.4" ,"No picture visible using the OSD menu, adjust brightness and contrast to maximum or reset to their default settings. Brightness is 250 nit. Operating power consumption: 25 watts" ,"Monitor only, without speaker"  ] , 
  price: 119.99,  
  categories: ['electronics', 'computers & accessories', 'monitors' ] ,
  discounts:[ "20% off" ], 
  seller_id: u3.id,  
  in_stock: :true,  
  inventory_count: 12  })
p3.photo.attach(io: open('https://amzn-app-seed.s3.us-west-1.amazonaws.com/91K9SyGiyzLACSL1500.jpg'), filename: 'Computer monitor3.jpg' )




p4 = Product.create({
  title: 'Portable Monitor - KYY 15.6'' FHD 1080P Portable Laptop Monitor USB C HDMI Gaming Monitor Ultra-Slim IPS Display',  
  description: "w/Smart Cover & Speakers, Plug&Play, External Monitor for Laptop PC Phone Mac Xbox PS4",  
  details_description_array: [  "Brand"	,"KYY", "Model Number", 	"K3", "Refresh Rate",	"60 Hz", "Display Resolution Maximum"	, "1920x1080 Pixels", "Mounting Type", 	"Desk Mount" ],  
  detailed_description: "in Computer Monitors by KYY"  , 
  additional_details:[ " 🌈1080P FHD Portable Monitor - KYY Portable Monitor sports a 15.6 inch IPS panel with a 1920 x 1080 resolution at 60Hz, 178° viewing angles, a 1000:1 contrast ratio, presents vibrant colors on the screen. The HDR mode and Scene mode supports excellent mainstream transmission so that you can enjoy unprecedented gaming performance, KYY Monitor is ideal for multi-work, gaming, and general use.",  "💞Wide Compatible Monitor - With 2 USB-C Ports, Mini-HDMI Ports on one side, the portable monitor works with multiple devices like laptops💻, smartphones📱, PC, PS4, XBOX, or Nintendo Switch🎮, and more. No driver needed! It strengthened the ports' stability and solved the multi-wire winding problem, equipped with 3.5mm audio inputs, a real friendly design." , "Travel Monitor for Laptop - This 0.3inch 1.7lb thin weight Portable Laptop Monitor is thin, lightweight, and travel-friendly, just like a tablet, suitable for taking with it everywhere. It boosts productivity, provides the extra screen space you need to stay organized, or extends your phone screen for movies or games while on the go." , "⬛Upgraded Smart Cover Doubles as Stand - More stable foldable magnetic smart cover, made of durable, high-quality PU leather exterior, scratch-proof, soft lining, fully protect the screen. Two grooves in the cover base for more comfortable viewing angle choosing." , "🎁Provide Everything You Need - KYY provides you an ultra-slim high-quality portable external monitor that can work in both landscape and portrait mode, a stable foldable smart cover, 2 usb-c cable, mini-hdmi to hdmi cable. It has a unique designed premium black metal appearance, a friendly menu control wheel for setting, 2 built-in stereo speakers, and equipped with 3.5mm audio inputs to offer an enhanced entertainment experience when viewing videos and playing games." ] , 
  price: 189.99,  
  categories: ['electronics', 'computers & accessories', 'monitors' ] ,
  discounts:[ "10% off" ], 
  seller_id: u3.id,  
  in_stock: :true,  
  inventory_count: 2  })
p4.photo.attach(io: open('https://amzn-app-seed.s3.us-west-1.amazonaws.com/71j7S95OjpLACSL1500.jpg'), filename: 'Computer monitor4.jpg' )

p5 = Product.create({
  title: 'UPERFECT Y Portable Monitor Freestanding Touchscreen, 15.6''FHD 1080P IPS Screen with Adjust Kickstand,',  
  description: "Contrast Ratio, 100% sRGB w/Standard HDMI/USB 3.0/Type C, Built-in Speaker/Ambient Light",  
  details_description_array: [  "Brand",	"UPERFECT" , "Model Number",	"UPERFECT Y", "Refresh Rate",	"60 Hz", "Display Resolution Maximum",	"1920 x 1080 Pixels", "Response Time",	"3 Milliseconds" ] ,
  detailed_description: "In Computer Monitors by"  , 
  additional_details:[ "[2021 Innovative Adjustable Kickstand]: The First monitor achieving free switching between landscape and portrait mode in 0-110°adjustable viewing angle, fits your different working requirements perfectly. All ports integrated on the mini kickstand, makes all cables invisible automatically and connections more stable. Before using the monitor, please download and read the User Guide below." , "[5-point Capacitive Touchscreen Monitor]: Compatible with all system of Mac, PC, & Chrome. Adopted G+FF technology, support much more precise and sensitive touch, no extra driver needed, just connect the USB cable to your device to achieve the touch. NOTE: To realize the touch function, there must be a USB C to A or USB C to C cable connected to the USB C port on the monitor to your device directly. The touch function does not support right-click and long-press to activate the option operation." , "[Full-featured Port Only for UPERFECT ]: Built in Standard HDMI port that plug-in test over 5000 times and more 2000 times than mini HDMI port; USB 3.0 port that can connect to keyboard or mouse directly and without any more adapter; Type C port that support one usb-c cable to display & power." , "[First Portable Screen with 2000:1 Contrast Ratio]: The 2000:1 high contrast ratio of the hardware will make the screen have better 'shading performance', allowing you to see more dark and bright details, but will not overburden the bright parts. It is roughly equivalent to a natural HDR effect of 'non-brightness and non-coding'. 100% sRGB High Color Gamut deliver you brighter, crisper, and more natural colors." , "[Entertainment Upgraded with Colorful Flowing Atmosphere Lights]: UPERFECT First portable monitor built in Ambient Light and it has 10 working mode: Vivid, Colorful, White, Purple, Blue, Cyan, Green, Yellow, Orange, Red, put you in the world of gaming e-sports. Low-power Mode has also been added to this monitor, just choose what you need." ] , 
  price: 239.99,  
  categories: ['electronics', 'computers & accessories', 'monitors' ] ,
  discounts:[ "10% off" , "20% off" ], 
  seller_id: u4.id,  
  in_stock: :true,  
  inventory_count: 10  })
p5.photo.attach(io: open('https://amzn-app-seed.s3.us-west-1.amazonaws.com/71vdZLL-ojL._AC_SL1500_.jpg'), filename: 'Computer monitor5.jpg' )


p6 = Product.create({
  title: ' TCL 32-inch 3-Series 720p Roku Smart TV - 32S335, 2021 Model ',  
  description: "We've simplified TV so you can instantly enjoy endless entertainment. Choose from more than 5,000 streaming channels that feature 450,000 movies and TV episodes plus live sports, news, music, kids and family. Refresh Rate = 60Hz (Hertz).",  
  details_description_array: [  "Brand" , "TCL" , "Model Number",	"32S335", "Screen Size",	"32 Inches", "Resolution",	"720p", "Year",	"2021", "Item Dimensions LxWxH" ,	"28.8 x 7.1 x 18.9 inches" ] ,
  detailed_description: "Premium Televisions from TCL"  , 
  additional_details:[  "Dimensions with Stand (W x H x D): 28.8 x 18.9 x 7.1 ; Without Stand (W x H x D): 28.8 x 17.2 x 2.9 ; Weight with Stand: 8.2 lbs ; Weight without Stand: 8.0 lbs", "Smart functionality delivers all your favorite content with over 500,000 movies and TV episodes, accessible through the simple and intuitive Roku TV" ,"HD, Resolution: High definition (720p) resolution for excellent detail, color and contrast. Wireless Connection : 802.11ac 1x1 Dual Band" ,"Dual band Wi-Fi: Get fast and easy access to your favorite content to the dual band Wi-Fi connection" ,"Inputs: 3 HDMI 2.0 with HDCP 2.2 (one with HDMI ARC), 1 USB (media player), RF, Composite, Headphone Jack, Optical Audio Out" ,"Easy Voice Control: Works with Amazon Alexa or Google Assistant to help you find movie titles, launch or change channels, even switch inputs, using just your voice. Also available through the Roku mobile app"  ] , 
  price: 159.99,  
  categories: ['electronics', 'television & video', 'televisions' ] ,
  discounts:[ "10% off" , "5% off" ], 
  seller_id: u5.id,  
  in_stock: :true,  
  inventory_count: 22  })
p6.photo.attach(io: open('https://amzn-app-seed.s3.us-west-1.amazonaws.com/61xSgNcQLACSL1000.jpg'), filename: 'Television1.jpg' )

p7 = Product.create({
  title: ' Amazon Fire TV 55" 4-Series 4K UHD smart TV ',  
  description: " Creating an immersive home theater has never been easier. Now with Alexa Home Theater, you can wirelessly pair Echo speakers using the Alexa app, or connect a soundbar or an AV receiver to the eARC port or Bluetooth. Enjoy the high-quality audio from your devices for movies and gaming, or music with subscriptions to Amazon Music, Spotify, Sirius XM, and more. ",  
  details_description_array: [ "Resolution",  "3840 x 2160" , "Display Resolution" , "4K UHD" , "High Dynamic Range (HDR) format" ,  "HDR 10, HLG" ,"Backlight type" ,"Direct LED" ,"Refresh rate" ,"60 Hz" ,"Screen size" ,"55”" ,"Viewable display size" ,"54.6”" ,"HDMI ports" ,"3 HDMI 2.0 + 1 HDMI 2.1 with eARC" ,"Ethernet" ,"1 Ethernet port" ,"USB" ,"1 USB port" ,"Voice support" ,"Yes, with Fire TV Alexa Voice Remote (included) or the free Fire TV app (available for download on Fire OS, Android, and iOS)." ,"Audio support" ,"Dolby Digital Plus with passthrough of Dolby-encoded audio" ,"Audio power" ,"8W + 8W" ,"OS" ,"Fire TV OS" ,"Product size without stand" ,"48.7” x 28.3” x 3.5”" ,"Weight (without stand)" ,"25 (lb)" ,"Bezel size (mm)" ,"10.9 mm" ,"Front finish" ,"Black plastic" ,"Distance between TV legs" ,"39.6”" ,"SKU number" ,"4K55N400A"  ] ,
  detailed_description: "Fire TV's from Basics"  , 
  additional_details:[ "Brilliant 4K entertainment - Bring movies and shows to life with support for vivid 4K Ultra HD, HDR 10, HLG, and Dolby Digital Plus." ,"Scenes that leap off the screen - 4K Ultra HD, HDR 10, and HLG deliver a clearer and more vibrant picture with brighter colors compared to 1080p Full HD." ,"Fire TV Alexa Voice Remote - Press and ask to find favorite apps, movies, and shows, plus check the weather, sports scores, and more." ,"Watch what you want - Stream over 1 million movies and TV episodes. Watch favorites with subscriptions to Netflix, Prime Video, Disney+, and more." ,"All your entertainment in one place - Watch live and free TV, play video games, and stream music." ,"Smart and always getting smarter - Fire TV adds new Alexa skills, features, smart home capabilities, and voice functionality all the time." ,"Connect all your devices - Use the 3 HDMI inputs to connect to cable or satellite and video game consoles. The HDMI eARC lets you add audio equipment for enhanced sound. "  ] , 
  price: 399.99,  
  categories: ['electronics', 'television & video', 'televisions' ] ,
  discounts:[ "10% off" , "5% off" ], 
  seller_id: u8.id,  
  in_stock: :true,  
  inventory_count: 21  })
p7.photo.attach(io: open('https://amzn-app-seed.s3.us-west-1.amazonaws.com/81fSddSrlyL._AC_SL1000_.jpg'), filename: 'Television2.jpg' )

p8 = Product.create({
  title: ' Amazon Fire TV 65" Omni Series 4K UHD smart TV with Dolby Vision, hands-free with Alexa ',  
  description: "Enjoy the high-quality audio from your devices for movies and gaming, or music with subscriptions to Amazon Music, Spotify, Sirius XM, and more.",  
  details_description_array: [ "Resolution", "3840 x 2160" ,"Display resolution" , "4K UHD" ,"High Dynamic Range (HDR) format" ,  "HDR 10, HLG, Dolby Vision" , "Backlight type",  "Direct LED" , "Refresh rate",  "60 Hz" , "Screen size" , "65”" ,"Viewable display size",  "64.5”" ,"HDMI ports" ,"3 HDMI 2.0 + 1 HDMI 2.1 with eARC" ,"Ethernet" ,"1 Ethernet port" ,"USB" ,"1 USB port" ,"Audio support" ,"Dolby Digital Plus with passthrough of Dolby-encoded audio" ,"Audio power" ,"8W + 8W" ,"OS" ,"Fire TV OS" ,"Product size without stand" ,"57.1” x 33.3” x 2.9”" ,"Weight (without stand)" ,"42.5 (lb)" ,"Bezel size (mm)" ,"1.6 mm" ,"Front finish" ,"Gray metal","Distance between TV legs" , "48.4”" , "SKU number", "4K65M600A", "VESA Wall Mount Standard" , "400 mm x 200 mm"] ,
  detailed_description: "Fire TV's from Basics, but Bigger"  , 
  additional_details:[ "Cinematic 4K entertainment - Get true-to-life picture quality and rich, brilliant colors with support for 4K Ultra HD, Dolby Vision, HDR 10, HLG, and Dolby Digital Plus, and control the TV hands-free with Alexa." ,"HDR like you ve never seen - Dolby Vision brings spectacular color, contrast, clarity, and brightness to your screen." ,"Hands-free TV with Alexa - With built-in microphones, just ask to turn on the TV, and find, launch, and control content, so you can put down the remote." ,"Watch what you want - Stream over 1 million movies and TV episodes. Watch favorites with subscriptions to Netflix, Prime Video, Disney+, and more." ,"All your entertainment in one place - Watch live and free TV, play video games, and stream music." ,"Smart and always getting smarter - Fire TV adds new Alexa skills, features, smart home capabilities, and voice functionality all the time." ,"Connect all your devices - Use the 3 HDMI inputs to connect to cable or satellite and video game consoles. The HDMI eARC lets you add audio equipment for enhanced sound." ,"Designed to protect your privacy - Built with privacy protections and controls, including a switch that electronically disconnects the microphones.  "  ] , 
  price: 499.99,  
  categories: ['electronics', 'television & video', 'televisions' ] ,
  discounts:[ "5% off" , "10% off" ,  "15% off" ], 
  seller_id: u8.id,  
  in_stock: :true,  
  inventory_count: 18  })
p8.photo.attach(io: open('https://amzn-app-seed.s3.us-west-1.amazonaws.com/51EBhwkDkLACSL1000.jpg'), filename: 'Television3.jpg' )

p9 = Product.create({
  title: ' SAMSUNG 85-Inch Class QLED 4K UHD Q60B Series Dual LED Quantum HDR ',  
  description: " Motion Xcelerator, Object Tracking Sound Lite, Ultra Slim Design, Smart TV with Alexa Built-in (QN85Q60BAFXZA, 2022 Model) ",  
  details_description_array: [ "Brand", 	"SAMSUNG" , "Model Number" ,	"QN85Q60BAFXZA",  "Screen Size" , 	"85 Inches",  "Resolution" , 	"4K",  "Year",	"2022", "Color",	"Titan Black", "Item Dimensions" , "LxWxH	13.6 x 74.8 x 44.2 inches" ,"Supported Internet Services" ,	"Netflix" , "Total HDMI Ports" ,	"3" , "Speaker Type" ,	"2CH" ] ,
  detailed_description: " in LED & LCD TVs by SAMSUNG"  , 
  additional_details:[ "100% COLOR VOLUME WITH QUANTUM DOT: Bask in a billion shades of brilliant color at 100% Color Volume, that stay true even in bright scenes." ,"QUANTUM PROCESSOR LITE WITH 4K UPSCALING: Everything on your screen is upgraded to 4K resolution by a smart, powerful processor." ,"DUAL LED: Enjoy natural, real-life colors with dedicated warm and cool Dual LED backlights." ,"QUANTUM HDR: Go beyond HDTV with Quantum HDR that delivers an expanded range of color and contrast." ,"SMART TV WITH MULTIPLE VOICE ASSISTANTS: Just speak up—your favorite Voice Assistant is built in and ready to help."  ] , 
  price: 1897.99,  
  categories: ['electronics', 'television & video', 'televisions' ] ,
  discounts:[ "5% off" , "10% off"  ], 
  seller_id: u8.id,  
  in_stock: :true,  
  inventory_count: 10  })
p9.photo.attach(io: open('https://amzn-app-seed.s3.us-west-1.amazonaws.com/81inMIbTO9L._AC_SL1500_.jpg'), filename: 'Television4.jpg' )

p10 = Product.create({
  title: 'TCL 85-inch Class 4K UHD Dolby Vision HDR QLED Roku Smart TV - 85R745, 2021 model ',  
  description: "TCL's stunning 85 4K HDR display comes with a bold, brushed metal design for a more engaging and exciting viewing experience. Quantum Dot technology and the HDR Pro Pack with Dolby Vision combine for greater brightness and contrast, as well as a full palette of rich colors. ",  
  details_description_array: [  "Brand", 	"TCL" , "Model Number" , 	"85R745", "Screen Size" ,	"85 Inches", "Resolution" ,	"4K",  "Year" ,	"2021", "Color" ,	"Black", "Item Dimensions LxWxH" , 	"16.1 x 75.6 x 46.7 inches"  ] ,
  detailed_description: " Premium Televisions from TCL "  , 
  additional_details:[ "Superior 4K Ultra HD: Picture clarity combined with the contrast, color, and detail of Dolby Vision HDR (High Dynamic Range) for the most lifelike picture." ,"QLED: Quantum dot technology delivers better brightness and wider color volume, matching the format used by most cinema screens and Hollywood content creators for exceptionally vivid and lifelike picture performance." ,"HDR Pro Pack: Enjoy a truly cinematic experience at home with striking brightness, incredible contrast, and amazingly lifelike color with support for Dolby Vision, HDR10, and HLG." ,"Contrast Control Zones: Contrast is individually optimized across up to 192 localized zones for striking contrast between bright and dark areas of the image." ,"THX Certified Game Mode: Gain a competitive edge with the most optimal viewing experience for big screen gaming; never miss the action due to image smear, response time, or input lag, and enjoy the game as it was intended by the creators." ,"Easy Voice Control: Works with Amazon Alexa or Google Assistant to help you find movie titles, launch or change channels, even switch inputs, using just your voice. Also available through the Roku mobile app or voice enabled remote control" ,"4 HDMI inputs (1 eARC): Connect all your favorite devices through the four HDMI inputs that includes 1 eARC to easily sync audio and video sources and deliver better quality sound"  ] , 
  price: 2299.99,  
  categories: ['electronics', 'television & video', 'televisions' ] ,
  discounts:[ "5% off" , "10% off"  ], 
  seller_id: u5.id,
  in_stock: :true,  
  inventory_count: 20  })
p10.photo.attach(io: open('https://amzn-app-seed.s3.us-west-1.amazonaws.com/81UkjRSYpsS._AC_SL1500_.jpg'), filename: 'Television5.jpg' )

# p11 = Product.create({
#   title: 'TCL 85-inch Class 4K UHD Dolby Vision HDR QLED Roku Smart TV - 85R745, 2021 model ',  
#   description: "TCL's stunning 85 4K HDR display comes with a bold, brushed metal design for a more engaging and exciting viewing experience. Quantum Dot technology and the HDR Pro Pack with Dolby Vision combine for greater brightness and contrast, as well as a full palette of rich colors. ",  
#   details_description_array: [  "Brand", 	"TCL" , "Model Number" , 	"85R745", "Screen Size" ,	"85 Inches", "Resolution" ,	"4K",  "Year" ,	"2021", "Color" ,	"Black", "Item Dimensions LxWxH" , 	"16.1 x 75.6 x 46.7 inches"  ] ,
#   detailed_description: " Premium Televisions from TCL "  , 
#   additional_details:[ "Superior 4K Ultra HD: Picture clarity combined with the contrast, color, and detail of Dolby Vision HDR (High Dynamic Range) for the most lifelike picture." ,"QLED: Quantum dot technology delivers better brightness and wider color volume, matching the format used by most cinema screens and Hollywood content creators for exceptionally vivid and lifelike picture performance." ,"HDR Pro Pack: Enjoy a truly cinematic experience at home with striking brightness, incredible contrast, and amazingly lifelike color with support for Dolby Vision, HDR10, and HLG." ,"Contrast Control Zones: Contrast is individually optimized across up to 192 localized zones for striking contrast between bright and dark areas of the image." ,"THX Certified Game Mode: Gain a competitive edge with the most optimal viewing experience for big screen gaming; never miss the action due to image smear, response time, or input lag, and enjoy the game as it was intended by the creators." ,"Easy Voice Control: Works with Amazon Alexa or Google Assistant to help you find movie titles, launch or change channels, even switch inputs, using just your voice. Also available through the Roku mobile app or voice enabled remote control" ,"4 HDMI inputs (1 eARC): Connect all your favorite devices through the four HDMI inputs that includes 1 eARC to easily sync audio and video sources and deliver better quality sound"  ] , 
#   price: 2299.99,  
#   categories: ['electronics', 'television & video', 'televisions' ] ,
#   discounts:[ "5% off" , "10% off"  ], 
#   seller_id: u5.id,
#   in_stock: :true,  
#   inventory_count: 20  })
# p11.photo.attach(io: open(''), filename: 'Television5.jpg' )



# c2 = Cart.create!({ user_id: -1 }) # guest user ID?
# will need to start with cart_ledger_id's blank, when add to cart, push the ledgerId to the cart's recordkeeping.  this is hopefully for transaction history
c11 = Cart.create!({user_id: u1.id})
c12 = Cart.create!({user_id: u2.id })
c13 = Cart.create!({user_id: u3.id })

c2 = CartLedger.create!({ product_id: p1.id , quantity: 4, cart_id: c11.id})
c3 = CartLedger.create!({ product_id: p2.id, quantity: 2, cart_id: c11.id})
c4 = CartLedger.create!({ product_id: p3.id, quantity: 3, cart_id: c11.id})
c5 = CartLedger.create!({ product_id: p4.id, quantity: 1, cart_id: c11.id})



r1 = Review.create!({ user_id: u10.id, product_id: p1.id, review_author: u10.account_fname, verified_purchase: true, review_header: " How to fix ghosting! ",  rating: 5, review_body: "I bought two of these and enjoy them quite a bit. A few reviews complain about ghosting, which I experienced until I realized in the default settings on the monitors had overdrive or 'OD' on. As long as you disable this feature you will no longer have ghosting trouble!"  })
r2 = Review.create!({ user_id: u11.id, product_id: p1.id, review_header: "Poor Customer serivce", review_author: u11.account_fname, rating: 2, review_body: "Every now and again my screen blacks out, but just for a moment, less than a second, (think screenshot on your phone) and it's really weirding me out. It happens in irregular inconsistent intervals, sometimes days in between, sometimes only 5 minutes apart. I changed all the cables and adapters, I wrote back in Sept/Oct for a replacement but Amazon redirected me to the manufacturer. I sent the monitor to the Acer support center, and they sent me back the monitor with the diagnostic was no observed issues. So I bought this monitor to have an upgrade but wasn't a good choice. And here I'm with an annoying black flashing screen", verified_purchase: true })
r3 = Review.create!({ user_id: u12.id, product_id: p1.id, review_header: "Faulty hardware, Water Damage", review_author: u12.account_fname, rating: 4, review_body: "slotted feature worked but it made the wall socket fuses get spicy when I gave it a drink", verified_purchase: true })
r3 = Review.create!({ user_id: u13.id, product_id: p1.id, review_header: "Faulty hardware", review_author: u13.account_fname, rating: 3, review_body: "slotted feature worked but it made the wall socket fuses get spicy when I gave it a drink", verified_purchase: true })
r4 = Review.create!({ user_id: u14.id, product_id: p1.id, review_header: "Very Good for Price", review_author: u13.account_fname, rating: 5, review_body: "BEFORE YOU BUY YOU MUST KNOW: 1) the monitor does not tilt up or down. 2) monitor does not rise in height and visa versa. 3) the monitor does no rotate , To me this isn't a problem since my monitor is sitting on a monitor riser. However, if you are nit picky about this type of stuff, i recommend you look else where and compare!", verified_purchase: true })
r5 = Review.create!({ user_id: u15.id, product_id: p1.id, review_header: "Good but - no instructions!", review_author: u15.account_fname, rating: 4, review_body: "I bought two of these for a dual monitor setup. Unfortunately there are no instructions on installing the base of the monitor. The Quick Guide states that The monitor base is attached onto the monitor before shipment and it is undetachable. This is clearly false as nothing is attached to the monitor. Rather, there are two pieces included: A round base and a middle bracket. Attaching the middle bracket to the round base was easy to figure out. However, attaching the middle bracket to the monitor was not easy. On the first monitor, we tried different things and none worked. We then thought the base is 'pressure mounted' so we tried to push it straight into the back of the monitor, and that broke two plastic tabs on the brand new monitor! On the second monitor we were more careful. After a few more tries, we discovered that you need to angel the middle bracket into the back of the monitor and then lift up for it to attach. If you do it right, it will work easily and quickly. If you find yourself forcing it in, then you are doing it wrong! Acer could make this easier for its clients by including installation instructions.", verified_purchase: true })
r6 = Review.create!({ user_id: u16.id, product_id: p1.id, review_header: "Best 'Bang for Buck' 3 Monitor setup for Gaming!", review_author: u16.account_fname, rating: 5, review_body: " Monitors have THIN Bezel = highly recommended for 3 monitor surround gaming setups (5760x1080)! The monitors controls are crisp and hidden out of the way. Color, brightness and response time (4ms GtG) are all good. I see no ghosting while gaming. All 3 monitors came WITHOUT dead pixels or defects. The only downside I can see is the dim blue light ('power on' LED) on the front of the monitor. Some gamers might be distracted by the little lights while gaming. EASY FIX = I personally used black electrical tape, cut 3 tiny squares and covered the blue LEDs. The black tape blends 100% into the black monitor frame = I can't see the the tape unless I turn on the room's lights (which I don't do while gaming). While some might want higher resolution, 1080 is IDEAL for 3 monitor setups! 3x 1080 monitors = 5760x1080...which is close to 4K in terms of overall resolution. In fact, I don't think any GPU can handle 3x 4K monitors in surround configuration while gaming!", verified_purchase: true })



r7 = Review.create!({ user_id: u12.id, product_id: p2.id, review_header: "Small things that bug me.", review_author: u12.account_fname, rating: 3, review_body: "Two things I don't like about it: 1- It has a separate power supply - I thought those went out with the 15 screens of old... Nope... On the other hand, if the power supply blows, you can always get another one .... On the other hand, how often does a voltage control circuit blow in a screen? 2- The menu buttons are on the bottom of the screen (like most) but, there are no logos on the facing bottom frame that shows you where they are and what they do. I had to paint my own so, instead of light gray logos that blend in with the frame, I have to have bright white bars to show me where the buttons are and what they do.", verified_purchase: true })

r9 = Review.create!({ user_id: u13.id, product_id: p2.id, review_header: "Great!", review_author: u13.account_fname, rating: 5, review_body: "this thing is really good and is funny how no one is really talking about it but i guess is cause their not LG
on older pcs there this really annoying thing where on my 1000$ 2020 IPS monitor video's look bad and have ghosting. on this they look smooth and clean. games also run just as good as my expensive monitor even has adaptive sync. for under 200$ this thing is king strong recommend. NOTE: the down side of this monitor is the speakers sound like they were pulled from headphones and slapped on the back their really bad but aside from that great product.", verified_purchase: true })

r10 = Review.create!({ user_id: u14.id, product_id: p2.id, review_header: "Good for home office use", review_author: u14.account_fname, rating: 5, review_body: "I bought 2 of these for a dual monitor setup for my home office WFH. So far there have been 0 issues. I plugged them in and they have worked perfectly from the start. I have not used them for gaming but I might buy an additional one for a secondary monitor on my gaming rig to replace the second monitor I currently use. Mine had no dead pixels, no weird lines, they just work. And so far... Working well. I recommend at least for home office use. ", verified_purchase: true })

r11 = Review.create!({ user_id: u15.id, product_id: p2.id, review_header: "Great value for the price!", review_author: u15.account_fname, rating: 5, review_body: "The monitors arrived in good condition, and as you can see in the video, I mounted them on the dual-monitor stand that was part of the same order. It's set up a little awkwardly for now, since I am not sure I wanna drill holes in my desk yet. The monitors come with riser screws (I think they are called) in order to facilitate mounting on VESA-compatible monitor arms. The monitors are light, sleek, and seem to work well so far. The picture quality doesn't disappoint! Very good value.   I'll update this review in the near future, after using the products for a few months.", verified_purchase: true })

r12 = Review.create!({ user_id: u16.id, product_id: p2.id, review_header: "Nice monitor", review_author: u16.account_fname, rating: 5, review_body: "  Upon opening the box I found a couple nice surprises. First, the instructions were in a nicely sized format, with clear print and illustrations. Easy to read and follow. Secondly, they included a good quality screw driver. Properly sized Philips with a comfortable handle. It's nice when these kinds of details are attended to. The monitor powered up and connected to my laptop flawlessly. I did have difficulty with my laptop with a broken screen. Getting the cursor to the settings icon and navigating thru the process to make this my primary/only monitor. Once that was accomplished the monitor worked flawlessly. I'm not a techie nor a gamer so I won't be using this monitor to it's full capability. ", verified_purchase: true })

r13 = Review.create!({ user_id: u17.id, product_id: p2.id, review_header: "Very nice picture quality and very affordable.", review_author: u17.account_fname, rating: 5, review_body: " Best monitor for price I have found. I ordered and received two of these along with a USB-C mini hub for dual monitors on my notebook. I could not be happier. Do not expect big sound from the small speakers however they work well and fill the need. The image quality is fantastic and on par with my other 4k monitors of bigger brands. I must also state that the first two never showed up even though Amazon showed they were delivered and 'handed to a household member'. I was not even home. After a couple of days chatting with AZ on line, they replaced them and they DID show up. Had them for a few months now and I am very pleased. ", verified_purchase: true })
r14 = Review.create!({ user_id: u18.id, product_id: p2.id, review_header: "Well packaged and east to setup", review_author: u18.account_fname, rating: 5, review_body: " I purchased this for my son for school since it's currently virtual. The poor kid was hunched over looking at the screen on his Chromebook, so I figured the price of the monitor was going to be a lot less than chronic neck pain. The first thing that struck me about this monitor was how well it was packaged inside its box. I've recently purchased some electronics that were sloppily packaged at the factory. This thing is packed well enough to easily survive transit from the warehouse to my door without the need for additional boxing. The second thing that impressed me was the ease of setup. The monitor has a simple connection to the stand (screwdriver included- I guess some people don't have one already) and came with an HDMI cable. The image looks great, as it should since we're dealing with a digital signal. The speakers are more than sufficient for listening to his classes. The people complaining about the sound quality need to get real. Be realistic for what they are.", verified_purchase: true })
r15 = Review.create!({ user_id: u19.id, product_id: p3.id, review_header: "Extremely Pleased", review_author: u19.account_fname, rating: 5, review_body: "  I so love this monitor and its performance that, since 2018, I have purchased 7 of these monitors. 4 were for a home office in NJ and 2 were for a home office in FL for vacations. I gave away the 4 in NJ, prior to moving to FL. Thinking that I still had 4 in FL, I gave 1 of those to my brother for his security system. Upon arrival, I realized I only originally had 2 in FL and now I was left with 1. I struggled with 1 monitor for 4 months. I wouldn't purchase another because the pandemic supply and demand had pushed prices too high for my retirement income and I wanted the monitors to match. I happen to see this one at a discount which brought it into my budget range so I jumped on it. It isn't much more than my 2018 purchases however, the last few I bought for FL all have built-in speakers and 2 HDMI ports. Whaaaat? So very much worth the price and I highly recommend this monitor. The pictures are wonderful. Can't comment on sound since I just found out that they have speakers and haven't used those yet. I can only assume they are basic speakers for video cons. 5 stars and 2 thumbs up from me.", verified_purchase: true })
r16 = Review.create!({ user_id: u20.id, product_id: p3.id, review_header: "  Nice monitor ", review_author: u20.account_fname, rating: 5, review_body: "  Upon opening the box I found a couple nice surprises. First, the instructions were in a nicely sized format, with clear print and illustrations. Easy to read and follow. Secondly, they included a good quality screw driver. Properly sized Philips with a comfortable handle. It's nice when these kinds of details are attended to.", verified_purchase: true })
r17 = Review.create!({ user_id: u21.id, product_id: p3.id, review_header: " Monitor for Lizards ", review_author: u21.account_fname, rating: 5, review_body: " I bought this for my pet dinosaur and he enjoys it very much, even though he has bad eyesight", verified_purchase: true })
r18 = Review.create!({ user_id: u22.id, product_id: p3.id, review_header: " Very nice picture quality and very affordable. ", review_author: u22.account_fname, rating: 5, review_body: "  Best monitor for price I have found. I ordered and received two of these along with a USB-C mini hub for dual monitors on my notebook. I could not be happier. Do not expect big sound from the small speakers however they work well and fill the need. The image quality is fantastic and on par with my other 4k monitors of bigger brands. I must also state that the first two never showed up even though Amazon showed they were delivered and 'handed to a household member'. I was not even home. After a couple of days chatting with AZ on line, they replaced them and they DID show up. Had them for a few months now and I am very pleased.", verified_purchase: true })
r19 = Review.create!({ user_id: u23.id, product_id: p3.id, review_header: " For the price, excellent monitor. ", review_author: u23.account_fname, rating: 5, review_body: "  Picture quality is sharp, has pretty good contrast. I have the 24 size and the native resolution defaults to 1920 x 1080. Pretty good blacks. Pretty good color presets. Overall, I have no major complaints at this point. Its a good size for a home-use, office display and at $100, was a pretty good deal. Would recommend to anyone looking for a good monitor on a budget.", verified_purchase: true })
r20 = Review.create!({ user_id: u24.id, product_id: p3.id, review_header: " For the price, excellent monitor. ", review_author: u24.account_fname, rating: 5, review_body: "  Picture quality is sharp, has pretty good contrast. I have the 24 size and the native resolution defaults to 1920 x 1080. Pretty good blacks. Pretty good color presets. Overall, I have no major complaints at this point. Its a good size for a home-use, office display and at $100, was a pretty good deal. Would recommend to anyone looking for a good monitor on a budget.", verified_purchase: true })

r21 = Review.create!({ user_id: u2.id, product_id: p1.id, review_header: "Demo User review ", review_author: u2.account_fname, rating: 5, review_body: "Demo user reviews", verified_purchase: true })
r22 = Review.create!({ user_id: u2.id, product_id: p2.id, review_header: "Demo User review ", review_author: u2.account_fname, rating: 4, review_body: "Demo user reviews", verified_purchase: true })
r23 = Review.create!({ user_id: u2.id, product_id: p3.id, review_header: "Demo User review ", review_author: u2.account_fname, rating: 3, review_body: "Demo user reviews", verified_purchase: true })
r24 = Review.create!({ user_id: u2.id, product_id: p4.id, review_header: "Demo User review ", review_author: u2.account_fname, rating: 3, review_body: "Demo user reviews", verified_purchase: true })
r25 = Review.create!({ user_id: u2.id, product_id: p5.id, review_header: "Demo User review ", review_author: u2.account_fname, rating: 2, review_body: "Demo user reviews", verified_purchase: true })
r26 = Review.create!({ user_id: u2.id, product_id: p6.id, review_header: "Demo User review ", review_author: u2.account_fname, rating: 2, review_body: "Demo user reviews", verified_purchase: true })
r27 = Review.create!({ user_id: u2.id, product_id: p7.id, review_header: "Demo User review ", review_author: u2.account_fname, rating: 1, review_body: "Demo user reviews", verified_purchase: true })
r28 = Review.create!({ user_id: u2.id, product_id: p8.id, review_header: "Demo User review ", review_author: u2.account_fname, rating: 1, review_body: "Demo user reviews", verified_purchase: true })
r29 = Review.create!({ user_id: u2.id, product_id: p9.id, review_header: "Demo User review ", review_author: u2.account_fname, rating: 2, review_body: "Demo user reviews", verified_purchase: true })
r30 = Review.create!({ user_id: u2.id, product_id: p10.id, review_header: "Demo User review ", review_author: u2.account_fname, rating: 1, review_body: "Demo user reviews", verified_purchase: true })

r31 = Review.create!({ user_id: u19.id, product_id: p1.id, review_header: "Demo User review ", review_author: u19.account_fname, rating: 5, review_body: "Demo user reviews", verified_purchase: true })
r32 = Review.create!({ user_id: u19.id, product_id: p2.id, review_header: "Demo User review ", review_author: u19.account_fname, rating: 3, review_body: "Demo user reviews", verified_purchase: true })
r33 = Review.create!({ user_id: u19.id, product_id: p3.id, review_header: "Demo User review ", review_author: u19.account_fname, rating: 2, review_body: "Demo user reviews", verified_purchase: true })
r34 = Review.create!({ user_id: u19.id, product_id: p4.id, review_header: "Demo User review ", review_author: u19.account_fname, rating: 1, review_body: "Demo user reviews", verified_purchase: true })
r35 = Review.create!({ user_id: u19.id, product_id: p5.id, review_header: "Demo User review ", review_author: u19.account_fname, rating: 1, review_body: "Demo user reviews", verified_purchase: true })
r36 = Review.create!({ user_id: u19.id, product_id: p6.id, review_header: "Demo User review ", review_author: u19.account_fname, rating: 1, review_body: "Demo user reviews", verified_purchase: true })
r37 = Review.create!({ user_id: u19.id, product_id: p7.id, review_header: "Demo User review ", review_author: u19.account_fname, rating: 4, review_body: "Demo user reviews", verified_purchase: true })
r38 = Review.create!({ user_id: u19.id, product_id: p8.id, review_header: "Demo User review ", review_author: u19.account_fname, rating: 5, review_body: "Demo user reviews", verified_purchase: true })
r39 = Review.create!({ user_id: u19.id, product_id: p9.id, review_header: "Demo User review ", review_author: u19.account_fname, rating: 5, review_body: "Demo user reviews", verified_purchase: true })
r40 = Review.create!({ user_id: u19.id, product_id: p10.id, review_header: "Demo User review ", review_author: u19.account_fname, rating: 5, review_body: "Demo user reviews", verified_purchase: true })






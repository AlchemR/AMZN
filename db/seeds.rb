# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


p1 = Product.create([ {title: 'book', description: "its a book", detailed_description: 'detailed description of a book', price: 3.50, categories: ['books', 'paperbacks', 'firewood', 'paper', 'tree products', 'occasionally edible' ] } ])
p2 = Product.create([ {title: 'book2', description: "its a book", detailed_description: 'detailed description of a book', price: 3.50, categories: ['books', 'paperbacks', 'firewood', 'paper', 'tree products', 'occasionally edible' ] } ])
p3 = Product.create([ {title: 'book3', description: "its a book", detailed_description: 'detailed description of a book', price: 3.50, categories: ['books', 'paperbacks', 'firewood', 'paper', 'tree products', 'occasionally edible' ] } ])
p4 = Product.create([ {title: 'book4', description: "its a book", detailed_description: 'detailed description of a book', price: 3.50, categories: ['books', 'paperbacks', 'firewood', 'paper', 'tree products', 'occasionally edible' ] } ])
p5 = Product.create([ {title: 'book5', description: "its a book", detailed_description: 'detailed description of a book', price: 3.50, categories: ['books', 'paperbacks', 'firewood', 'paper', 'tree products', 'occasionally edible' ] } ])
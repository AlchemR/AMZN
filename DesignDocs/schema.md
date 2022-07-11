# Schema

### `products`

| `Column name`         	| `Data Type`       	| `Details`                 	|
|---------------------	|-----------------	|-------------------------	|
| id                  	| integer         	| null:false, primary key           	|
| title               	| string          	| null:false              	|
| description         	| string          	| null:false              	|
| detailed_description 	| text            	|                         	|
| price               	| integer / float 	| null:false              	|
| categories          	| text            	| array:true, default:[] , foregin key 	|
| created_at          	| datetime        	| null:false              	|
| updated_at          	| datetime        	| null:false              	|
| in_stock            	| boolean         	| null:false, indexed              	|

* categories references categories table primary key


### `shopping_Cart`
| `Column name` 	| `Data Type` 	| `Details`    	|
|-------------	|-----------	|------------	|
| id          	| integer   	| null:false , primary key	|
| product_id  	| integer   	| null:false, foreign key	|
| quantity    	| integer   	| null:false 	|
| user_id     	| integer   	| null:false, foreign key |
| created_at  	| datetime  	| null:false 	|
| updated_at  	| datetime  	| null:false 	|

* product_id references products table primary key
* user_id references users table primary key


### `categories`
| `Column name` 	| `Data Type` 	| `Details`   	|
|-------------	|-----------	|------------	|
| id          	| integer   	| null:false, primary key, indexed |
| category  	| string   	| null:false 	|
| created_at  	| datetime  	| null:false 	|
| updated_at  	| datetime  	| null:false 	|




### `users`

| `Column name`              	| `Data Type` 	| `Details`                 	|
|--------------------------	|-----------	|-------------------------	|
| id                       	| integer   	| null:false, primary key              	|
| username                 	| string    	| null:false, unique:true 	|
| account_fname            	| string    	| null:false             	|
| account_lname            	| string    	| null:false              	|
| email                    	| string    	| null:false, unique:true              	|
| password_digest 	| string    	| null:fasle              	|
| session_token            	| string    	| null:false              	|
| created_at               	| datetime  	| null:false              	|
| updated_at               	| datetime  	| null:false              	|



### `reviews`

| `Column name`                     	| `Data Type` 	| `Details`    	|
|---------------------------------	|-----------	|------------	|
| id                              	| integer   	| null:false 	|
| user_id                         	| integer   	| null:false , foreign key	|
| product_id                   	| integer   	| null:false , foreign key	|
| review_header                   	| string    	| null:false 	|
| reviewed_by 	| string    	| null:false  	|
| rating                          	| integer   	| null:false 	|
| review_body                     	| text      	| null:false 	|
| verified_purchase               	| boolean   	| null:false 	|
| created_at                      	| datetime  	| null:false 	|
| updated_at                      	| datetime  	| null:false 	|

* user_id references user table primary key
* product_id references products table primary key

### Bonus : `transaction_history`

| `Column name`      	| `Data Type` 	| `Details`    	|
|------------------	|-----------	|------------	|
| id               	| integer   	| null:false 	|
| shopping_cart_id 	| integer   	| null:false 	|
| user_id          	| integer   	| null:false 	|
| product_id       	| integer   	| null:false 	|
| rating_filter    	| integer   	| ????       	|
| saved_for_later  	| integer   	| ????       	|
| created_at            | datetime  	| null:false 	|
| updated_at            | datetime  	| null:false 	|

### Bonus: `saved_for_later`
| `Column name` 	| `Data Type` 	| `Details`    	|
|-------------	|-----------	|------------	|
| id          	| integer   	| null:false 	|
| purchased   	| boolean   	| null:false 	|
| user_id     	| integer   	| null:false 	|
| product_id  	| integer   	| null:false 	|
| created_at  	| datetime  	| null:false 	|
| updated_at  	| datetime  	| null:false 	|


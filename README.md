# JELP
[Jelp Live](https://jelp-yelp.herokuapp.com/#/)

![Yeep Home](app/assets/images/readme/splash_page_img.png)

Jelp is a clone of Yelp that allows users to search for local businesses. A user can see info about the business as well as review from past guests. If a user would like they can leave a review of thier own and rate the business.

## Technologies

* I used rails for the backend
* PostgresSQL for the database
* React/Redux for the frontend
* CSS for styling

## Fetures

### Search

* A user can search for a business by name
* If there are no matches found displays a list of all businesses

### Google Maps API

![Businesses Index Map](app/assets/images/readme/google_maps_index_image.png)

* Displays a Map of the local area
* Puts a marker on the map for all businesses that match a search

### Business Show

![Businesses Index Map](app/assets/images/readme/business_show_img.png)

* Displays important information of indvidual business
* Displays a map with a marker of the location
* A user can cycle through all the pictures a business has

### Reviews

![Businesses Index Map](app/assets/images/readme/review_form_img.png)

* A logged in user can write/edit/delete a review of a business
* A review has a up to a 5 star rating 
* Rating is used to calculate an an average rating for the business

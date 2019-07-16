# Guide Finder 

Travel experiences application allows travelers to connect with local guides.

Guides create detailed profile including the services/experiences they are offering inclucding cost. 

Guide profiles also include ratings from previous travelers and an option to connect and schedule.

Travelers can access the application until they wish to connect with a guide.

When the traveler clicks the connect with guide button they are prompted to create an account.

After account creation the traveler will have the ability to chat with the guide they want to connect with.

## Home page

  * Navigation bar
  * Google map of travelers current position
  * Search bar with an option to filter(modal)
  * Rotating carousel of nearby giuides
  * Button that maximizes guide profiles
  
## Profile Page

  * Navigation Bar
  * Switch from the carousel to a full screen scroll 
  * Map is hidden
  * Scroll bar with bootstrap cards for guide profiles
  * Each profile card has an image, name, and short text(sales-pitch)
  * Card click expands profile to full screen
  
## Guide Profile

  * Navigation Bar at the top
  * Full page profile layout 
  * Guide fills in information when creating guide account
  * Bottom of profile has a button to contact this guide
  * Traveler clicks on this button to make a connection
  * If traveler has account then chat interface appears
  * Else traveler is prompted to make an account.
  

## API's

google maps (geolocater)
profile apis / survery apis
chat api(socket.io)
payment (fake for now)
ratings/reviews(yelp api)

## Technology 

Socket.io chat capability within the app after traveler sign-up.
MySQL local storage for guides and travelers
Google Maps and related services
bootstrap
Express/Express-handlebars

# to-do

Traveler will be able to create account with google/facebook.
modal pops up to take payment info through paypal or other medium
when the meeting happens the app should notify the guide and traveler that they are close to each other.
Prompt the traveler for a guide rating(modal) after the tour/experience
 
 
 



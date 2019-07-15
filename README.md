# Guide Finder 

Travel experiences application allows travelers to connect with local guides.

Guides create a detailed profile including the services/experiences they are offering inclucding cost. 

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
  
# to-do

  * maps and markers for nearby guides
  * query sql database for lat lng (loop)
  * chat functionality
  *
  
  
  
current work assignments:

Badri: after guide authentication, guide re-direction.

CLiff: queury sql for lat lng append markers to map, integrated the search radius query.

Adam: CHAT(socket.io) 

Julianna: css, 


Guide account has a profile this is where the guide "sells" themselves (profile api).
eventually travelre can create account with google/facebook
modal pops up to take payment info through paypal or other medium
when the meeting happens the app should notify the guide and trveler that they are close to each other.
after the experience when the traveler and guide split prompt the traveler for a guide rating(modal), and the guide gets his payment.

## API's

google maps (geolocater)
profile apis / survery apis
sign in api (google/facebook)
chat api?
payment (fake for now)
ratings/reviews(yelp api)

## Technology 

socket.io chat capability within the app after traveler sign-up.
cookie and express session(sign-in persistence)
bootstrap





 
 
 



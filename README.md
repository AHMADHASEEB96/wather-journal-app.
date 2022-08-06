weather journal app

-Aim - to create a server app to hold and send data to the clientside.  
-description - the app that gets data from an api location like the curent temperature in a certaing zip code location al;ong woth the user data like the feeling under this weather ,and store it in a backend server to retrieve it again to be displayed in the webUI,
-the app depends heavily on using the promises .
-the app uses the asynchronous js to operate the functions in the background to acoid intrupting the peocesses running in the page .

steps illustraion

= in the app.js

-storing the desired elements from the HTML file in variables to be used dynamically
-extrating date informaion like month , time , year
-fetching the api locaion using promoises when clicking on an icon right after inserting the required data ,
-psoting the data obtained form the api to the server using a function thad holds the data .
-updating the data to the ui after getting it from the server

= in the server side

-inside the servet side we install all the dependinceis needed .
-installing the express and making an instance called app out of it .
-installing the cors and using it to cross the bridge betweent th two sides .
-installing the midlleware to parse the info obtained .
-creating a port variable and making the server listen to it .
-storing data got from the api and the user data in an object to later fetch the data from it when -ever the need calls usong app.post
-send the data to the client side when asking for it using app.get

-fore sure lets not forget linking the folder to penetrate the front end files

-i made sure that the { errorMessage.innerText = `please share your feelings with us` }, 500);
errorMessage.style.color = `red`}; error message in line 25 are delayed for half a seconed so the text appears after the async function note before , this message appears when the feelings areatext is empty.
-i have created a whole new styling for the file to test my css skills .
-i have commited some other extra js functions like the alert and the modal window even though the info enclosed in them may not be very accurate , the logic is what i was really testing .
-also the alert poped up when the zip code isnt in the right length
required changes are made

-the api key is is moved to the top with using the const as the keyword instad of the let.
-also the month value is increased by one to macth the real one.

### Rivet Code Challenge

Here is the completed application for the Rivet Coding Challenge.

### To Open the Application

Enter the root folder and use `npm start`

### Notes/Thoughts I had while making this

- I really wanted to add a file upload using S3. The only reason it is not there is because I realized too late that having access to the backend to generate a presigned URL to upload the files was not possible (unless I whipped up an API and self-hosted it just for that purpose).

- My frontend skills took a minute to get refreshed and I realized there were a HANDFUL of items I would have loved put in if I could have accessed my frontend memories earlier. Some of those additional features are the following:
  * Fly out notification when there is a successfull/error when submitting the form
  * Loading icons (who doesn't love a good loading icon?)
  * A functional search/filter/display option; with the addition of more users to make my current application scalable, it would be essential to have something to filter users

- I did not end up using Redux (big regret)

- I did not end up using the endpoint to grab a single user because I found with a single page application, passing the user information along in the props for the ProfileModal and Form component. However, after thinking it through, that is not a good idea because someone could have the profiles open one day, leaving it open for 3 days, and go to edit the user not realizing the content has already been updated since the only time profiles are updates on the main page.
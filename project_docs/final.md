# Team Chi:S2020

# GrowFitness

# Overview:
- Our application is a fitness optimization website. Specifically, this web app differs from traditional fitness websites through its implemented solution. Instead of the typical "design a workout", then save and upload it; our service has the user input what workout routines they already
follow. The site will then make background calculations to recommend exercises that the user should be doing in order to optimize their personal fitness routine. This is different from group Gamma, which is doing an "upload and share" social platform for fitness plans without having an exercise routine recommender system. Again, the main emphasis on our solution is to optimize total body fatigue instead of just becoming a repository for different workouts. Our site also allows users to focus on standard growth patterns 
while ignoring features that facilitate interations between users like: comments, likes, posts and shares. Our way of tracking fitness has no similar solutions currently, which makes this idea a unique approach to the entire model of 
exercise and fitness.
# Team Members:
- Name : Github Username
- Lucas Chagas : DiskMethod
- Nikil Thurai : unixDev197U
- Zachary Williams : ztwilliams26
# UI:
- pre-login home page: is the landing page for the website which the user can look over the web application
- login/registration page: to sign in/register to the account. 
- profile page: that gives a summary of the user. 
- add exercises page: and see what is recommended by moving to the add exercises page to add to the account.
![Home Page](img/homeInterface.png)
![Login Page](img/loginInterface.png)
![Registration Page](img/registrationInterface.png)
![Profile Page](img/profileInterface.png)
![Exercise Page](img/exercisesInterface.png)


# APIs:
- Create: The create endpoint for our project creates a new user with no exercise volume and default values for non-required parameters. 
- Read: The read endpoint for our project reads the user data 
- Update: The update endpoint for our project updates the object with user data 
- Delete: The delete endpoint for our project delete the object

# Database:
## Schema:
- name: String (Required)
- email: String (Required)
- password: String (Required)
- dob: String (Required)
- sex: String (Required)
- weight: Number
- height: String
- exercises: mongoose.Schema.Types.Exercise
- accountedCreated: Date

Passwords are encrypted using bcryptjs

# URL Routes/Mappings:
## Indices

* [Default](#default)

  * [Login To Profile](#1-login-to-profile)
  * [Delete Profile](#2-delete-profile)
  * [Update Profile](#3-update-profile)
  * [Create New Profile](#4-create-new-profile)
  * [Get Profile](#5-get-profile)
  * [Get All Profiles](#6-get-all-profiles)


--------


## Default



### 1. Login To Profile


Used for logging into an existing account. User must provide the name, and password.


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/profiles/login
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"email": "example@gmail.com",
	"password": "password"
}
```



### 2. Delete Profile


Deletes the profile of the currently logged in user.


***Endpoint:***

```bash
Method: DELETE
Type: 
URL: {{URL}}/profiles/delete
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlYjRlZmE5NjM0ZDE0MjA2MDg1MmZlOCIsImlhdCI6MTU4ODkxNjEzNywiZXhwIjoxNTkxNTA4MTM3fQ.DWTcKpiOvyzTTB83WDKQas9MBppySaUrkhkKa_Bx1aI |  |



### 3. Update Profile


Update the profile for the given user. Relies on a bearer token found in either the request header or cookie for authentication. Also, updates must comply with the mongoose database schema.


***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: {{URL}}/profiles/update
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |
| Authorization | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlYjRlZmE5NjM0ZDE0MjA2MDg1MmZlOCIsImlhdCI6MTU4ODkxNjEzNywiZXhwIjoxNTkxNTA4MTM3fQ.DWTcKpiOvyzTTB83WDKQas9MBppySaUrkhkKa_Bx1aI |  |



***Body:***

```js        
{
	"exercises": [
		{
			"name": "Push Ups",
			"rep": 100,
			"date": "5/8/2020"
		}
	]
}
```



### 4. Create New Profile


Add new profile to database. Must be authenticated, and user must provide information like name, email, password, sex, and date of birth.


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/profiles/register
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"name": "Bob Jones",
	"email": "example@gmail.com",
	"password": "password",
	"dob": "1998-07-15",
	"age": 21,
	"weight": 130,
	"height": "5'5",
	"sex": "Male"
}
```



### 5. Get Profile


Retrieves the profile of the currently logged in user. First it checks to see if there is a valid bearer token in the request header, if not it checks cookies.


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/profiles/me
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlYjRlZmE5NjM0ZDE0MjA2MDg1MmZlOCIsImlhdCI6MTU4ODkxNjEzNywiZXhwIjoxNTkxNTA4MTM3fQ.DWTcKpiOvyzTTB83WDKQas9MBppySaUrkhkKa_Bx1aI |  |



### 6. Get All Profiles


Fetch all profiles from the database.


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/profiles
```



---
[Back to top](#cs326-api)
> Made with &#9829; by [thedevsaddam](https://github.com/thedevsaddam) | Generated at: 2020-05-08 01:50:17 by [docgen](https://github.com/thedevsaddam/docgen)

# Division of Labor:
- Zach: Profile page [html], All pages [bootstrap/theme], making sure the UIs are not disjoined, Milestone 1 Write Up, home page and profile page interactivity, heroku setup
- Lucas: Home page [html], Home page [bootstrap], edited/debugged interactivity overall, editing/debugging of API implementation, Authentication implementation
- Nick: Add_Exercises, Login, Registration Page [html], Idea, Final Write Up, Wireframe, sign in page and registration page interactivity, data generation for the add exercises page, API design and route implementation
# Conclusion:
- Our team found this an interesting Group Project to work on. With the effects of COVID-19 it was impossible for our group to come togeather and work on the project, as a result the production cycle had to be extended longer in order for us to make our checkpoints in development. Having a better understanding of typescript as well as back-end implementation would have been extremely useful beforehand. During the design process we learned a lot about the development pipline and for most of the team this was our first time working on a collaborative project this grand. Learning to develop the full stack was also an invaluble experience during the development process.

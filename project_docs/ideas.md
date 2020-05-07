1. Group Chi
2. Grow
3. Team Overview
- Name : Github Username
- Lucas Chagas : DiskMethod
- Nikil Thurai : unixDev197U
- Zachary Williams : ztwilliams26
4. Innovative Idea
- Our idea involves creating a fitness optimization website. Specifically, this web app differs from traditional fitness websites through its implemented solution. Instead of the typical "design a workout", then save and upload it; our service has the user input what workout routines they already
follow. The site will then make background calculations to recommend exercises that the user should be doing in order to optimize their personal fitness routine. This is different from group Gamma, which is doing an "upload and share" social platform for fitness plans without having an exercise routine recommender system. Again, the main emphasis on our solution is to optimize total body fatigue instead of just becoming a repository for different workouts. Our site also allows users to focus on standard growth patterns 
while ignoring features that facilitate interations between users like: comments, likes, posts and shares. Our way of tracking fitness has no similar solutions currently, which makes this idea a unique approach to the entire model of 
exercise and fitness.

-Updates [0.1]-
Data being stored includes: 
- personal information about each individual/profile
- data about the muscle groups for each profile (i.e. volume control)
- List of exercises done (i.e. what increments the counter)

5. Important Components
- There are several distinct components that will be incorporated into the solution. The UI will be a basic interface with a div to enter info about the user, a basic stats sheet, and an area with recommended workouts for the user. The UI will incorporate 
Bootstrap to improve overall readability. This UI also allows users to interact with and edit their saved data in the HTML itself. Each user will have an individual profile, which means that each user will have a profile and the client must connect to a server 
(TypeScript-based) to retrieve relevant info. This design also supports the login/logout feature of the project and authenticates users, allowing them to access their own data.

-Updates [0.1]-
Functionality and Data Representation to include:
- Update/Delete Functions:
    * Update: Exercises Done, Adjusting weekly volume
    * Delete: Delete Accounts, Delete exercises, Refreshing weekly volume
- Data Representation:
    * The add function is for a user, and the user profile is updated with new components of the workout
    * A high level description is each profile will be using a volume counter to track the amount of work each muscle group does per week
    * This innately will incorporate updating the exercise done by the individual, and allows for a CRUD methodology similar to how we have done the counter labs in class
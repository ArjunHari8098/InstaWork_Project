# InstaWorkUI

A POC for internship at instawork Developed by Arjun Haridas email address: - arjunhari8098@gmail.com

#Developed using Angular 11 Nodejs version: - 14.16.0 
#NPM version: - 6.14.11 
#Angular-cli version: - 11.2.4

#<----------------Build configuartions----------------------------->
1.Install nodejs and npm if not installed.
2.Run command npm i @angular/cli to install angular-cli
3.Import project from git repository
4.Open the project directory  in ide like visual studio code
4.open terminal in cmd (not power shell)
5.run command npm install;- this will install all dependencies required)
6.run command npm start or ng serve or ng serve --port <port number>
7.Application will be up on default port or given port as http://localhost:4200 (default port)

  
  #<-------------------Test application------------------------->
  note: - Make sure django project is up and running in port http://127.0.0.1:8000
  1.List Team members page
  ------------------------
  1.User will be able to see all the team members in the database
  2.Click on '+' button on top right corner to add new team members
  3.Click desired user to edit team member details
  note: - Only regular team members can be edited or deleted. Admin team members data cannot be updated.
  
  2.Add Team member
  -----------------
  1. Clicking '+' button in list page navigates to add team memebr page.
  2.Enter all the data required.
  3.Click save button, this navigates to List team member page where newly added member can be seen.
  
  Validations: - All fields in add team memebr page are mandatory and validation is put on this condition.
  
  3.Edit/Delete team member
  ------------------------
  1.Clicking specific team member on list team member page navigates to Edit team member page.
  2.All the data of team memeber will be prefilled in this page.
  3.Make desired change and click save to eddit the team member.
  4.Save navigates to List team member page where edited team member details can be seen.
  5.Click delete to delete team member and navigate to list team memeber page.
  Note: - Edit/Delete is enabled only for regular team members, admin members cannot be updated.

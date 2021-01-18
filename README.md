# [Torre Salary Api](https://torre-salary.web.app/)

Web site  for **Torre Salary**, This is fed by Torre Salary data from our [Api](https://github.com/camackley/torre-salary-backend), with this project We can know what is the aspire salary for us,based average of opportunities offers
__________

## Index

- [Torre Salary Api](#torre-salary-api)
  - [Index](#index)
  - [Project description](#project-description)
  - [Start local server](#start-local-server)
  - [Deploy in the cloud](#deploy-in-the-cloud)
    - [Url Web site](#url-web-site)

__________

## Project description

The project was built with [React.js](https://reactjs.org/)using **npm** as package manager ([packages.json](./package.json)), this project also implements [Bootstrap](https://getbootstrap.com).

The project use [Firebase](https://firebase.google.com/) as hosting for deploy the app in the cloud.
__________

## Start local server

1) In the **CMD** run

        npm run start

## Deploy in the cloud

1) Build the porject

        npm run build

2) Save all changes in [Git](https://git-scm.com/)
3) Merge in the **master** branch
4) Send changes to remote repository

        git push origin <branchs>

5) Deploy Web Site in Firebase Hosting

        firebase deploy --only hosting

### Url Web site

        https://torre-salary.web.app/

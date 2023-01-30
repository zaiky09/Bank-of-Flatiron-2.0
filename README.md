# Bank-of-flatiron
Code challenge Phase 2 week 1

## Description
This is the Phase 2 Code-challenge 1;

      - The web application is intended to allow you to view a list of recent bank transactions, in addition to adding a transaction on the app
      
      - The app uses Semantic UI for styling. If you see any unfamiliar classNames on some components, don't sweat! That's coming from Semantic UI and you shouldn't need to touch it.

## Getting started
To use the content on this repository, ensure you have the following:

      - A computer that runs on either of the following; (Windows 7+, Linux, Mac OS)
      - nodejs 9.0+
      
## Installation
To use this repository on your machine requires some simple steps

### Option One
      - Open a terminal / command line interface on your computer

      -Navigate to a folder you would like to clone the repository

            using cd "folder name"
            
      - Clone the repository by using the following:

            git clone git@github.com:zaiky09/Bank-of-Flatiron-2.0.git

      - Be patient as it creates a copy on your local machine for you.

      - Change directory to the repo folder:

            cd code-challenge-3

      - Open it in Visual Studio Code

            code .
### Option Two
      - On the top right corner of this page there is a button labelled Fork.

      - Click on that button to fork the repository to your own account.

      - Take on the process in Option One above.

      - Remember to replace your username when cloning.

            git clone https://github.com/your-username-here/Bank-of-Flatiron-2.0
      
      - Install required dependencies from npm

            npm install

## Core Deliverables
As a user, I should be able to:

      1. See a table of the transactions.
      2. Fill out and submit the form to add a new transaction. This should add the new transaction to the table as well as post the new transaction to the backend API for persistence.
      3. Filter transactions by typing into the search bar. Only transactions with a description matching the search term should be shown in the transactions table.
## Running the App
      - To run the application, you can use the following steps

      - Run this command to get the backend started:

                 json-server --watch db.json

      - Test your server by visiting this route in the browser:

                  http://localhost:3000/transactions
                  
      - Run npm start in the terminal
      
### AUTHOR
Zamil Mozamil Sheikh

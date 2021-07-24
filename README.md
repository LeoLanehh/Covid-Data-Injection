### Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

<<<<<<< Updated upstream
### User Interface
### `home page`
![image](https://user-images.githubusercontent.com/79630970/124386960-68f3fb00-dd0f-11eb-935d-66e398c78f0e.png)

### `sign in page`
![image](https://user-images.githubusercontent.com/79630970/124386987-7c9f6180-dd0f-11eb-9fe0-508a79dc32a5.png)

### `sign up page`
![image](https://user-images.githubusercontent.com/79630970/124387003-8923ba00-dd0f-11eb-815c-b3485318835a.png)

### `dashboard page`
![image](https://user-images.githubusercontent.com/79630970/124387030-99d43000-dd0f-11eb-9dba-904e2d781898.png)

### Dataset
we use owid-covid-data.csv as our dataset. The csv file is located in public folder.
[covid-19-dataset website](https://github.com/owid/covid-19-data/tree/master/public/data)

### Insert data into database
### `MySQL`
![image](https://user-images.githubusercontent.com/79630970/124370364-68287e00-dca9-11eb-8a00-b767e4eb7e63.png)

### `MongoDB`
![image](https://user-images.githubusercontent.com/79630970/124370373-78d8f400-dca9-11eb-8423-2c137978256c.png)

=======
### Run server
- nodemon server (package.json: "main": "./src/server.js",)
>>>>>>> Stashed changes

### Before prevention
- In backend/server.js -> //app.use(mongoSanitize());(comment this line)

### After prevention
- In backend/server.js -> app.use(mongoSanitize());(uncomment this line)

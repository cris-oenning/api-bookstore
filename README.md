# Development of a Rest API with Node.Js, Express and MongoDB for a bookstore:

With the growing demand for efficient and innovative technological solutions, the development of Rest APIs has become one of the most important activities for the success of many companies. And it was with this objective in mind that the bookstore project was developed, using JavaScript, node.Js, Express, Postman and MongoDb technologies.

The project consists of a Rest API to manage a bookstore, allowing the manipulation of GET, POST, PUT and DELETE requests through Postman. The use of nodemon to do the live reload facilitated the construction of the code, making the development more efficient and agile.

JavaScript was the ideal choice for the development of the Rest API, offering a versatile and easy-to-learn programming language. node.Js, in turn, was essential for the creation of the server, allowing the execution of JavaScript code on the server side.

The Express framework was also used in the project, allowing the creation of routes for handling requests, simplifying the development of the Rest API. The MongoDB database offered a flexible and scalable environment to store the bookstore's data.

Finally, Postman was used to test the Rest API, offering an intuitive interface to manipulate HTTP requests and verify the results obtained. The bookstore project is an example of how the use of modern and efficient technologies can help to create innovative and high quality solutions.

In summary, the bookstore project is a complete Rest API, developed with modern and efficient technologies, which allows the manipulation of data from a bookstore in a simple and intuitive way.

# How the System Works:

The developed system consists of a Rest API that allows the management of a bookstore. Using JavaScript, node.Js, Express, Postman and MongoDB technologies, the Rest API offers a secure and scalable environment to manipulate bookstore data.

By using Postman to send HTTP requests to the API, it is possible to register new books and authors, search for information about existing books and authors, update data and remove books from the bookstore. All information is maintained in the MongoDB database, which provides a flexible and scalable environment for storing and retrieving data.

node.Js is used as the API execution platform, allowing server-side execution of JavaScript code. Express, in turn, is a framework for Node.Js that facilitates the creation of routes to handle HTTP requests, making API development easier and faster.

Finally, nodemon is used to perform the live reload, which allows the developer to make changes to the code and see the result immediately, without the need to restart the server manually.

In summary, the system works as a Rest API that allows the manipulation of data from a bookstore through HTTP requests, using JavaScript, node.Js, Express, Postman and MongoDB technologies.

# What was worked on the system:

* We created a API Rest to register resources such as: books and authors using good practices to divide packages into controllers, models and routers so that the code is clean and organized.

* We use Http verbs to search (GET), register (POST), change (PUT) and delete (DELETE) data accessing and making the connection directly to the database using mongoose, which is a library that makes the connection with MongoDb using it with cloud database.

* We also use the nodemon library to facilitate the live reload in order to update in real time code changes in the construction of the application.

* We use error treatments on the backend side, helping the frontend team to receive this data and be able to handle the error generated for the user.

* We also deal with searches and advanced filters using regex for more dynamic searches and filters, as well as the use of paging routes.

* We use Postman to send requests GET, POST, PUT e DELETE.

# How to use:

Requires Node.Js version 18 (or higher) installed. -> https://nodejs.org/

1. Install Node.Js 18 (or higher) from the official website https://nodejs.org/, if not installed.
2. Install Nodemon, Express, Mongoose and Dotenv library by command in terminal "npm i".
3. Need to put your MongoDb server link of the file ".env" in the root folder.
4. Use the command "npm run dev" in the terminal to connect to the database
5. Use Postman to handle requests GET, POST, PUT e DELETE.

# Expansion:

With this code base, you can further expand the features of this API, as we will always have features to add and refine errors, tests, creating your own features depending on your needs.


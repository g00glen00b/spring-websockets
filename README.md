# Building real time applications using Spring, AngularJS and WebSockets
This application demonstrates how you can write real time applications using Spring 4 and AngularJS. The tutorial to build this application can be found at [http://g00glen00b.be/spring-websockets](http://g00glen00b.be/spring-websockets).

## Installation
You need a JSR-356 compliant web container (like Tomcat 8) and at least Java 7. For building the application you need [Maven](http://maven.apache.org) and [Bower](http://bower.io). For Bower you also have to install Node.js (and NPM).

Building the application can be done by using Maven and Bower. The commands that have to be executed are:

`bower install`

`mvn install`

## Frameworks

### Spring framework
The application is built using [Spring 4](http://spring.io). Spring 4 offers WebSocket integration using a SockJS compliant WebSocket server.

Spring is also used to to divide our application using the MVC pattern and **spring-data-jpa** for the data access layer.

Cross cutting concerns like pushing notifications to the client are made using Spring AOP.

### Dozer
Entities and model objects are mapped using [Dozer](http://dozer.sourceforge.net). Dozer allows you to (deep) map objects one to one. In this case it's used to translate our entity to a model object.

### Bower
Bower is a front-end package manager, in this example I'm using it to import the various front-end libraries we need such as:

* AngularJS
* Showdown (markdown rendering)
* SockJS and STOMP (WebSocket connection)
* Semantic UI (UI library)

### AngularJS
AngularJS allows you to use the MVC pattern on the client (browser) so no DOM interaction is actually needed. It also offers integration with RESTful webservices through the **angular-resource** project.

### Semantic UI
[Semantic UI](http://semantic-ui.com) is a UI library (just like the popular Twitter Bootstrap), but in my opinion it has a pretty good naming convention which also makes it easier to understand and remember.

---
title: Introduction to CORS
category: general
date: 2020-01-22
authorID: 2
pageDescription: >-
  Cross-Origin Resource Sharing is a security measure that defines how two URLs interact with each other. Resource sharing is the act of data exchange between two or more URLs.
pageKeywords: "cors, cors error, introduction to cors, response headers, cors basic, cors extension, 3rd party server, origin, cross origin resource sharing"
cover: >-

tags: ["cors"]
---

## What is CORS?

Cross-Origin Resource Sharing (CORS) is a security measure that defines how two URLs interact with each other. The word origin here simply means the source, where something comes from. The origin of man according to Christians can be traced to God, the origin of clothing can be traced the early years when people wore animal skin, so also the origin of a video can be traced to its YouTube URL or in this case an API request can be traced to your laptop(http://127.0.0.1:5500/index.html or example.com).

Resource sharing is the act of data exchange between two or more urls. For example, you make an api GET request and you get a response back or you click on a link to view cute cat videos and the page opens up with hundreds of videos for you to view, the server on which the cute cat videos are hosted on is sharing its resource with you.

### Same-Origin

By default, APIs run on the same origin, this means that the requests are sent internally and the response is also internal. An example of these are private APIs used by developers working in a company. They can make requests and add to application functionality with these APIs, so both the origin of the request and the response are the same because it is all internal.

However, if we were to make a request from say example.com to index.com/api, the CORS policy would step in and we might get the popular CORS error because the two origins are different and are cross-origin not same-origin.

### Cross-Origin

CORS is a W3C standard that was created as a security measure to safeguard the whole process of requests and response between different URLs. CORS makes it safer by making sure that suspicious or malicious URLs cannot just extract data from you without proper authorization.

Whenever a request goes through successfully, it means the response included a “Access-Control-Allow-Origin” header in it’s response and this is why the request origin gets a response back instead of the CORS policy stepping in and disallowing the communication.

Its like two people that speak different languages trying to communicate. Obviously, there will be a hitch in communication because their languages are different. Person A speaks English and person B speaks Spanish. Person A asks person B for some chocolates but Person C (CORS) steps in and says “hey, person B is Spanish and therefore cannot communicate with you”. In this case, we get the CORS error.

However, person B says “it’s okay CORS, I have a translator (Access-Control-Allow-Origin header) and I can understand him”. Person B uses his translator and understands that person A wants chocolates and gives it to him.

The Access-Control-Allow-Origin header simply specifies that an origin trying to make a request be allowed to get a response in return.

You can check response headers by navigating to network in Chrome Dev tools. Without making a request, the headers will not be visible, however after making a request, the network activity becomes visible.

### Ways to allow CORS

Below two of the most popular ways to allow cors are discussed extensively:

#### 1. CORS chrome extension

This is an extension created by chrome to allow cross origin resource sharing. You can [download it here](https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=en). This extension adds the ‘Access-Control-Allow-Origin’ to the response header automatically thereby allowing different origins communicate with each other. Using the people example, person B using a translator that translates all languages (CORS extension) not just English.

While this may seem great on the surface, it is actually a bit unsafe because once the extension is turned on, all requests will be allowed whether from safe or unsafe URLs if you forget to turn the extension off after use.

Another issue with this solution is since the extension automatically adds an Access-Control-Allow-Origin header to the response, even if the URL in question already has the Access-Control-Allow-Origin header, the extension will still add it’s own and this will result in the double origin header error which means you have two origin headers – one from the extension and the other from the response origin. Imagine person B who is Spanish using a translator to communicate with person D who is also Spanish.

Always remember to turn off the extension after use to avoid this issue.

#### 2. 3rd Party Server

You can make use of a third-party server like the [cors-anywhere app](https://cors-anywhere.herokuapp.com/) to enable cross-origin requests to anywhere. You can use this API by prepending it to the URL a response is expected from. E.g. if you were fetching an api from example.com/api with the `fetch api`, you would use the url this way – **fetch("https://cors-anywhere.herokuapp.com/example.com/api")**.

By doing this, you would first be making a request to the cors-anywhere app which would in turn make a request on to example.com on your behalf, after adding the Access-Control-Allow-Origin header and then send the response back to us. Just like a human translator helping two people from different companies communicate with each other, so also the cors-anywhere app is like a middleman that makes our requests for us.

One of the minor problems is that it takes a slightly longer time to get back a response and this is because we are in a way calling two servers.

This is an introduction to the CORS topic and does not cover every topic, methods for allowing CORS or possible error scenario.

# emotr
An Emoji-only social network

# Front End <-> Back End Protocol
## Get
* ### Response:
  ```Array [Object {"message": String, "_id": Number}, Object {"message": String, "_id": Number}, ...]```

  Sender and Time not yet specified  
## Post
* ### Request
  ```Object {"message": String}```

  Sender not yet specified

* ### Response
  ```Status: OK (200) OR Bad Request (400)```
## Delete
* ### Request
  ```Object {"_id": Number}```

* ### Response
  ```Status: OK (200) OR Bad Request (400)```
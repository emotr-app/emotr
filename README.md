# emotr
An Emoji-only social network

# Front End <-> Back End Protocol
## Get
* ### Response:
  ```Array [Object {"message": String, "_id": Number, "pfp": String}, Object {"message": String, "_id": Number, "pfp": String}, ...]```
  
## Post
* ### Request
  ```Object {"message": String, "pfp": String}```

  Sender not yet specified

* ### Response
  ```Status: OK (200) OR Bad Request (400)```
## Delete
* ### Request
  ```Object {"_id": Number}```

* ### Response
  ```Status: OK (200) OR Bad Request (400)```

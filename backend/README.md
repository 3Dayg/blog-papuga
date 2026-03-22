# Chapter 2 - Node.js, Docker, and MongoDB (Study Notes)

This chapter focused on backend fundamentals with Node.js and a first database integration with MongoDB.

Main outcome: we built simple server-side programs, connected to MongoDB, and exposed data through a small HTTP service.

## Learning Goals

- Understand what Node.js is and why it is useful for backend development.
- Create and run JavaScript files directly on a server/runtime (not in the browser).
- Build basic HTTP services with Node.js core modules.
- Understand Docker concepts and how containers help run services consistently.
- Learn MongoDB basics and query data from a Node.js app.
- Combine Node.js + MongoDB into a working backend endpoint.

## What We Built In This Project

The backend examples are in the `backend/` folder and show a progression from simple scripts to a database-backed service.

1. `backend/helloworld.js`

- First Node.js script.
- Prints a message to the terminal.
- Goal: confirm Node runtime execution and basic script structure.

2. `backend/simpleweb.js`

- Basic HTTP server using Node's `http` module.
- Responds with plain text (`Hello HTTP world!`).
- Goal: understand request/response cycle and listening on host/port.

3. `backend/files.js`

- Uses Node's `fs` module.
- Writes a JSON file (`backend/users.json`) and reads it back.
- Goal: practice server-side file I/O and JSON serialization/deserialization.

4. `backend/webfiles.js`

- HTTP server that reads `backend/users.json` and returns it as JSON.
- Goal: serve structured data over HTTP.

5. `backend/mongodbweb.js`

- Connects to MongoDB with `MongoClient`.
- Reads documents from the `users` collection in the `ch2` database.
- Returns the collection data as a JSON response.
- Goal: integrate database operations into a running backend service.

## MongoDB Concepts Practiced

- MongoDB stores data as documents (BSON/JSON-like objects).
- Databases contain collections, and collections contain documents.
- In Node.js, we use the official `mongodb` package to connect and query.
- Typical flow used in this chapter:
  - Create a `MongoClient` with connection URL.
  - Connect once when server starts.
  - Select database and collection.
  - Run query (`find().toArray()`).
  - Send results as JSON to the client.

## Docker Concepts (Chapter Summary)

Even though Docker config files may be in another chapter/setup, the chapter covered the core ideas:

- A container packages an app and its runtime dependencies.
- Containers make local/dev/test environments more consistent.
- Services like MongoDB can be run in a container instead of installing directly on the host machine.
- This improves reproducibility and helps avoid "works on my machine" issues.

## How To Run The Chapter Examples

From project root:

```bash
node backend/helloworld.js
node backend/files.js
node backend/simpleweb.js
node backend/webfiles.js
node backend/mongodbweb.js
```

When running web servers, open:

- `http://localhost:3000`

For `mongodbweb.js`, ensure MongoDB is running at:

- `mongodb://localhost:27017/`

and that database/collection exist:

- Database: `ch2`
- Collection: `users`

## Key Takeaways For Exam/Review

- Node.js can run backend scripts and servers using JavaScript.
- Core modules (`http`, `fs`) are enough for simple backend services.
- JSON is the bridge between in-memory JavaScript objects, files, and API responses.
- MongoDB integration in Node.js follows connect -> query -> respond.
- Docker helps standardize runtime environments, especially for backend dependencies like databases.

## One-Line Chapter Recap

In this chapter, we learned to build and run Node.js server-side scripts, understood containerization with Docker, explored MongoDB fundamentals, and finished by creating a first working backend service that serves MongoDB data over HTTP.


# Task Management API

A simple task management REST API built with Node.js and Express.  
This project is a learning-focused backend service that demonstrates basic CRUD operations and RESTful routing.

## Features
- Create a task
- Get all tasks
- Mark a task as completed
- JSON-based API
- In-memory data storage (no database yet)

## Tech Stack
- Node.js
- Express.js

## Getting Started

### Prerequisites
- Node.js installed

### Installation
```bash
git clone https://github.com/almostidle/Task-Management-API.git
cd Task-Management-API
npm install
````

### Run the server

```bash
node server.js
```

Server runs on:

```
http://localhost:3000
```

## API Endpoints

### Create a task

```
POST /tasks
```

Body:

```json
{
  "title": "Learn Express"
}
```

### Get all tasks

```
GET /tasks
```

### Mark task as completed

```
PATCH /tasks/:id
```

## Project Status

This project currently uses in-memory storage.
Planned improvements include database integration, validation, and authentication.

## Author
Dushyant

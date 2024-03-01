# Node.js Express Electrician Management API

This project is a Node.js Express API for managing electricians and their assigned sites.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)

## Features

- Create, read, update, and delete electricians.
- Assign electricians to specific sites.
- Distribute available sites among active electricians.
- Flexible API endpoints for managing electricians and sites.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- [MongoDB](https://www.mongodb.com/) (Database)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/gauravmittal54/NodeJs-Express-Electrician-Management-API.git
   
2. Install dependencies:
   ```bash
   cd NodeJs-Express-Electrician-Management-API
   npm install

### Configuration
- Create a .env file in the root directory and set the following environment variables:
   ```bash
   PORT=8000
   MONGO_URL=your_mongo_db_connection_string

- Start the server:
   ```bash
   npm start

The API should now be running on http://localhost:8000.

### API Endpoints
- POST /api/v1/electricians: Create a new electrician.
- ![image](https://github.com/gauravmittal54/NodeJs-Express-Electrician-Management-API/assets/61792468/f524ab4d-70b4-48d4-a8cd-8f3399734de9)

- POST /api/v1/sites: Create a new site.
- ![image](https://github.com/gauravmittal54/NodeJs-Express-Electrician-Management-API/assets/61792468/5a5ec909-c7f7-4d82-93b1-bcf3313d32f8)

- PATCH /api/v1/electricians/assign: Assign available sites to active electricians.
- ![image](https://github.com/gauravmittal54/NodeJs-Express-Electrician-Management-API/assets/61792468/a7f85685-e597-4805-bb8f-6c6decf07505)


### Contributing
If you'd like to contribute to the project, feel free to fork the repository and submit a pull request. Bug reports, feature requests, and suggestions are also welcome.


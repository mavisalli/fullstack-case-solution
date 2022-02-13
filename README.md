🔎 This is a to do list app where you can create a task, update task status or task name.

Technologies and Tools I use:

:ballot_box_with_check: Back-end: Node.js => Express

:ballot_box_with_check: Front-end: React.js

:ballot_box_with_check: Database: PostgreSQL

:ballot_box_with_check: Database: Docker

### Usage

Clone the repository

```
cd desktop
git clone https://github.com/mavisalli/fullstack-case-solution.git
```

Then open the project in ide and follow below commands:

Create environment file (.env) for your config information of your database and fill the content as below

#### Postgres config

```
DB_CONNECTION_STRING= postgresql://username:password@host:port/dbname
```

Install dependencies and run app server

```
cd server
npm install
npm run dev
```

For Frontend

```
cd client
npm install
npm run dev
```

Navigate to http://localhost:3000, if you're seeing to do list, everything is OK!

### Docker Usage

From the root directory of the project, all your have to do is type:

```
docker-compose up

```

Navigate to http://localhost:3000, if you're seeing to do list, everything is OK!

### Swagger

You can access the api documentation by typing http://localhost:5000/api-docs/ in the url.

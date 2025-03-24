# Sales-Admin Panel

Sales-Admin Panel is a Node.js-based backend system built using Express.js, Sequelize ORM, and PostgreSQL. It provides APIs for managing wholesalers, retailers, and stock data.

## Project Structure

```
Sales-Admin Panel
│── src
│   ├── config
│   │   ├── config.json (Sequelize Configuration)
│   │   ├── logger-config.js (Winston Logger Setup)
│   │   ├── server-config.js (Server Configuration)
│   │   ├── index.js (Configuration Entry Point)
│   ├── controllers
│   │   ├── retailer-controller.js (Retailer CRUD Operations)
│   │   ├── stock-controller.js (Stock CRUD Operations)
│   │   ├── wholesaler-controller.js (Wholesaler CRUD Operations)
│   │   ├── index.js (Controller Entry Point)
│   ├── middlewares
│   │   ├── retailer-middleware.js (Retailer Middleware)
│   │   ├── stock-middleware.js (Stock Middleware)
│   │   ├── wholesaler-middleware.js (Wholesaler Middleware)
│   │   ├── index.js (Middleware Entry Point)
│   ├── migrations (Database Migrations)
│   ├── models (Sequelize Models)
│   │   ├── retailer.js
│   │   ├── stock.js
│   │   ├── wholesaler.js
│   │   ├── index.js
│   ├── repositories (Database Repository Layer)
│   ├── routes
│   │   ├── v1
│   │   │   ├── retailer-routes.js (Retailer Routes)
│   │   │   ├── stock-routes.js (Stock Routes)
│   │   │   ├── wholesaler-routes.js (Wholesaler Routes)
│   │   │   ├── index.js (Routes Entry Point for v1)
│   │   ├── index.js (Routes Entry Point)
│   ├── seeders (Database Seeders for Initial Data)
│   ├── services (Business Logic Layer)
│   ├── utils
│   │   ├── common (Common Utility Functions)
│   │   ├── error (Error Handling Utilities)
│   ├── index.js (Application Entry Point)
│── .env (Environment Variables)
│── .gitignore (Ignored Files)
│── package.json (Project Dependencies and Scripts)
│── combined.log (Log Storage)
```
## Prerequisites

Make sure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (v16 or later recommended)
- [PostgreSQL](https://www.postgresql.org/) (Ensure a database is set up)
- [Git](https://git-scm.com/)

## Installation & Setup

1. **Clone the repository**
   ```sh
   git clone https://github.com/PriyanshuDubey123/sales-admin-panel.git
   cd sales-admin-panel
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env` file in the root directory and add:
   ```sh
   PORT=3000
   ```

4. **Set up the database**
   - Create `src/config/config.json` and add the following configuration:
     ```json
     {
       "development": {
         "username": "your_db_user",
         "password": "your_db_password",
         "database": "your_db_name",
         "host": "127.0.0.1",
         "dialect": "postgres"
       }
     }
     ```
   - Update `your_db_user`, `your_db_password`, and `your_db_name` as per your PostgreSQL setup.
   - Run database migrations:
     ```sh
     npx sequelize-cli db:migrate
     ```
   - Seed the database:
     ```sh
     npx sequelize-cli db:seed:all
     ```

5. **Start the server**
   ```sh
   npm run dev
   ```
   The server will start at `http://localhost:3000`.

## API Endpoints

### Retailer Routes
- `POST /api/v1/retailers/` - Create a new retailer
- `GET /api/v1/retailers/:id` - Get a retailer by ID
- `GET /api/v1/retailers/single/wholesaler` - Get retailers with a single wholesaler

### Stock Routes
- `POST /api/v1/stocks/` - Create a new stock entry
- `GET /api/v1/stocks/monthly-turnover` - Get total monthly turnover
- `GET /api/v1/stocks/max-turnover` - Get maximum turnover by wholesaler

### Wholesaler Routes
- `POST /api/v1/wholesalers/` - Create a new wholesaler
- `GET /api/v1/wholesalers/:id` - Get a wholesaler by ID along with a list of retailers associated

- `GET /api/v1/wholesalers/` - Get all wholesalers
- `POST /api/v1/wholesalers/associateretailer` - Associate a retailer with a wholesaler

## Dependencies

The project relies on the following dependencies:
```json
"dependencies": {
  "cors": "^2.8.5",
  "dotenv": "^16.4.7",
  "express": "^4.21.2",
  "http-status-codes": "^2.3.0",
  "pg": "^8.14.1",
  "pg-hstore": "^2.3.4",
  "sequelize": "^6.37.6",
  "winston": "^3.17.0"
}
```

## Dev Dependencies

```json
"devDependencies": {
  "nodemon": "^3.1.9",
  "sequelize-cli": "^6.6.2"
}
```

## Logging
All logs are stored in `combined.log` using Winston logger.

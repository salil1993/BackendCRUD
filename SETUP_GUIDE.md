# BackendCRUD - Complete Setup Guide v2.0

## Project Structure

```
BackendCRUD/
├── src/
│   ├── config/
│   │   ├── database.js           # MySQL connection pool setup
│   │   ├── constants.js          # Application constants
│   │   └── env.js                # Environment configuration
│   ├── middleware/
│   │   ├── errorHandler.js       # Global error handling middleware
│   │   ├── requestLogger.js      # Request logging middleware
│   │   ├── authentication.js     # JWT authentication
│   │   └── validation.js         # Request validation
│   ├── routes/
│   │   ├── userRoutes.js         # User CRUD routes
│   │   ├── productRoutes.js      # Product CRUD routes
│   │   └── index.js              # Route aggregator
│   ├── controllers/
│   │   ├── userController.js     # User business logic
│   │   └── productController.js  # Product business logic
│   ├── services/
│   │   ├── userService.js        # User service layer
│   │   └── productService.js     # Product service layer
│   ├── models/
│   │   ├── User.js               # User data model
│   │   └── Product.js            # Product data model
│   ├── utils/
│   │   ├── response.js           # Standard response formatter
│   │   ├── validators.js         # Input validators
│   │   └── errors.js             # Custom error classes
│   ├── db/
│   │   ├── migrations/
│   │   │   └── migrate.js        # Database migrations
│   │   ├── seeds/
│   │   │   └── seeders.js        # Database seeders
│   │   └── schema.sql            # Database schema
│   └── index.js                  # Application entry point
├── tests/
│   ├── unit/
│   ├── integration/
│   └── setup.js
├── .env.example                  # Environment variables template
├── .gitignore                    # Git ignore rules
├── package.json                  # Dependencies
├── README.md                     # Main documentation
├── SETUP_GUIDE.md               # This file
└── IMPLEMENTATION_CHECKLIST.md   # Implementation progress
```

## Key Files to Create

### 1. src/config/database.js
Handles MySQL connection pooling with mysql2/promise

### 2. src/middleware/errorHandler.js
Centralized error handling for all routes

### 3. src/middleware/authentication.js  
JWT token verification middleware

### 4. src/routes/userRoutes.js
- GET /users (list all)
- GET /users/:id (get by ID)
- POST /users (create)
- PUT /users/:id (update)
- DELETE /users/:id (delete)

### 5. src/routes/productRoutes.js
- Similar CRUD operations for products

### 6. src/controllers/userController.js
Request handlers that use services

### 7. src/services/userService.js
Business logic layer

### 8. src/models/User.js
Data access layer for users

### 9. src/db/schema.sql
Database schema with users and products tables

### 10. src/utils/response.js
Standard API response formatter

## Quick Start

1. **Clone Repository**
   ```bash
   git clone https://github.com/salil1993/BackendCRUD.git
   cd BackendCRUD
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment**
   ```bash
   cp .env.example .env
   # Edit .env with your database credentials
   ```

4. **Create Database**
   ```bash
   mysql -u root -p < src/db/schema.sql
   ```

5. **Run Development Server**
   ```bash
   npm run dev
   ```

6. **Run Tests**
   ```bash
   npm test
   ```

## API Response Format

**Success Response:**
```json
{
  "success": true,
  "data": { ...data... },
  "message": "Operation successful",
  "timestamp": "2026-01-10T10:30:00Z"
}
```

**Error Response:**
```json
{
  "success": false,
  "error": "Error message",
  "code": "ERROR_CODE",
  "timestamp": "2026-01-10T10:30:00Z"
}
```

## Technology Stack

- **Runtime:** Node.js v14+
- **Framework:** Express.js v4.19+
- **Database:** MySQL 5.7+
- **ORM/Driver:** mysql2 v3.11+
- **Authentication:** JWT (jsonwebtoken)
- **Security:** Helmet, bcryptjs
- **Logging:** Morgan
- **Validation:** express-validator, joi
- **Testing:** Jest, Supertest
- **Linting:** ESLint

## Development Scripts

```bash
npm start           # Production server
npm run dev         # Development with nodemon
npm test            # Run tests
npm run test:coverage  # Tests with coverage
npm run lint        # ESLint check
npm run lint:fix    # Auto-fix linting issues
npm run db:migrate  # Run database migrations
npm run db:seed     # Seed database
```

## Next Steps

1. Create config directory and database.js
2. Create middleware files for error handling and authentication
3. Create routes for users and products
4. Create controllers and services
5. Create database models and schema
6. Add comprehensive testing
7. Deploy to production

For more details, see README.md and individual file documentation.

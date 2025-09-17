<h1 align="center">Event Management CRM System</h1>

## 🖌️ Figma Design

[View UI/UX Design on Figma](https://www.figma.com/design/k0NR8pvZVChATeDtL6isPM/CRM-Project---Costumer-Relationship-Managements--?t=v0ReuN4KBYRPZp6T-0)

---

<h2 align="center">🏗️ Tech Stack & Definitions</h2>

### Backend (`crm_backend`)
- <img src="https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white" alt="Node.js" /> **Node.js**: JavaScript runtime for server-side logic.
- <img src="https://img.shields.io/badge/Express.js-000000?logo=express&logoColor=white" alt="Express.js" /> **Express.js**: Minimalist web framework for building REST APIs.
- <img src="https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white" alt="MongoDB" /> **MongoDB**: NoSQL document database for scalable data storage.
- <img src="https://img.shields.io/badge/Mongoose-880000?logo=mongoose&logoColor=white" alt="Mongoose" /> **Mongoose**: ODM for MongoDB, schema-based data modeling.
- <img src="https://img.shields.io/badge/JWT-000000?logo=jsonwebtokens&logoColor=white" alt="JWT" /> **JWT (jsonwebtoken)**: Secure stateless authentication via tokens.
- <img src="https://img.shields.io/badge/Bcrypt-00599C?logo=security&logoColor=white" alt="Bcrypt" /> **Bcrypt**: Password hashing for secure credential storage.
- <img src="https://img.shields.io/badge/Express--Validator-6A1B9A?logo=checkmarx&logoColor=white" alt="Express Validator" /> **Express Validator**: Middleware for validating and sanitizing request data.
- <img src="https://img.shields.io/badge/Helmet-3E4E88?logo=helmet&logoColor=white" alt="Helmet" /> **Helmet**: Sets HTTP headers for security best practices.
- <img src="https://img.shields.io/badge/CORS-0066A1?logo=cloudflare&logoColor=white" alt="CORS" /> **CORS**: Enables cross-origin resource sharing for APIs.

### Frontend (`crm_ui`)
- <img src="https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB" alt="React" /> **React 19**: Component-based UI library for SPA development.
- <img src="https://img.shields.io/badge/React%20Router-CA4245?logo=react-router&logoColor=white" alt="React Router" /> **React Router 7**: Declarative routing for React apps.
- <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white" alt="Tailwind CSS" /> **Tailwind CSS 4**: Utility-first CSS framework for rapid UI development.
- <img src="https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white" alt="Vite" /> **Vite**: Fast build tool and dev server for modern web projects.
- <img src="https://img.shields.io/badge/FontAwesome-528DD7?logo=fontawesome&logoColor=white" alt="FontAwesome" /> **FontAwesome & React Icons**: Icon libraries for UI components.
- <img src="https://img.shields.io/badge/React%20DatePicker-61DAFB?logo=react&logoColor=white" alt="React DatePicker" /> **React DatePicker**: Date selection component for forms.

---

## 📁 Project Structure

```
Event_Management/
  ├── crm_backend/   # Node.js/Express API server
  └── crm_ui/        # React + Vite frontend
```

---

## 🚀 Features (Code-Oriented)

- **User Roles**: Representative, Client, Supplier (role-based access control).
- **JWT Auth**: Secure login, registration, and protected routes.
- **Password Security**: Bcrypt hashing, password reset endpoints.
- **Profile Management**: CRUD operations for user profiles.
- **Event CRUD**: Create, read, update, delete events via REST API.
- **Event Scheduling**: Date range, seat allocation, status tracking.
- **Role Dashboards**: Dynamic dashboards based on user role.
- **Ticket System**: Support ticket creation, assignment, and status updates.
- **API Validation**: All endpoints validated with express-validator.
- **Security**: Helmet, CORS, input sanitization, JWT middleware.

---

## ⚡ Quick Start

### Prerequisites
- Node.js v16+
- MongoDB (local or Atlas)
- npm or yarn

### Installation

```bash
# Clone repo
git clone <repository-url>
cd Event_Management

# Backend setup
cd crm_backend
npm install
cp .env.example .env  # Create .env and set MONGO_URI, JWT_SECRET, PORT

# Frontend setup
cd ../crm_ui
npm install
```

### Running Locally

```bash
# Start backend
cd crm_backend
npm start

# Start frontend
cd ../crm_ui
npm run dev
```
- App: [http://localhost:5173](http://localhost:5173)

---

## 🛠️ API Endpoints (REST)

```http
# Auth
POST   /api/users/register      # Register user
POST   /api/users/login         # Login user
POST   /api/users/reset-password # Reset password

# Users
GET    /api/users               # List users (admin)
GET    /api/users/:id           # Get user by ID
PUT    /api/users/:id           # Update user
DELETE /api/users/:id           # Delete user

# Events
GET    /api/events              # List events
POST   /api/events              # Create event
GET    /api/events/:id          # Get event by ID
PUT    /api/events/:id          # Update event
DELETE /api/events/:id          # Delete event
```

---

## 🔒 Security

- JWT authentication middleware
- Bcrypt password hashing
- Input validation/sanitization
- Helmet HTTP headers
- CORS policy

---

## 🧑‍💻 Development

- **Lint**: `cd crm_ui && npm run lint`
- **Build**: `cd crm_ui && npm run build` (output: `dist/`)

---

## 📄 License

ISC License

---

## 👨‍💻 Contributors

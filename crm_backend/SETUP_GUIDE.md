# Event Management CRM - Authentication Setup Guide

## 🚀 Complete Authentication System with Firebase & Node.js

This guide will help you set up the complete authentication system for your Event Management CRM application.

## 📋 Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or cloud)
- Firebase project
- Gmail account for email service

## 🔧 Backend Setup

### 1. Install Dependencies

```bash
cd crm_backend
npm install
```

### 2. Environment Configuration

Create a `.env` file in the `crm_backend` directory:

```env
# Database Configuration
MONGO_URI=mongodb://localhost:27017/openhubDB

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key_here_make_it_very_long_and_secure

# Server Configuration
PORT=5000
NODE_ENV=development

# Firebase Configuration (Optional - for future Firebase features)
FIREBASE_PROJECT_ID=your_firebase_project_id
FIREBASE_PRIVATE_KEY_ID=your_firebase_private_key_id
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nyour_firebase_private_key_here\n-----END PRIVATE KEY-----\n"
FIREBASE_CLIENT_EMAIL=your_firebase_client_email
FIREBASE_CLIENT_ID=your_firebase_client_id
FIREBASE_AUTH_URI=https://accounts.google.com/o/oauth2/auth
FIREBASE_TOKEN_URI=https://oauth2.googleapis.com/token
FIREBASE_AUTH_PROVIDER_X509_CERT_URL=https://www.googleapis.com/oauth2/v1/certs
FIREBASE_CLIENT_X509_CERT_URL=https://www.googleapis.com/robot/v1/metadata/x509/your_firebase_client_email

# Email Configuration (for password reset)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
EMAIL_FROM=your_email@gmail.com

# Frontend URL
FRONTEND_URL=http://localhost:5173
```

### 3. Start Backend Server

```bash
npm start
# or for development
npm run dev
```

The backend will run on `http://localhost:5000`

## 🎨 Frontend Setup

### 1. Install Dependencies

```bash
cd crm_ui
npm install
```

### 2. Start Frontend Development Server

```bash
npm run dev
```

The frontend will run on `http://localhost:5173`

## 🔐 Authentication Features

### ✅ Implemented Features

1. **User Registration**
   - Three user types: Representative, Client, Supplier
   - Form validation
   - Password hashing with bcrypt
   - Email verification (welcome email)

2. **User Login**
   - JWT token authentication
   - Automatic dashboard redirect for existing users
   - Role-based access control

3. **Password Management**
   - Forgot password functionality
   - Email-based password reset
   - Secure token-based reset process

4. **Security Features**
   - Password hashing
   - JWT token authentication
   - Protected routes
   - Role-based access control
   - Input validation

5. **User Experience**
   - Loading states
   - Error handling
   - Success messages
   - Responsive design

## 🛠️ API Endpoints

### Authentication Routes

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/register` | Register new user | No |
| POST | `/api/login` | User login | No |
| POST | `/api/logout` | User logout | Yes |
| POST | `/api/forgot-password` | Send reset email | No |
| POST | `/api/reset-password` | Reset password | No |
| GET | `/api/verify-token` | Verify JWT token | Yes |
| GET | `/api/profile` | Get user profile | Yes |
| PUT | `/api/profile` | Update user profile | Yes |
| PUT | `/api/change-password` | Change password | Yes |

## 🔄 Authentication Flow

### 1. User Registration
```
User fills form → Validation → Password hashing → Database save → Welcome email → Redirect to login
```

### 2. User Login
```
User enters credentials → Validation → Password verification → JWT generation → Dashboard redirect
```

### 3. Password Reset
```
User requests reset → Email sent → User clicks link → New password form → Password updated → Login redirect
```

### 4. Protected Routes
```
User accesses protected route → Token verification → Role check → Access granted/denied
```

## 🎯 User Types & Access

### Representative
- Full access to all dashboard features
- Can manage events, clients, suppliers
- Access to all tickets and services

### Client
- Limited access to client-specific features
- Can view assigned events and tickets
- Access to client dashboard

### Supplier
- Limited access to supplier-specific features
- Can manage supplier services
- Access to supplier dashboard

## 🚨 Important Security Notes

1. **Environment Variables**: Never commit `.env` files to version control
2. **JWT Secret**: Use a strong, unique JWT secret
3. **Password Policy**: Enforce minimum 8 characters
4. **Email Security**: Use app passwords for Gmail
5. **HTTPS**: Use HTTPS in production

## 🐛 Troubleshooting

### Common Issues

1. **MongoDB Connection Error**
   - Ensure MongoDB is running
   - Check MONGO_URI in .env file

2. **Email Not Sending**
   - Verify Gmail app password
   - Check EMAIL_* variables in .env

3. **JWT Token Issues**
   - Ensure JWT_SECRET is set
   - Check token expiration

4. **CORS Issues**
   - Backend CORS is configured for localhost:5173
   - Update if using different frontend URL

## 📱 Testing the Authentication

1. **Register a new user**
   - Go to `/register`
   - Fill in the form
   - Check email for welcome message

2. **Login**
   - Go to `/login`
   - Use registered credentials
   - Should redirect to dashboard

3. **Password Reset**
   - Go to `/forgotPassword`
   - Enter email
   - Check email for reset link
   - Click link and reset password

4. **Protected Routes**
   - Try accessing `/dashboard` without login
   - Should redirect to login page

## 🎉 Success!

Your authentication system is now fully functional with:
- ✅ Secure user registration and login
- ✅ Password reset functionality
- ✅ Role-based access control
- ✅ Protected routes
- ✅ Email notifications
- ✅ Modern UI with loading states

The system automatically handles user authentication and redirects users to the appropriate dashboard based on their role and authentication status.

<div align="center">
  <img src="https://wild-oasis-annasfaruqui.netlify.app/logo-dark.png">
</div>

<br>

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white) ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) ![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=for-the-badge&logo=reacthookform&logoColor=white) ![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white) ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white) ![Netlify](https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7) ![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white) ![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)

# Wild Oasis

**Wild Oasis** is a personal learning project built to explore modern full-stack web development.  
It simulates a **hotel management application** with both an **employee side** (this project) and a **customer side** (separate project using the same backend).

⚠️ This project is built **for fun, practice, and as a portfolio showcase** of my skills.

## ✨ Features

- **Authentication & Authorization**:

  - Supabase handles authentication.
  - Future plan: introduce admin roles with restricted access to employee management.

- **Dashboard**:

  - View data such as total bookings, check-ins, sales, occupancy rate.
  - View current day's events, like checking in bookings whose duration starts on the current day.
  - View graphs of different stay durations, and also of the total and extra sales.

- **Bookings**:

  - View list of all bookings.
  - View a single booking's details.
  - Create new bookings.
  - Edit bookings.
  - Check-in unconfirmed bookings.
  - Check-out the checked-in booking after their duration is over.

- **Cabins**:

  - View list of all cabins.
  - View a single cabin's details.
  - Create new cabins.
  - Edit cabins.

- **Guests (Customers)**:

  - Add new guests and update guest information.

- **Employees**:

  - Create new employees.
  - (Planned) Only admins will be able to manage employees in the future.

- **Settings**:
  - Configure options like breakfast price that reflect across the app when creating bookings.

## 🛠️ Tech Stack

- **Frontend**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Backend & Database**: [Supabase](https://supabase.com/)
- **Authentication**: Supabase Auth
- **State Management**: [TanStack Query](https://tanstack.com/query/v4)
- **Styling**: [Styled Components](https://styled-components.com/)

## 🚀 Installation & Setup

Follow these steps to run the project locally:

1. **Clone the repository using the commands below**, or download the .zip and extract it.

   ```bash
   git clone <your-repo-https-link>
   cd wild-oasis
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure environment variables**

   - Set up a Supabase project using your email address.
   - Create a .env.local file in the root folder and add:
     ```env
     VITE_SUPABASE_URL=your_supabase_url
     VITE_SUPABASE_KEY=your_supabase_key
     ```

4. **Run the devlopment server**

   ```bash
    npm run dev
   ```

5. **Open the app in your browser** (usually at http://localhost:5173)

## 📌 Project Scope

- This repo contains the employee-facing application of Wild Oasis.
- A separate customer-facing app (connected to the same Supabase backend) has developed as well. [Click here to view the customer facing project](https://github.com/annasfaruqui/the-wild-oasis-guest)

## 📅 Roadmap

- Implement Admin role with special privileges.
- Restrict employee management only to admins.
- Improve styling and polish UI.
- Expand the customer-facing app.

## 📸 Screenshots

Add some screenshots here to make your README more engaging!

## 🙌 Acknowledgement

This project was inspired by and initially built by following the excellent course by Jonas Schmentmann: [Jonas Schmedtmann's Ultimate React and Next.js course](https://www.udemy.com/course/the-ultimate-react-course)

While the foundation of **Wild Oasis** comes from this course, I extended it further by implementing additional features beyond what was taught, such as:

- Creating new bookings.
- Creating new guests.
- Editing bookings and guest details.
- Planning and partially implementing an **Admin role** with privileges to:
  - View all employees.
  - Create new employees.
  - Restrict employees section for non-admin users.

This project wouldn’t exist without the guidance from the course, but the extra features reflect my own practice, experimentation, and personal learning goals.

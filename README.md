# JKUAT Educational Support System

## Project Overview

The JKUAT Educational Support System is a user-friendly web-based platform designed to enhance the academic experience of students at Jomo Kenyatta University of Agriculture and Technology (JKUAT). This system provides a centralized hub for accessing a comprehensive database of past examination papers, learning resources, and video lectures. The platform empowers students to practice, prepare, and excel in their academic pursuits by offering easy access to essential study materials.

## Key Features

- **Past Paper Archive**: A categorized and downloadable collection of past examination papers, enabling students to practice and prepare effectively.
- **Learning Resources**: Access to a wide range of additional learning materials, including textbooks, notes, and research papers.
- **Video Lectures**: Links to video lectures that complement the learning materials and offer visual explanations of complex topics.
- **User-Friendly Interface**: An intuitive and responsive design that ensures ease of use for students and educators.
- **Collaborative Learning**: Features to foster collaboration between students and lecturers, including resource sharing and discussion forums.

## Technologies Used

- **Frontend**: React, Next.js, TypeScript
- **Backend**: Node.js, Express.js
- **Database**: MySQL, Prisma ORM
- **Deployment**: Vercel for frontend, AWS EC2 for backend

## Installation and Setup

### Prerequisites

- **Node.js** (v14 or higher)
- **MySQL** (v8 or higher)
- **Git** (for version control)

### Steps to Setup Locally

1. **Clone the Repository**
   ```bash
   git clone https://github.com/username/jkuat-education-support-system.git
   cd jkuat-education-support-system
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Setup Environment Variables**
   Create a `.env` file in the root directory and add the following environment variables:
   ```bash
   DATABASE_URL="mysql://user:password@localhost:3306/jkuat_db"
   NEXT_PUBLIC_API_URL="http://localhost:3000/api"
   ```

4. **Run Database Migrations**
   ```bash
   npx prisma migrate dev
   ```

5. **Start the Development Server**
   ```bash
   npm run dev
   ```
   The application will be accessible at `http://localhost:3000`.

### Deployment

For deployment, the frontend is hosted on Vercel, while the backend is deployed on AWS EC2. Continuous integration is handled through GitHub Actions.

## Usage

### Accessing Past Papers
1. Log in to the platform using your university credentials.
2. Navigate to the "Past Papers" section.
3. Browse through the available categories and download the desired papers.

### Viewing Learning Resources
1. Go to the "Learning Resources" section.
2. Search for the resource by subject or topic.
3. Download or view the resource directly on the platform.

### Watching Video Lectures
1. Navigate to the "Video Lectures" section.
2. Select a course or topic to view the list of available lectures.
3. Click on the video link to watch the lecture.

## Contribution Guidelines

Contributions are welcome! If you would like to contribute to the project, please follow these steps:

1. Fork the repository.
2. Create a new branch with a descriptive name.
3. Make your changes and test them thoroughly.
4. Commit your changes with a detailed message.
5. Push your branch and submit a pull request.

Please ensure that your code adheres to the project's coding standards and guidelines.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Acknowledgements

This project was developed as part of the academic requirements at Jomo Kenyatta University of Agriculture and Technology. We extend our gratitude to Dr. Kang'ethe Giterere and Ms. Jane Kimani for their invaluable guidance and support throughout the development process.

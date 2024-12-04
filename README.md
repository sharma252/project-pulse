# Pulse 📝🌐

## Overview

Pulse is a dynamic web application that empowers users to share their stories, connect with others, and engage through posts, likes, comments, and shares.

## Features

- **Responsive Design**: Built with React Bootstrap for a sleek, mobile-friendly interface
- **Post Interactions**:
  - Like posts
  - View comments
  - Share posts
- **Intuitive Home Page**:
  - Hero section with call-to-action
  - Latest posts grid
  - Engaging post cards with interaction buttons

## Technologies Used

- **Frontend**:
  - React.js
  - React Bootstrap
  - Lucide React Icons

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or Yarn

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/yourusername/pulse.git
   cd pulse
   ```

2. Install dependencies

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server
   ```bash
   npm start
   # or
   yarn start
   ```

## Project Structure

```
pulse/
│
├── src/
│   ├── components/
│   ├── pages/
│   │   └── Home.js           # Main home page component
│   ├── dummyData/
│   │   └── Dummy.js          # Dummy data for posts
│   └── App.js
│
├── public/
└── package.json
```

## Home Page Components

### Hero Section

- Title: "Pulse"
- Tagline: "Share Your Story, Connect Your World"
- CTA Button: "Start Writing"

### Posts Grid

- Displays latest 5 posts
- Each post card includes:
  - Post image
  - Title
  - Excerpt
  - Interaction buttons (Like, Comment, Share)
  - Author name

## Dummy Data

Currently using dummy data from `Dummy.js`. In a production app, this would be replaced with:

- Backend API calls
- Database integration
- Real user-generated content

## Future Enhancements

- User authentication
- Create/Edit post functionality
- Comments section
- User profiles
- Search and filter posts

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Your Name - youremail@example.com

Project Link: [https://github.com/yourusername/pulse](https://github.com/yourusername/pulse)

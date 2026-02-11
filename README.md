# Mini Message Board 💬

A modern, responsive message board application built with Express.js and EJS templating - The Odin Project

![Message Board](https://img.shields.io/badge/Node.js-Express-green)
![License](https://img.shields.io/badge/license-MIT-blue)

## ✨ Features

- 📱 Fully responsive design (mobile, tablet, desktop)
- 🎨 Modern, professional UI with gradient accents
- 💬 Post and view messages in real-time
- 👤 User avatars with initials
- 📅 Timestamp for each message
- ✏️ Character counter on message form
- 🎯 Card-based layout with hover effects

## 🛠 Technologies Used

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **EJS** - Embedded JavaScript templating
- **Google Fonts (Inter)** - Typography

## 🚀 Local Development

### Installation

1. Clone the repository:
```bash
git clone https://github.com/KhobieMaseko/mini-message-board.git
cd mini-message-board
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

Or with auto-restart:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:3000
```

## 📁 Project Structure

```
mini-message-board/
├── app.js              # Main Express application
├── package.json        # Project dependencies
├── vercel.json         # Vercel deployment config
└── views/              # EJS templates
    ├── index.ejs       # Homepage (messages display)
    └── form.ejs        # New message form
```

## 🌐 Deployment

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. For production deployment:
```bash
vercel --prod
```

Your app will be live at: `https://your-app-name.vercel.app`

### Deploy via Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy"

## 📱 Responsive Breakpoints

- **Mobile**: < 480px
- **Tablet**: 481px - 768px
- **Desktop**: > 768px

## 🎨 Design Features

- **Modern Card Layout**: Messages displayed in elegant cards
- **Gradient Header**: Eye-catching purple gradient
- **Hover Effects**: Interactive cards with smooth transitions
- **User Avatars**: Circular avatars with user initials
- **Empty State**: Beautiful placeholder when no messages exist
- **Form Validation**: Character limits and required fields

## 🔄 Routes

- `GET /` - Display all messages
- `GET /new` - Show new message form
- `POST /new` - Submit new message

## 📝 Learning Objectives

This project demonstrates:
- Express.js setup and routing
- EJS templating and data rendering
- Form handling (GET/POST)
- Responsive CSS Grid layouts
- Modern UI/UX design principles
- Vercel deployment configuration

## 🔮 Future Enhancements

- [ ] Database integration (PostgreSQL)
- [ ] Message editing and deletion
- [ ] User authentication
- [ ] Message reactions/likes
- [ ] Real-time updates with WebSockets
- [ ] Message pagination
- [ ] Search functionality

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Khobie Maseko**
- GitHub: [@KhobieMaseko](https://github.com/KhobieMaseko)

## 🙏 Acknowledgments

- [The Odin Project](https://www.theodinproject.com/) for the excellent curriculum
- Inter font by Google Fonts

---

Built with ❤️ as part of The Odin Project

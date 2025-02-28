# AI Code Reviewer

An AI-powered code reviewer built using the **MERN Stack** and **Google Gemini API**. This project analyzes, reviews, and suggests improvements for code snippets, enhancing development efficiency.

## 🚀 Features
- AI-powered code analysis and suggestions
- Supports multiple programming languages
- Syntax highlighting using **prismjs**
- Seamless API integration with **Google Gemini API**
- Responsive and user-friendly UI with **React**

## 🛠️ Tech Stack
- **Frontend**: React, prismjs, rehype-highlight, axios
- **Backend**: Node.js, Express, cors
- **AI Integration**: Google Gemini API
- **State Management**: React Hooks

## 📦 Installation

### 1. Clone the repository
```bash
git clone https://github.com/Ankan-B10/ai-code-reviewer.git
cd ai-code-reviewer
```

### 2. Install dependencies
#### Backend:
```bash
cd Backend
npm install
npm install express
npm install axios
npm install cors
```
#### Frontend:
```bash
cd frontend
npm create vite@latest
npm install prismjs
npm install rehype-highlight
```

### 3. Set up environment variables
Create a `.env` file in the `server` directory and add your Google Gemini API key:
```env
GOOGLE_GEMINI_API_KEY=your_api_key_here
```

### 4. Run the project
#### Start the backend:
```bash
cd Backend
npm start
npx nodemon
```
#### Start the frontend:
```bash
cd frontend
npm run dev
```

## 🎯 Usage
1. Enter your code snippet in the editor.
2. Select the programming language.
3. Click "Review Code" to get AI-powered feedback.
4. View suggestions and improvements.

## 📷 Screenshots
<img width="1425" alt="SCR-20250301-bdrl" src="https://github.com/user-attachments/assets/addac51a-c2d9-4e5f-aa7f-63d676df7030" />


## 🔥 Contributing
Contributions are welcome! Feel free to fork this repo and submit a pull request.

## 📜 License
This project is licensed under the MIT License.

## ⭐ Acknowledgments
- **Google Gemini API** for AI-powered code review
- **prismjs** and **rehype-highlight** for syntax highlighting


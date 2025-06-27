# Trello Clone ![Status](https://img.shields.io/badge/status-active-brightgreen)

A Trello clone web application built with plain HTML, CSS, and JavaScript. This app allows users to create and manage boards, lists, cards, checklists, and check items, with all data persisted via Trello's public API.

---

## Live Demo

You can try the Trello Clone web application here:

[https://your-demo-url.com](https://your-demo-url.com)

---

##  Features

- Create, edit, and delete lists and cards
- Add checklists and check items to cards
- Rename cards, lists, checklists, check items
- Mark check items as complete/incomplete
- Real-time sync with Trello via public API
- Modular codebase: separate logic for cards, lists, checklists, and API
- Responsive, clean UI

---

## 🛠 Tech Stack

- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **API:** [Trello Public REST API](https://developer.atlassian.com/cloud/trello/rest/)

---

##  Folder Structure

```
trello/
├── lists.js            # List-related logic **main js file**
├── api_calls.js        # Trello API communication logic
├── cards.js            # Card-related logic
├── checklist.js        # Checklist logic
├── checkitems.js       # Check item logic
├── index.html          # Main HTML file
├── styles.css          # Stylesheet
├── ReadMe.md           # Project documentation
```

---

##  Getting Started

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/trello-clone.git
   cd trello-clone
   ```

2. **Open the project in your code editor (e.g., VS Code).**

---

##  Trello API Setup Instructions

1. **Get your Trello API Key:**
   - Go to [Trello API Keys](https://trello.com/app-key)
   - Copy your API Key

2. **Generate a Token:**
   - On the same page, click the link to generate a token
   - Approve access and copy your Token

3. **Find your Board ID:**
   - Open your Trello board in a browser
   - The URL will look like: `https://trello.com/b/{boardId}/board-name`
   - Copy the `{boardId}` part

4. **Configure your credentials:**
   - Create a `config.js` file (or use environment variables as per your setup)
   - Add your API key, token, and board ID as shown in the codebase

---

##  Dependencies / Tools Needed

- Modern web browser (Chrome, Firefox, Edge, etc.)
- [VS Code](https://code.visualstudio.com/) or any code editor
- Internet connection (for Trello API)

---

##  Contribution Guidelines

- Fork the repository and create your branch (`git checkout -b feature/your-feature`)
- Commit your changes (`git commit -am 'Add new feature'`)
- Push to the branch (`git push origin feature/your-feature`)
- Open a Pull Request describing your changes

Please follow the existing code style and add comments where necessary.

---

##  Credits & References

- [Trello API Documentation](https://developer.atlassian.com/cloud/trello/rest/)
- Icons from [Font Awesome](https://fontawesome.com/) (if used)
- Fonts from [Google Fonts](https://fonts.google.com/) (if used)

---

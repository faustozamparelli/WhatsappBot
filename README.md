# WhatsApp AI Bot

A sophisticated WhatsApp bot powered by Groq AI that can automatically respond to messages from specific contacts using the Llama3 model. The project also includes a Next.js web interface for potential future enhancements.

## 🚀 Features

- **AI-Powered Responses**: Uses Groq's Llama3-70b model to generate contextual responses
- **WhatsApp Integration**: Built with whatsapp-web.js for seamless WhatsApp Web connectivity
- **QR Code Authentication**: Easy setup with QR code scanning
- **Contact-Specific Targeting**: Responds only to messages from predefined contacts
- **Italian Language Support**: Optimized for Italian conversations with casual writing style
- **Next.js Web Interface**: Modern web interface for future dashboard features

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm, yarn, pnpm, or bun package manager
- WhatsApp account
- Groq API key

## 🛠️ Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd WhatsappBot
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:

   ```env
   GROQ_API_KEY=your_groq_api_key_here
   ```

4. **Configure contacts**
   Edit the `contacts` object in `main.js` to add your specific contact information:
   ```javascript
   const contacts = {
     contact_name: "phone_number@c.us",
     // Add more contacts as needed
   };
   ```

## 🚀 Usage

### Running the WhatsApp Bot

1. **Start the bot**

   ```bash
   npm start <contact_name>
   ```

   Replace `<contact_name>` with one of the contact names defined in your contacts object.

2. **Scan QR Code**

   - A QR code will appear in your terminal
   - Open WhatsApp on your phone
   - Go to Settings > Connected Devices > Connect Device
   - Scan the QR code displayed in the terminal

3. **Bot is Ready**
   - Once connected, the bot will automatically respond to messages from the specified contact
   - The AI will generate responses in Italian with a casual writing style

### Running the Web Interface

1. **Start the development server**

   ```bash
   npm run dev
   # or
   pnpm dev
   ```

2. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the web interface.

## 🤖 How It Works

1. **Message Reception**: The bot listens for incoming messages from the specified contact
2. **AI Processing**: Messages are sent to Groq's Llama3-70b model with a system prompt that:
   - Sets the AI to respond as if it were you
   - Optimizes for Italian language
   - Uses casual writing style (no capital letters, minimal punctuation)
3. **Response Generation**: The AI generates contextual responses
4. **Message Sending**: Responses are sent back through WhatsApp

## 📁 Project Structure

```
WhatsappBot/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Main page component
├── public/                # Static assets
├── main.js                # Main WhatsApp bot logic
├── package.json           # Dependencies and scripts
├── next.config.mjs        # Next.js configuration
├── tailwind.config.ts     # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration
```

## 🔧 Configuration

### Contact Management

Edit the `contacts` object in `main.js`:

```javascript
const contacts = {
  contact_alias: "phone_number@c.us",
  // Example:
  // friend: "1234567890@c.us",
  // family: "0987654321@c.us",
};
```

### AI Behavior

Modify the system prompt in `getGroqChatCompletion()` function to change the AI's personality and response style.

### Response Timing

Uncomment and adjust the delay mechanism in the message handler to add random delays between responses:

```javascript
const delay = Math.random() * (20 * 60 - 2) + 2; // 2 seconds to 20 minutes
await new Promise((resolve) => setTimeout(resolve, delay * 1000));
```

## 🌐 API Integration

### Groq API

- Model: `llama3-70b-8192`
- Provider: [Groq](https://groq.com/)
- Authentication: API key via environment variable

### WhatsApp Web.js

- Uses remote web version cache for stability
- Handles QR authentication automatically
- Provides message listening and sending capabilities

## 🛡️ Security & Privacy

- **API Keys**: Store your Groq API key securely in environment variables
- **Contact Privacy**: Phone numbers are stored locally in the code
- **Message Privacy**: Messages are sent to Groq AI for processing
- **Authentication**: Uses WhatsApp's official web authentication

## 📄 Dependencies

### Main Dependencies

- `whatsapp-web.js` - WhatsApp Web API client
- `groq-sdk` - Groq AI API client
- `qrcode-terminal` - QR code generation in terminal
- `next` - React framework for the web interface
- `tailwindcss` - Utility-first CSS framework

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

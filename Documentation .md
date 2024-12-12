# 10xAnswers: ChatBot  

**10xAnswers** is an easy-to-integrate, fully customizable, and draggable chatbot component. It allows you to add an intelligent chatbot to your project with minimal effort. Simply configure the prompt and provide the backend URL (or use our hosted service if you don’t want to build the backend yourself).  

---

## Features  

- **Plug-and-Play**: Simple to install and use.  
- **Customizable**: Style the chat window, bot icon, and entire chat component as per your needs.  
- **Markdown Support**: Render rich text, including code blocks and tables, in chatbot responses.  
- **Editable User Input**: Users can modify their questions and easily copy responses.  
- **Connectivity Check**: Includes a custom hook to display internet connectivity status.  
- **Draggable Interface**: Move the chatbot around the screen for optimal user experience and flexible placement.  
- **Backend Support**: Option to use your backend or the provided URL for response generation.  

---

## Preview  
[**View Demo**](https://10x-answers.vercel.app) | [**Source Code**](https://github.com/rajveeerr/10xAnswers)  

---

## Installation  

### CLI  
Run the following command to install dependencies:  
```bash
npm install 10xanswers
```

---

## Usage  

Use the component with the desired props:  
```jsx
import { ChatBot } from '10xanswers';

function App() {
  return (
      <ChatBot 
        backendUrl="https://ask-10x-questions.vercel.app/" 
        prompt="Act as an artist and answer questions in a creative and stylistic manner." 
      />
  );
}

export default App;
```  

**Important**: The provided URL `https://ask-10x-questions.vercel.app/` is a pre-configured backend that works seamlessly with the **10xAnswers** component. Alternatively, you can create your own backend and use its URL.  

---

## Props  

| **Prop Name**            | **Type**   | **Description**                                                                                   |
|--------------------------|------------|---------------------------------------------------------------------------------------------------|
| `chatWindowStyle`        | `Object`   | Inline CSS for chat window styling.                                                              |
| `chatBotIconStyle`       | `Object`   | Inline CSS for bot icon styling.                                                                 |
| `chatComponentStyle`     | `Object`   | Inline CSS for overall chat component styling.                                                   |
| `chatWindowClassName`    | `String`   | Tailwind classes for chat window styling.                                                        |
| `chatBotIconClassName`   | `String`   | Tailwind classes for bot icon styling.                                                           |
| `backendUrl`             | `String`   | Required if no Gemini API is provided. URL for backend to process requests.                      |
| `title`                  | `String`   | Custom title for the chatbot window.                                                             |
| `botIcon`                | `String`   | Path to the bot icon image.                                                                      |
| `userIcon`               | `String`   | Path to the user icon image.                                                                     |
| `stylizeTitle`           | `Object`   | Object with `emphasized` and `normal` strings to style the title.                                |
| `prompt`                 | `String`   | Custom prompt for the chatbot. Use `"none"` for no prompting.                                    |
| `geminiApi`              | `String`   | Required if no `backendUrl` is provided.                                                         |
| `theme`                  | `String`   | Theme for the chatbot (currently not implemented).                                               |
| `draggable`              | `Boolean`  | Enable or disable draggable functionality.                                                       |
| `x`                      | `Number`   | Initial x-position for draggable mode.                                                           |
| `y`                      | `Number`   | Initial y-position for draggable mode.                                                           |
| `description`            | `String`   | Description text for the chatbot.                                                                |
| `cta`                    | `String`   | Call-to-action text for the chatbot button.                                                      |
| `startOpen`              | `Boolean`  | Whether the chatbot window starts open (`true`) or closed (`false`).                             |  

---

## Prompt Guidelines  

- **With Prompt**: If a custom prompt is provided, it will be sent along with the user question.  
- **Without Prompt**: If the prompt is set to `"none"`, only the user question will be sent to the AI model.  

---

## Advanced Usage  

```jsx
<ChatBot 
  backendUrl="https://ask-10x-questions.vercel.app/"
  title="100xQuestions"
  stylizeTitle={{ emphasized: "100x", normal: "Questions" }} // optional but recommended
  botIcon="./logoImg2.jpg"
  userIcon="./logoImg.jpg"
  draggable={true}
  x={500}
  y={625}
  prompt="You're an artist turned developer, respond accordingly"
  description="AI-powered conversational assistant"
  cta="Start Asking"
  startOpen={true}
  chatWindowStyle={{ backgroundColor: '#090909' }} // example to change the background color
/>
```  

---

## Backend Payload  

`POST` requests are sent to the backend with the following payload:  
```json
{
  "method": "POST",
  "body": {
    "contents": [{
      "parts": [{"text": "User question"}]
    }]
  }
}
```

---

## Author  

This component was created by [**Rajveer Singh**](https://x.com/rajveeerrsingh).

const generateGreeting = () => {
  const greetings = [
    "Hello",
    "नमस्ते",
    "שלום",
    "こんにちは",
    "你好",
    "안녕하세요",
    "Bonjour",
    "Hola",
    "Hallo",
    "Привет",
    "Hej",
    "مرحبا",
  ];

  const idx = Math.floor(Math.random() * greetings.length);

  return greetings[idx];
};

export default generateGreeting;

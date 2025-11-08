import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const quickResponses = [
  {
    question: "Quels sont vos services ?",
    answer: "Nous offrons 6 services principaux : Stratégie Digitale, DevOps & FinOps, MLOps, DevSecOps, Agilité & Transformation, et Veille Technologique. Chacun est conçu pour répondre à vos besoins spécifiques en transformation digitale."
  },
  {
    question: "Comment prendre rendez-vous ?",
    answer: "Vous pouvez prendre rendez-vous directement sur notre site en cliquant sur 'Prendre RDV' ou en scrollant vers notre section de prise de rendez-vous. Nous vous répondrons dans les 24h."
  },
  {
    question: "Quels sont vos tarifs ?",
    answer: "Nos tarifs sont personnalisés selon vos besoins. Chaque projet est unique et nous adaptons notre accompagnement. Contactez-nous pour un devis détaillé gratuit."
  },
  {
    question: "Quelle est votre expertise ?",
    answer: "Nous avons plus de 10 ans d'expérience en transformation digitale, avec 50+ clients satisfaits. Notre équipe maîtrise les dernières technologies cloud, IA, et pratiques DevSecOps."
  }
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Bonjour ! Je suis l'assistant virtuel d'Onicom. Comment puis-je vous aider aujourd'hui ?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    setTimeout(() => {
      const matchedResponse = quickResponses.find(qr =>
        text.toLowerCase().includes(qr.question.toLowerCase().split(' ')[0])
      );

      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: matchedResponse
          ? matchedResponse.answer
          : "Merci pour votre message ! Pour une réponse personnalisée, je vous invite à prendre rendez-vous avec notre équipe ou à nous contacter directement. Nous serons ravis d'échanger avec vous !",
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const handleQuickResponse = (question: string) => {
    handleSendMessage(question);
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-600 to-cyan-500 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all z-50 group"
        >
          <MessageCircle size={28} className="group-hover:scale-110 transition-transform" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse" />
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white p-6 flex items-center justify-between">
            <div className="flex items-center">
              <MessageCircle size={24} className="mr-3" />
              <div>
                <div className="font-bold">Assistant Onicom</div>
                <div className="text-sm opacity-90">En ligne</div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 rounded-full p-2 transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-4 rounded-2xl ${
                    message.sender === 'user'
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white'
                      : 'bg-white text-gray-800 shadow-sm'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                  <p className={`text-xs mt-1 ${
                    message.sender === 'user' ? 'text-white/70' : 'text-gray-400'
                  }`}>
                    {message.timestamp.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}

            {messages.length === 1 && (
              <div className="space-y-2 mt-4">
                <p className="text-sm text-gray-600 font-semibold mb-2">Questions fréquentes :</p>
                {quickResponses.map((qr, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleQuickResponse(qr.question)}
                    className="w-full text-left p-3 bg-white rounded-lg text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors shadow-sm"
                  >
                    {qr.question}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="p-4 bg-white border-t border-gray-200">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputValue)}
                placeholder="Écrivez votre message..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500 transition-colors"
              />
              <button
                onClick={() => handleSendMessage(inputValue)}
                disabled={!inputValue.trim()}
                className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white p-3 rounded-full hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

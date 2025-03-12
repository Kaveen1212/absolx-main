import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, User, X } from 'lucide-react';

const Chatbot = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      content: "Hello! I'm your AI marketing assistant. How can I help you today?"
    }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto scroll to bottom when new messages appear
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Focus input on component mount
  useEffect(() => {
    if (isExpanded) {
      inputRef.current?.focus();
    }
  }, [isExpanded]);

  // Add a user message and simulate a bot response
  const handleSendMessage = () => {
    if (input.trim() === '') return;
    
    // Add user message
    setMessages(prev => [...prev, { sender: 'user', content: input }]);
    setInput('');
    
    // Auto-expand the chat history when user sends a message
    if (!isExpanded) {
      setIsExpanded(true);
    }
    
    // Simulate typing indicator and bot response
    setTimeout(() => {
      setMessages(prev => [...prev, 
        { sender: 'bot', content: "Thanks for your message! Our AI is processing your request." }
      ]);
    }, 1000);
  };

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  // Toggle chat history expansion
  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex flex-col items-center pointer-events-none">
      {/* Chat History Overlay (conditionally rendered) */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div 
            className="w-full max-w-4xl mb-2 bg-black/90 border border-absolutex-amber/30 rounded-t-xl overflow-hidden shadow-2xl mx-auto pointer-events-auto"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "300px", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-between items-center p-3 border-b border-absolutex-amber/20">
              <div className="flex items-center gap-2">
                <Bot className="text-absolutex-amber" size={16} />
                <h3 className="font-medium text-absolutex-amber text-sm">Marketing Assistant</h3>
              </div>
              <X 
                size={16} 
                className="cursor-pointer text-gray-400 hover:text-white"
                onClick={() => setIsExpanded(false)}
              />
            </div>
            
            {/* Chat messages */}
            <div className="h-full overflow-y-auto p-3 space-y-3">
              {messages.map((message, index) => (
                <div 
                  key={index} 
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`
                      max-w-[80%] p-2.5 rounded-xl text-sm
                      ${message.sender === 'user' 
                        ? 'bg-absolutex-amber/20 border border-absolutex-amber/30 rounded-tr-none' 
                        : 'bg-black/60 border border-white/10 rounded-tl-none'
                      }
                    `}
                  >
                    <div className="flex items-center gap-1.5 mb-1">
                      {message.sender === 'bot' 
                        ? <Bot size={12} className="text-absolutex-amber" /> 
                        : <User size={12} className="text-absolutex-amber" />
                      }
                      <span className="text-xs text-absolutex-amber">
                        {message.sender === 'bot' ? 'Assistant' : 'You'}
                      </span>
                    </div>
                    <p className="text-white text-sm">{message.content}</p>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Chat input - always visible at bottom */}
      <div className="relative w-full max-w-4xl mx-auto mb-4 px-4 pointer-events-auto" onClick={() => !isExpanded && setIsExpanded(true)}>
        <div className="relative flex items-center">
          {/* Yellow Animated Border Container - No Black */}
          <div className="absolute -inset-[2px] rounded-full overflow-hidden">
            <div className="absolute inset-0 yellow-glow-border"></div>
          </div>
          
          {/* Input field - transparent background so border shows through */}
          <div className="flex items-center w-full bg-black/80 backdrop-blur-md rounded-full pl-5 pr-3 py-2.5 border-transparent relative z-10">
            <Bot size={18} className="text-absolutex-amber mr-3 flex-shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask your AI marketing assistant..."
              className="bg-transparent flex-1 focus:outline-none text-white text-sm"
            />
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleSendMessage}
              className="p-2 rounded-full bg-absolutex-amber text-black ml-2 flex-shrink-0"
            >
              <Send size={16} />
            </motion.button>
          </div>
        </div>
      </div>
      
      {/* Global CSS for animations with pure yellow border */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .yellow-glow-border {
          background: conic-gradient(
            from 0deg,
            #FBBF24 0%, 
            #FFE382 20%, 
            #FACC15 40%, 
            #F59E0B 60%,
            #FBBF24 80%,
            #FFE382 100%
          );
          animation: rotate 4s linear infinite;
          width: calc(100% + 4px);
          height: calc(100% + 4px);
          margin: -2px;
        }

        /* Cut out center shape to create border effect */
        .flex.items-center.w-full {
          box-shadow: 0 0 15px rgba(251, 191, 36, 0.3);
        }
      `}} />
    </div>
  );
};

export default Chatbot;
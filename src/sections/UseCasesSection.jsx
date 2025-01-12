import React from 'react';
    import './UseCasesSection.css';

    const useCases = [
      {
        title: 'Personal Finance',
        description: 'Manage your budget, track expenses, and plan for the future.',
        chat: [
          { speaker: 'user', text: 'What is my current spending?' },
          { speaker: 'bot', text: 'Your current spending is $500 this month.' },
          { speaker: 'user', text: 'Can you show me a breakdown?' },
          { speaker: 'bot', text: 'Sure, here is a breakdown of your spending...' },
          { speaker: 'user', text: 'What are my saving options?' },
          { speaker: 'bot', text: 'Based on your profile, here are some saving options...' },
        ],
      },
      {
        title: 'Small Business',
        description: 'Automate invoicing, manage cash flow, and generate reports.',
        chat: [
          { speaker: 'user', text: 'Create an invoice for client X' },
          { speaker: 'bot', text: 'Sure, creating an invoice for client X...' },
          { speaker: 'user', text: 'What is my current cash flow?' },
          { speaker: 'bot', text: 'Your current cash flow is $2000.' },
          { speaker: 'user', text: 'Show me the latest reports' },
          { speaker: 'bot', text: 'Here are the latest reports for your business...' },
        ],
      },
      {
        title: 'Investment',
        description: 'Get personalized investment advice and track your portfolio.',
        chat: [
          { speaker: 'user', text: 'What are my investment options?' },
          { speaker: 'bot', text: 'Here are some investment options based on your profile...' },
          { speaker: 'user', text: 'How is my portfolio performing?' },
          { speaker: 'bot', text: 'Your portfolio is currently performing at 10%.' },
          { speaker: 'user', text: 'What are the risks?' },
          { speaker: 'bot', text: 'Here are the risks associated with your portfolio...' },
        ],
      },
    ];

    function UseCasesSection() {
      return (
        <div className="use-cases-section">
          <h2 className="section-title">Explore Penny's Versatility</h2>
          <div className="cards">
            {useCases.map((useCase, index) => (
              <div key={index} className="card-container">
                <div className="card-title-container">
                  <h3 className="card-title">{useCase.title}</h3>
                </div>
                <div className="card">
                  <div className="chat-container">
                    {useCase.chat.map((message, msgIndex) => (
                      <div key={msgIndex} className={`chat-message ${message.speaker}`}>
                        {message.text}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    export default UseCasesSection;

import React from 'react';
    import './HowItWorksSection.css';

    const steps = [
      {
        number: '1',
        label: 'Learn',
        tooltip: 'Penny learns from vast datasets and user interactions.',
      },
      {
        number: '2',
        label: 'Adapt',
        tooltip: 'Penny adapts to your unique financial situation and goals.',
      },
      {
        number: '3',
        label: 'Operate 24/7',
        tooltip: 'Penny is available 24/7 to assist you with your financial needs.',
      },
    ];

    function HowItWorksSection() {
      return (
        <div className="how-it-works-section">
          <h2 className="how-it-works-title">How Penny AI Works</h2>
          <div className="steps-container">
            {steps.map((step, index) => (
              <div key={index} className="step">
                <div className="step-number">{step.number}</div>
                <div className="step-label">{step.label}</div>
                <div className="tooltip">{step.tooltip}</div>
                {index < steps.length - 1 && <div className={`line line-${index + 1}`} />}
              </div>
            ))}
          </div>
        </div>
      );
    }

    export default HowItWorksSection;

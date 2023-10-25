import React, { useState } from 'react';
import axios from 'axios';

const BusinessIdeaInput = () => {
  const [userInput, setUserInput] = useState('');
  const [businessPlan, setBusinessPlan] = useState('');

  const openAiApiKey = 'YOUR_API_KEY';

  const generateBusinessPlan = async () => {
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/engines/davinci/completions',
        {
          prompt: userInput,
          max_tokens: 150,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${openAiApiKey}`,
          },
        }
      );

      setBusinessPlan(response.data.choices[0].text);
    } catch (error) {
      console.error('Error generating business plan:', error);
    }
  };

  return (
    <div>
      <h2>Generate Business Plan</h2>
      <textarea
        placeholder="Enter your business idea here..."
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      ></textarea>
      <button onClick={generateBusinessPlan}>Generate Plan</button>
      <div>
        <h3>Generated Business Plan:</h3>
        <p>{businessPlan}</p>
      </div>
    </div>
  );
};

export default BusinessIdeaInput;

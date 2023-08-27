import React, { useState } from 'react';

const Eval = () => {
    const [data, setData] = useState();

    const handleType = (e) => {
        setData(e.target.value);
    };

    const handleSubmit = () => {
        eval(data);
    };

    const placeHtml = () => {
        return {
            __html: "<img onerror='alert(\"Hacked!\");' src='invalid-image' />"
        };
    };

    

    return (
        <>
        <div className='container'>
            <p>Place this code inside input: <code>alert('Hacked')</code></p>
            <input
                type='text'
                name='firstName'
                value={data}
                onChange={(e) => handleType(e)}
            />
            <button onClick={() => handleSubmit()} className="button">Submit</button>{' '}
        </div>

        <div>
            <p>We inserted img inside div using dangerouslySetInnerHTML property and add js code in onerror attribute</p>
            <div dangerouslySetInnerHTML={placeHtml()} /></div>
            ,
            __html: "<img onerror='alert(\"Hacked!\");' src='https://c4.wallpaperflare.com/wallpaper/178/471/787/rick-and-morty-run-the-jewels-vector-graphics-wallpaper-preview.jpg' />"
        </>
    );
};

export default Eval;
import React from 'react';

const Form = props => (
    <form onSubmit={ props.getWeather } className="form">
        <input type="text" name="city" placeholder="City ..." className='input' />
        <input type="text" name="country" placeholder="Country ..." className='input' />
        <button className="btn">Get Weather</button>
    </form>
);

export default Form;
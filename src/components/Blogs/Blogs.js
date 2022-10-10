import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='blogs-section'>
            <h2 className='blogs-heading'>Some Importen Questions Below</h2>
            <div className='blogs'>
                <h2>What is the Purpose of React Router ?</h2>
                <p>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
            </div>
            <div className='blogs'>
                <h2>How dous Context API Works ?</h2>
                <p>React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.</p>
            </div>
            <div className='blogs'>
                <h2>What is useRef ?</h2>
                <p>Ref means just reference, so it can be a reference to anything (DOM node, Javascript value, etc). The useRef hook returns a mutable object which doesn’t re-render the component when it’s changed. Think it like useState, but unlike useState, doesn’t trigger re-render of the component. The object that useRef returns have a current property that can hold any modifiable value</p>
            </div>
        </div>
    );
};

export default Blogs;
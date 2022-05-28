import React from 'react';
import "./Blogs.css"
const Blogs = () => {
    return (
        
        <div className='question m-3 p-4'>
         <h4> Q1: How will you improve the performance of a React Application?</h4>
           <p> </p> <br/>
          <h4>Q2: What are the different ways to manage a state in a React application?</h4>
          <p></p><br/>
            
         <h4>Q3: How does prototypical inheritance work?</h4>
         <p> </p><br/>
        <h4>Q4: Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h4>
        <p>
        </p>
        <br/>
        <h4>Q5: You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h4>
        <p></p>
        <br/>
        <h4>Q6:What is a unit test? Why should write unit tests?</h4>
        <p></p>
        <br/>
        </div>
       
    );
};

export default Blogs;
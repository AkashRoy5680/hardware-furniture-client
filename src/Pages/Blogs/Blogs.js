import React from "react";
import "./Blogs.css";
const Blogs = () => {
  return (
    <div className="question m-3 p-4">
      <h4>
        {" "}
        <b>Q1: How will you improve the performance of a React Application?</b>
      </h4>
      <p>
        <ul>
          <li>1. Keeping component state local where necessary.</li>
          <li>2. Memoizing React components to prevent unnecessary re-renders.</li>
          <li>3. Code-splitting in React using dynamic import()</li>
          <li>4. Windowing or list virtualization in React.</li>
          <li>5. Lazy loading images in React.</li>
        </ul>
      </p>{" "}
      <br />
      <h4>
        <b>
          Q2: What are the different ways to manage a state in a React
          application?
        </b>
      </h4>
      <p>
        There are four main types of state you need to properly manage in your
        React apps:
        <br />
        Local (UI) state – Local state is data we manage in one or another
        component.
        <br />
        Global (UI) state – Global state is data we manage across multiple
        components.
        <br />
        Server state – Data that comes from an external server that must be
        integrated with our UI state.
        <br />
        URL state – Data that exists on our URLs, including the pathname and
        query parameters.
      </p>
      <br />
      <h4>
        <b>Q3: How does prototypical inheritance work?</b>
      </h4>
      <p>
        prototypical inheritance refers to the ability to access object
        properties from another object. We use a JavaScript prototype to add new
        properties and methods to an existing object constructor. We can then
        essentially tell our JS code to inherit properties from a prototype.
        Prototypical inheritance allows us to reuse the properties or methods
        from one JavaScript object to another through a reference pointer
        function. <br />
        All JavaScript objects inherit properties and methods from a prototype:{" "}
        <br /> Date objects inherit from Date.prototype.
        <br /> Array objects inherit from Array.prototype.
      </p>
      <br />
      <h4>
        <b>
          Q4: Why you do not set the state directly in React. For example, if
          you have const [products, setProducts] = useState([]). Why you do not
          set products = [...] instead, you use the setProducts
        </b>
      </h4>
      <p>Dont know the answer. kindly answer this question when you reviewing..</p>
      <br />
      <h4>
        <b>
          Q5: You have an array of products. Each product has a name, price,
          description, etc. How will you implement a search to find products by
          name?
        </b>
      </h4>
      <p>
        For this perspective, I will use filter() of Array to find out the
        matching name of the products.
      </p>
      <br />
      <h4>
        <b>Q6:What is a unit test? Why should write unit tests?</b>
      </h4>
      <p>
        Unit testing is a software development process in which the smallest
        testable parts of an application, called units, are individually and
        independently scrutinized for proper operation. <br />
        Unit testing ensures that all code meets quality standards before it’s
        deployed. This ensures a reliable engineering environment where quality
        is paramount. Over the course of the product development life cycle,
        unit testing saves time and money, and helps developers write better
        code, more efficiently.
      </p>
      <br />
    </div>
  );
};

export default Blogs;

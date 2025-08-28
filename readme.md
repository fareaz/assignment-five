Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

✔ANSWER:  getElementByid:         we can access a single unique id from HTML. 
          getElementByClassName: we can access all elements that have the same class name. 
          querySelector:         we select an HTML tag or class, and it returns only the first matching element among all those with the same tag or class. 
          querySelectorAll:      we select an HTML tag or class, and it returns all those with the same tag or class. 
          
       
2. How do you **create and insert a new element into the DOM**?

✔ANSWER: const newElement=document.createElement('h2')  
         newElement.innerText=" "  
         const parent =  document.getElementById("container")  
         parent.append(newElement)  

3. What is **Event Bubbling** and how does it work?

✔ANSWER:  An event start from the inner element and gradually propagates to the outer parent elements. And it works like a tree.  


4. What is **Event Delegation** in JavaScript? Why is it useful?  

✔ANSWER:  Event Delegation helps to write Event Bubbling in a smart way.   
          it is used for saving memory and writing cleaner code.   

        
5. What is the difference between **preventDefault() and stopPropagation()** methods?

✔ANSWER: preventDefault() দিলে সাধারণত পেইজ রিফ্রেশ আর নেবে না|  
         stopPropagation() event bubbling বন্ধ করে দেয়

- 📂 GitHub Repository :- https://github.com/fareaz/assignment-five.git
- 🌐 *Live Link*         :- https://fareaz.github.io/assignment-five/

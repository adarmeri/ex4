# ex4
<h3>4.2quiz</h3>

banner that contians 2 questions about front end and : 

1.rating scale <br/>
2.empty text box place for answer

Each element is a component<br/>

  
    the Quiz component contians all the other components
    QuizTitle component contians the main Quiz title : How Do You Like Front End?
    Q1 component contians the First question component and the first input component 
        Q1Title component contians the First question : How Much you love front end?
        Q1Input component contians the First question input [rating scale]
        
    Q2 component contians the Second question component and the Second input component
        Q2Title component contians the Second question : What is your favourite front end feature/topic?
        Q2Input component contians the Second question input [empty text box place for answer]   
        
 Screenshot :
 
![4 2](https://user-images.githubusercontent.com/127447852/229296718-8c3cad43-454e-4e05-a3a8-74924486c0bf.png)    
-----------------------------------------------------------
<h3>React-Props</h3>
Main title that describes a story's name "A Tale of Five Balloons" and 5 icons of the 5 balloons with it's owners names<br/>

the interface for the story A Tale of Five Balloons contians three components: <br/>

<p>● Mother component:<br/>&nbsp&nbsp&nbsp;○ Displays:
<br/>&nbsp&nbsp&nbsp&nbsp&nbsp - Wrapper div element 
<br/>&nbsp&nbsp&nbsp&nbsp&nbsp  - H1 title 
<br/>&nbsp&nbsp&nbsp&nbsp&nbsp  - Child's components
<br/>&nbsp&nbsp&nbsp○holds an array of objects  </p>

<p>● Child component:<br/>&nbsp&nbsp&nbsp;○ Displays:
<br/>&nbsp&nbsp&nbsp&nbsp&nbsp - Wrapper div element
<br/>&nbsp&nbsp&nbsp&nbsp&nbsp - child's name in the H3 tag 
<br/>&nbsp&nbsp&nbsp&nbsp&nbsp - Balloon component </p>

<p>● Balloon component:<br/>&nbsp&nbsp&nbsp;○ Displays:
<br/>&nbsp&nbsp&nbsp&nbsp&nbsp - div element with the color of the right balloon </p>
I'm using children prop to pass data between the three components

<br/>
<br/>
<br/>
Screenshot :
 
![Props](https://user-images.githubusercontent.com/127447852/229301117-64434a45-9e72-4419-9a00-cc9c7b0dca0f.png)
-----------------------------------------------------------
<h3>useState</h3>
Label witch shows values between -10 to 10 with two buttons.<br/>
The left button increse the value by one <br/>
The right button decrese the value by one <br/>


<br/>
<br/>
Screenshot :
<br/>
If the counter is 0 the label will be black in color.

![0](https://user-images.githubusercontent.com/127447852/229302877-0bdbbd13-a1ef-4a85-adf0-da28220b4a97.png)


If the counter is negative the label will be a red color.

![under0](https://user-images.githubusercontent.com/127447852/229302880-dac1ac67-d1db-40fb-bc03-5f8bb44d58a5.png)


If the counter is positive the label will be a green color.

![above0](https://user-images.githubusercontent.com/127447852/229302878-879c2f8a-0002-4d5b-a645-a5a43893be9d.png)


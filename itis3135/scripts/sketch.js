function setup() {
    
    createCanvas(600, 400);
  }
  
  function draw() {
    
    background(135, 206, 235);
  
    
    fill("yellow");         
    stroke("orange");       
    strokeWeight(20);      
    circle(550, 50, 100);    
  
   
    noStroke();             
    fill(34, 139, 34);      
    rect(0, 300, 600, 100); 
  
   
    fill(139, 69, 19);     
    rect(250, 220, 100, 80); 
  
    
    fill(165, 42, 42);      
    triangle(250, 220, 350, 220, 300, 170); 
  
   
    fill(101, 67, 33);     
    rect(290, 260, 20, 40); 
  
   
    fill(255);              
    noStroke();             
    ellipse(mouseX, mouseY, 60, 60);     
    ellipse(mouseX - 30, mouseY + 10, 50, 50); 
    ellipse(mouseX + 30, mouseY + 10, 50, 50); 
  
   
    fill(0);               
    textSize(16);           
    text("Welcome to the Interactive Landscape!", 10, 20); 
  }
  
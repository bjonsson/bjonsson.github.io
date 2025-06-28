window.addEventListener("load", function(d) {
    setup(d);})

function setup(d){
    
physicist = document.getElementById("radiobuttons");

physicist.addEventListener('click', function(e) {
    changePicture(e);
})

function changePicture(e) {
    
    picture = 
    document.getElementById("pictures");
    
    var twitterPics = new Array(4);
    
    twitterPics[0] = "images/kakutwitter.jpg";
    twitterPics[1] = "images/greenetwitter.png";
    twitterPics[2] = "images/tysontwitter.jpg";
    twitterPics[3] = "images/einsteintwitter.jpg";

    var physicist = document.getElementsByName("physicist");
        
    //Kaku
    if(physicist[0].checked)
    {
    //change picture
    picture.src = twitterPics[0];
        
    //unhide paragraph
     document.getElementById("kakuDescription").innerHTML = "A professor at City College of New York and CUNY Graduate Center in theoretical physics. Did research in quantum mechanics. Wrote a textbook about quantum field theory, but wrote several more popular speculative books about the possibilities of the future, including one highlighting neurophysics (perhaps due in part to his neuroscientist daughter)."
        
    }
    
    //Greene
    if(physicist[1].checked)
    {
     //change picture
    picture.src = twitterPics[1];
        
    //unhide paragraph
     document.getElementById("kakuDescription").innerHTML = "An expert in string theory who is known for his contributions to understanding the shapes of the dimensions of strings. He has made a guest appearance on <i>The Big Bang Theory</i>, made guest appearances in a couple of movies, and co-founded the World Science Festival. He currently teaches at Columbia University in New York, NY, and has written several popular books about several topics in physics. <p> Please note for your night on the town: Dr. Greene is a vegetarian."
    }
    
    //Tyson
    if(physicist[2].checked)
    {
    //change picture
    picture.src = twitterPics[2];
        
    //unhide paragraph
     document.getElementById("kakuDescription").innerHTML = "Perhaps the most popular science advocate of our time, along with his buddy, Bill Nye the Science Guy. Consistently focused on astrophysics throughout his life. Is now the director of Hayden Planetarium. Has hosted <i>Cosmos: A Spacetime Odyssey</i> and the popular podcast, <i>StarTalk</i>."
    }
    
    //Einstein
    if(physicist[3].checked)
    {
    //change picture
    picture.src = twitterPics[3];
        
    //unhide paragraph
    document.getElementById("kakuDescription").innerHTML = "The most famous physicist in history. Well known for his wit and humor (not to mention the theory of special relativity, which describes how time is relative to motion, and his famous equation arising out of relativity: E = mc^2, which describes how matter and energy can be converted into one another). This, and his discovery of the photoelectric effect prompted a new outpouring of discoveries in what people thought was a dead science, fully explored by Isaac Newton. <p> The price includes the cost of all parts and labor to create a time machine. There is no guarantee our staff will be able to figure out how to travel in time. NO REFUNDS."
    }
} 


//Insert calculator 

var kakuDonation = 1000;
var greeneDonation = 2000;
var tysonDonation = 5000;
var einsteinDonation = 25000000;

var submit = document.getElementById("submit");
submit.addEventListener('click', function(e) {
    calculator(e);
})

function calculator(e){
    
 var physicist = document.getElementsByName("physicist");

//Must be inside function. Calculator will not work otherwise.
var quantity = document.getElementById("nights").value;

    if(quantity<0)
        {
        var theWindow = window.open("", "small", "width= 300, height=220, toolbar=0, status=0");
    
    theWindow.document.write("Must enter a positive number.");
        }
    
         if(isNaN(quantity))
        {
        var theWindow = window.open("", "small", "width= 300, height=220, toolbar=0, status=0");
    
    theWindow.document.write("Must enter a number.");
            
        
        }

    //Main function that passes validation checks.
    if (quantity>=0 && !isNaN(quantity)){
    
    //Kaku
    if(physicist[0].checked)
    {
    //calculate total
    var total = kakuDonation*quantity;
        
    var confirmValue = window.confirm("Are you sure you want to donate $"+total+" for "+quantity+" night(s) out with Michio Kaku?");
        
        
    if (confirmValue){
        var theWindow = window.open("", "small", "width= 300, height=220, toolbar=0, status=0");
    
         theWindow.document.write("Thank you for your donation of $"+total+"!");
    }
    else {
        var theWindow = window.open("", "small", "width= 300, height=220, toolbar=0, status=0");
    
         theWindow.document.write("Your donation was canceled.");
    }
    }
    
    //Greene
    if(physicist[1].checked)
    {
    //calculate total
    var total = greeneDonation*quantity;
    
    var confirmValue = window.confirm("Are you sure you want to donate $"+total+" for "+quantity+" night(s) out with Brian Greene?");
        
        
    if (confirmValue){
        var theWindow = window.open("", "small", "width= 300, height=220, toolbar=0, status=0");
    
         theWindow.document.write("Thank you for your donation of $"+total+"!");
    }
    else {
        var theWindow = window.open("", "small", "width= 300, height=220, toolbar=0, status=0");
    
         theWindow.document.write("Your donation was canceled.");
    }
    }
    
    //Tyson
    if(physicist[2].checked)
    {
    //calculate total
    var total = tysonDonation*quantity;
        
    var confirmValue = window.confirm("Are you sure you want to donate $"+total+" for "+quantity+" night(s) out with Neil deGrasse Tyson?");
        
        
    if (confirmValue){
        var theWindow = window.open("", "small", "width= 300, height=220, toolbar=0, status=0");
    
         theWindow.document.write("Thank you for your donation of $"+total+"!");
    }
    else {
        var theWindow = window.open("", "small", "width= 300, height=220, toolbar=0, status=0");
    
         theWindow.document.write("Your donation was canceled.");
    }
    }
    
    //Einstein
    if(physicist[3].checked)
    {
    //calculate total
    var total = einsteinDonation*quantity;
    
    var confirmValue = window.confirm("Are you sure you want to donate $"+total+" for "+quantity+" night(s) out with Albert Einstein?");
        
        
    if (confirmValue){
        var theWindow = window.open("", "small", "width= 300, height=220, toolbar=0, status=0");
    
         theWindow.document.write("Thank you for your donation of $"+total+"!");
    }
    else {
        var theWindow = window.open("", "small", "width= 300, height=220, toolbar=0, status=0");
    
         theWindow.document.write("Your donation was canceled.");
    }
    }
    
    }
}

}
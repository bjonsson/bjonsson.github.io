function onSubmit(){
    
    
    
    
    //picks up the individual values of the "quiz" radio buttons, which are grouped together
    var q1 = document.forms['quiz']['q1'].value;
    var q2 = document.forms['quiz']['q2'].value;
    var q3 = document.forms['quiz']['q3'].value;
    var q4 = document.forms['quiz']['q4'].value;
    var q5 = document.forms['quiz']['q5'].value;
    
 
    
    //shows the text answers right where <div id="results1"> is in the html file
    var results1 = document.getElementById('results1');
    
    if (eval(q1 == "yes")){
        results1.innerHTML='Great! You should watch all the videos.';}
    else if (eval(q1 == "no")){
        results1.innerHTML='You can get down basic concepts with these videos if you play another instrument, but it will be more work.';}
    else{
        results1.innerHTML='You did not select an answer for this question.';
    }



    var results2 = document.getElementById('results2');
    
    if (eval(q2 == "yes")){
        results2.innerHTML='If you have a guitar, make sure to get it "set up" (that means checked for condition) at your local music store to see if it will be playable. And if you can buy a new one, do your research! There are big differences between electrical and acoustic guitars. A decent beginner guitar with no accessories can be purchased for about $150.';}
    else if (eval(q2 == "no")){
        results2.innerHTML='You can still write a song for the guitar or piano with the One Motion app and work on performance later.';}
    else{
        results2.innerHTML='You did not select an answer for this question.';
    }


    
        var results3 = document.getElementById('results3');
    
    if (eval(q3 == "yes")){
        results3.innerHTML='Great! That will really speed up your ability to write a performable song!';}
    else if (eval(q3 == "no")){
        results3.innerHTML='It may take time for you to build up the finger callouses and muscle memory necessary to hold the guitar well and strum, but if you practice a little every day, you can definitely write and perform a song. Try to find someone who already plays the guitar to help you.';}
    else{
        results3.innerHTML='You did not select an answer for this question.';
    }

    
   
        var results4 = document.getElementById('results4');
    
    if (eval(q4 == "yes")){
        results4.innerHTML='Never underestimate the compounding power of improving a little every day.';}
    else if (eval(q4 == "no")){
        results4.innerHTML='I assume you already know how to play chords!';}
    else{
        results4.innerHTML='You did not select an answer for this question.';
    }

    
    
    
        var results5 = document.getElementById('results5');
    
    if (eval(q5 == "yes")){
        results5.innerHTML='Great! Jonathan lives in Prescott, Arizona, but he might be able to help you remotely.';}
    else if (eval(q5 == "no")){
        results5.innerHTML='Well you know now!';}
    else{
        results5.innerHTML='You did not select an answer for this question.';
    }
    
    
    return false;
}
    
    
    







function onSubmit2(){
    
      var q6 = document.forms['quiz2']['q6'].value;
      var q7 = document.forms['quiz2']['q7'].value;
      var q8 = document.forms['quiz2']['q8'].value;
      var q9 = document.forms['quiz2']['q9'].value;
      var q10 = document.forms['quiz2']['q10'].value;
      var q11 = document.forms['quiz2']['q11'].value;
      var q12 = document.forms['quiz2']['q12'].value;

    
    //shows the text answers right where <div id="results1"> is in the html file
    var results6 = document.getElementById('results6');
    
    if (eval(q6 == "acoustic")){
        results6.innerHTML="It's okay if your guitar doesn't have a button on the bottom to attach a strap. You can either get one drilled in custom made, or you can get a special strap like the ones made for ukuleles if you want to play standing up. Also, classical guitars do not have the option of plugging into an amplifier, but a lot of acoustic ones do if you want to perform before a larger audience.";}
    else if (eval(q6 == "electric")){
        results6.innerHTML='You will need an amplifier to hear your guitar play. Your local guitar shop might sell them used. Cheap ones are about $60. Make sure you get a cable too! And your roommates might appreciate it if you got headphones as well.';}
    else{
        results6.innerHTML='You did not select an answer for this question.';
    }



    var results7 = document.getElementById('results7');
    
    if (eval(q7 == "yes")){
        results7.innerHTML="You'll probably find that the lower is the better for the left hand. Just don't hurt yourself! You might want to experiment with longer lengths on the right.";}
    else if (eval(q7 == "no")){
        results7.innerHTML="I am pretty sure you will struggle to get the right tone with long nails on the left hand. If your nails are long on the right, that's often beneficial.";}
    else{
        results7.innerHTML='You did not select an answer for this question.';
    }


    
        var results8 = document.getElementById('results8');
    
    if (eval(q8 == "yes")){
        results8.innerHTML='Correct!';}
    else if (eval(q8 == "no")){
        results8.innerHTML='Taking it easy when you get sore is the best mindset to have because if you really injure yourself, that can take weeks or maybe even months to fix versus resting for a day.';}
    else{
        results8.innerHTML='You did not select an answer for this question.';
    }

    
   
        var results9 = document.getElementById('results9');
    
    if (eval(q9 == "yes")){
        results9.innerHTML="Yes! Not too much, not too little. You're always looking for the lightest touch for a clean tone.";}
    else if (eval(q9 == "no")){
        results9.innerHTML="You should ask yourself if you're applying more pressure than necessary because you'll become faster and you'll be less prone to soreness and injury.";}
    else{
        results9.innerHTML='You did not select an answer for this question.';
    }

    
    
    
        var results10 = document.getElementById('results10');
    
    if (eval(q10 == "yes")){
        results10.innerHTML="Yes. It means you have to stop and think sometimes, but you'll be faster as you keep practicing.";}
    else if (eval(q10 == "no")){
        results10.innerHTML="You'll improve as an artist if you stop and figure out the easiest way to play a chord or a lick. You'll only get faster as you keep practicing.";}
    else{
        results10.innerHTML='You did not select an answer for this question.';
    }
    
    
        var results11 = document.getElementById('results11');
    
    if (eval(q11 == "sit")){
        results11.innerHTML="Sitting is fine for playing at home or on the lawn, but most people (except classical musicians) perform standing up. If you're just going to play for social media or for yourself, sitting is fine, but you will get more and more accustomed to sitting instead of standing as time goes on.";}
    else if (eval(q11 == "stand")){
        results11.innerHTML="A lot of people recommend standing during practice. I do too. You'll be more ready for a live performance.";}
    else{
        results11.innerHTML='You did not select an answer for this question.';
    }

    
    
    
        var results12 = document.getElementById('results12');
    
    if (eval(q12 == "yes")){
        results12.innerHTML='Perfect!';}
    else if (eval(q12 == "no")){
        results12.innerHTML="You wouldn't want to get discouraged and think you're worse at playing the guitar than you are by having a faulty guitar. I strongly encourage you to get your guitar set up. It usually costs around $30 and can dramatically improve your enjoyment of this craft.";}
    else{
        results12.innerHTML='You did not select an answer for this question.';}
    
    
    return false;
}
    
    
    
    
    
    


    
    
    
    
    
function onSubmit3(){
    
    
    var q13 = document.forms['quiz3']['q13'].value;
    var q14 = document.forms['quiz3']['q14'].value;
    var q15 = document.forms['quiz3']['q15'].value;
    var q16 = document.forms['quiz3']['q16'].value;
    var q17 = document.forms['quiz3']['q17'].value;
    
    
    
        var results13 = document.getElementById('results13');
    
    if (eval(q13 == "yes")){
        results13.innerHTML="That's fantastic! I'm so proud of you for rewriting the song and having it in print.";}
    else if (eval(q13 == "no")){
        results13.innerHTML="If you have rewritten the song, a print copy is really helpful. Maybe a library or an office supply store can help you if you don't have a printer.";}
    else{
        results13.innerHTML='You did not select an answer for this question.';
    }
    
    
        var results14 = document.getElementById('results14');
    
    if (eval(q14 == "yes")){
        results14.innerHTML='Great! It sounds like you followed the directions well.';}
    else if (eval(q14 == "no")){
        results14.innerHTML='Knowing the key is key to getting chords that work well together! Give yourself every advantage and find that key!';}
    else{
        results14.innerHTML='You did not select an answer for this question.';
    }

    
    
    
        var results15 = document.getElementById('results15');
    
    if (eval(q15 == "yes")){
        results15.innerHTML='Great! The chords will almost certainly change as you keep on practicing your song. That is perfectly okay!';}
    else if (eval(q15 == "no")){
        results15.innerHTML='Pick a key and experiment with the chords in that key! Use Google or the Chord Player web app to find out what chords are in a key.';}
    else{
        results15.innerHTML='You did not select an answer for this question.';
    }

    
    
        var results16 = document.getElementById('results16');
    
    if (eval(q16 == "yes")){
        results16.innerHTML="That's exactly what you want to do. Sing while you strum, and once you've got something you like, sing it everywhere! Be a shower diva.";}
    else if (eval(q16 == "no")){
        results16.innerHTML="Don't be shy! Your voice is nothing to be ashamed of, and someone out there wants to hear what you have to sing!";}
    else{
        results16.innerHTML='You did not select an answer for this question.';
    }

    
    
        var results17 = document.getElementById('results17');
    
    if (eval(q17 == "yes")){
        results17.innerHTML="It sounds like you are well on your way! Now it's just going to be a matter of practice!";}
    else if (eval(q17 == "no")){
        results17.innerHTML="It may take a while really find confidence in what notes you want to hit when you sing. It's okay to take more time. You just need more repetitions to find what works.";}
    else{
        results17.innerHTML='You did not select an answer for this question.';
    }
    
    
    
    
    //adding a return to a function ends the function, so do not return anything before the end of the program.
        return false;
        
        
    }
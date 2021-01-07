// SCRIPTS
textbox = document.getElementById('search');

function searchFunction() 
{
    let imput = document.getElementById('search').value;
    window.location.href=`https://google.com/search?q=${imput}`;
}

function randomFunction() 
{
    window.location.href=`https://google.com/search?q=random`;
}

textBox.addEventListener("keyup", function (e) // is not complete..
{ 
  
    // Checking if key pressed is ENTER or not 
    // if the key pressed is ENTER 
    // click listener on button is called 
    if (e.keyCode || e.which == 13) { 
        searchFunction(); 
    } 
});
// SCRIPTS

function searchFunction() 
{
    let imput = document.getElementById('search').value;
    window.location.href=`https://google.com/search?q=${imput}`;
}

function randomFunction() 
{
    window.location.href=`https://google.com/search?q=random`;
}
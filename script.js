


var url = 'https://jsonp.afeld.me/?callback=?&url=http://www.thecocktaildb.com/api/json/v1/1/random.php';

$.getJSON(url, function (data) {
    var output = data.drinks;
    display.innerHTML = 
        `<img src="${output[0].strDrinkThumb}" alt="Picture of ${output[0].strDrink}"></u>
        <span class="text"> <h2><u>${output[0].strDrink}</u></h2>
        <br>
        <p>Category: ${output[0].strCategory}</p> 
        <br>
        <a href="http://thecocktaildb.com/drink/${output[0].idDrink}">Link to recipe</a>
        </span> `;

        suggestion.addEventListener('click', reloadPage) ;

        function reloadPage() {
            window.location.reload();
        }

});
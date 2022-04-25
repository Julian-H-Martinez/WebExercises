(function(){
    "use strict";

    const storeItems = $.ajax("data/inventory.json");

    storeItems
        .done(onSuccess)
        .error(onFailure);

    //  function to show inventory in a table
    function showItem(item){
        return (
            '<tr><td>'
            + item.title
            + '</td><td class="text-center">'
            + item.quantity
            + '</td><td class="text-center"> $'
            + item.price
            + '</td><td class="text-center">'
            + item.categories
            + '</td></tr>'
        );
    }

    //  function for loading a page successfully
    function onSuccess(data){
        let displayItem = '';
        data.forEach(function(item){
            displayItem += showItem(item);
        })
        $('#insertProducts').append(displayItem);
    }

    //  function for failure of loading a page
    function onFailure(data){
        alert("Error loading page; please check request")
    }

    function getInventory(){
        storeItems
            //  can use .success instead of done and .error instead of fail
            .success(onSuccess)
            .error(onFailure)
    }

    $('#refresh').click(function(e){
        e.preventDefault();
        getInventory();
    });
})();
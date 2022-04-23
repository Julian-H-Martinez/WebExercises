(function(){
    "use strict";

    const storeItems = $.ajax("data/inventory.json");

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

    function onSuccess(data){
        let displayItem = '';
        data.forEach(function(item){
            displayItem += showItem(item);
        })
        $('#insertProducts').append(displayItem);
    }

    storeItems.done(onSuccess);
})();
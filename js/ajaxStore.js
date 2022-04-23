(function(){
    "use strict";
    // TODO: Create an AJAX GET request for the file under data/inventory.json
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

    // TODO: Take the data from inventory.json and append it to the products table
    //       HINT: Your data should come back as a JSON object; use console.log() to inspect
    //             its contents and fields
    //       HINT: You will want to target #insertProducts for your new HTML elements

    storeItems.done(onSuccess);
})();
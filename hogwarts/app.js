// if (typeof jQuery == "undefined") {
//     console.log('oops! I still have to link my jQuery properly!');
// } else {console.log('I did it! I linked jQuery and this js file!')};


//////// YEAR 1 ////////

$(() => {
    const $body = $("body")
	$body.append($("<div>").attr("id", "container"))
    const $container = $("#container")
    // console.log($container)

    $container.append($("<h1>").text("Hogwarts"))   
    const $h1 = $("h1")
    // console.log($h1) 

});



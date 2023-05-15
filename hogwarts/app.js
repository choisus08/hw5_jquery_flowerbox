// if (typeof jQuery == "undefined") {
//     console.log('oops! I still have to link my jQuery properly!');
// } else {console.log('I did it! I linked jQuery and this js file!')};


//////// YEAR 1 ////////

$(() => {
    const $body = $("body")
	$body.append($("<div>").attr("id", "container"))
    const $container = $("#container")
    // console.log($container)

    const $h1 = $($container.append($("<h1>").text("Hogwarts")))   
    // console.log($h1) 

//////// YEAR 2 ////////

    const $h2 = $($container.append($("<h2>").text("Susie")))
    const $h3 = $($container.append($("<h3>").text("Gryffindor")))
    const $h4 = $($container.append($("<h4>").addClass("dog").text("Stanely")))
    const $h4_wand = $($container.append($("<h4>").text("Holly Wand with Unicorn Hair Core")))

//////// YEAR 3 ////////

   $container.append($("<ul>").attr("storage", "trunk"))
   const $ul = $("ul")

   $ul.append($("<li>").text("butter beer"))
   $ul.append($("<li>").addClass("secret").text("invisibility cloak"))
   $ul.append($("<li>").addClass("secret").text("magic map"))
   $ul.append($("<li>").addClass("secret").text("time turner"))
   $ul.append($("<li>").addClass("dog").text("leash"))
   $ul.append($("<li>").text("Bertie Bott's Every Flavor [Jelly] Bean"))
   const $lis = $("li")
//    console.log($lis)


});

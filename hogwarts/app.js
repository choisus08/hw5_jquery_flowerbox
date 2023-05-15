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

//////// YEAR 4 ////////

    $container.append($("<h5>").text("Spring 2017"))
    const $h5 = $("h5")

    $container.append($("<table>"))
    const $table = $("table")

    $table.append($("<thead>"))
    const $thead = $("thead")

    $thead.append($("<th>").text("Day"))
    $thead.append($("<th>").text("Classes"))
    const $th = $("th")

    $table.append($("<tr>").addClass("1").append($("<td>").text("Monday")))
    const $tr1 = $(".1")
    $tr1.append($("<td>").text("Herbology, Divination"))

    $table.append($("<tr>").addClass("2").append($("<td>").text("Tuesday")))
    const $tr2 = $(".2")
    $tr2.append($("<td>").text("History of Magic, Charms"))

    $table.append($("<tr>").addClass("3").append($("<td>").text("Wednesday")))
    const $tr3 = $(".3")
    $tr3.append($("<td>").text("Potions, Transfiguration"))

    $table.append($("<tr>").addClass("4").append($("<td>").text("Thursday")))
    const $tr4 = $(".4")
    $tr4.append($("<td>").text("Defense Against the Dark Arts"))

    $table.append($("<tr>").addClass("5").append($("<td>").text("Friday")))
    const $tr5 = $(".5")
    $tr5.append($("<td>").text("Quidditch practice"))


});

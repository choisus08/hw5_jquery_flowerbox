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

//////// YEAR 2 ////////

    $container.append($("<h2>").text("Susie Gordon"))
    const $h2 = $("h2")

    $container.append($("<h3>").text("Gryffindor"))
    const $h3 = $("h3")

    $container.append($("<h4>").addClass("dog").text("Stanely"))
    const $h4 = $("h4")

   $container.append($("<h4>").addClass("wand").text("Holly Wand with Unicorn Hair Core"))
   const $h4_Wand = $(".wand")

//////// YEAR 3 ////////

    $container.append($("<ul>").attr("storage", "trunk"))
    const $ul = $("ul")

    $ul.append($("<li>").text("butter beer"))
        const $li_1 = $("li")
    $ul.append($("<li>").addClass("secret").text("invisibility cloak"))
    $ul.append($("<li>").addClass("secret").text("magic map"))
    $ul.append($("<li>").addClass("secret").text("time turner"))
    $ul.append($("<li>").addClass("dog").text("leash"))
    $ul.append($("<li>").text("Bertie Bott's Every Flavor [Jelly] Bean"))
    const $lis = $("li")
    const $secret = $(".secret")
    
    
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

//////// YEAR 5 ////////

//  Break your wand! (select the element that contains your wand and remove it)
    $h4_Wand.remove() 

// Class was hard! Drink all your butter beer! (remove just the butter beer from your list)   
    $li_1.remove() 

// Get a new wand (add the same element back with new text describing your new wand. Be sure to insert it after your pet in the DOM)
    $container.append($("<h4>").addClass("new").text("Rowan Wand with Dragon Heartstrings Core"))
    const $h4_newWand = $(".new")
    $h4_newWand.insertAfter($h4)

//Make your new wand stand out by adding a color of indigo (or whatever color you like). But do it with magic (jQuery): Don't add this css in your main.css file
    $h4_newWand.css("color", "rgba(21, 86, 21, 0.977)")

// Send your pet on a spy mission (remove your pet from the DOM, put it somewhere else in your HTML). Make sure your pet's leash stays in your trunk 
// (list item with the same class as your pet inside unordered list)
    $container.append($h4)

//////// YEAR 6 ////////

// Nosey roommate alert! hide (use jQuery method hide) to hide all your belongings with a class of secret (give an argument of 'slow' - to see this function in action)
// Nosey roommate falls asleep 2 seconds later (chain the jQuery method delay on your hide method (give argument of at least 2000) 
// to prevent showing your secret elements too soon.
   $secret.delay(2000).hide("slow")

// Use jQuery method show to reveal all of your belongings with a class of secret (give an argument of 'slow' - to see this function in action)
    $secret.show("slow")

// add the class cabbage to your pet's leash. Do not replace your pet's leash's original class. Your pet, which also has the same class should remain unaffected
    $("li.dog").addClass("cabbage")

//////// YEAR 7 ///////

// Update your class schedule to read 'Fall 2018'
    $h5.text("Fall 2018")

// Celebrate by buying more butter beer! Append a list item with the text 'Butter beer' as the first list item inside your unordered list with the value of trunk
    $ul.prepend($("<li>").text("Butter beer"))

// Whoops! You broke your trunk when you stood on it while singing karaoke. Get a new storage container for your stuff; 
// replace the unodered list's property of trunk with a new property of chest
    $ul.attr("storage", "chest")


});

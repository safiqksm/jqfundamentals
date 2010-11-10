$(function(){

// Just tap these into fireBug's console to test them out... 
// Available - https://github.com/rmurphey/jqfundamentals/blob/master/exercises/sandbox.html

// selecting

  // 1. Select all of the div elements that have a class of "module".
  var $modules = $(".modules");

  // 2. Come up with three selectors that you could use to get the third item in the #myList unordered list. Which is the best to use? Why?
  var $myList3rdItem1 = $("#myList li").eq(2);
  var $myList3rdItem2 = $("#myList #myListItem"); // most efficient - goes straight to the item through the #id dom selector
  var $myList3rdItem3 = $("#myList li:contains('List item 3')");
  
  // 3. Select the label for the search input using an attribute selector.
  var $getSearchInputText = $("#search input:text");

  // 4. Figure out how many elements on the page are hidden (hint: .length).
  var numberOfHiddenElements =  $(":hidden").length;
  
  // 5. Figure out how many image elements on the page have an alt attribute.
  var findImagesWithOutAlt = $("img[alt='']").length;
  
  // 6. Select all of the odd table rows in the table body.
  var selectOddTableRows = $("#fruits tr:odd"); 

// tranversing

  // 1. Select all of the image elements on the page; log each image's alt attribute.
  $("img").each(function(){
    var eachImageAlt = $(this).attr("alt");
    console.log(eachImageAlt); 
  });

  // 2. Select the search input text box, then traverse up to the form and add a class to the form.
  var $nearestSearchForm = $getSearchInputText.closest("form");    
  $nearestSearchForm.addClass("hello");

  // 3. Select the list item inside #myList that has a class of "current" and remove that class from it; add a class of "current" to the next list item.  
  $("#myList .current")
    .removeClass("current") 
    .next("li")
    .addClass("current");
  
  // 4. Select the select element inside #specials; traverse your way to the submit button.  
  $("#specials")
    .find("select")
    .parent("li")
    .next("li")
    .find("input:submit");

  // 5. Select the first list item in the #slideshow element; add the class "current" to it, and then add a class of "disabled" to its sibling elements.
  $("#slideshow")
    .find("li")
    .eq(0)
    .addClass("current")
    .nextAll("li")
    .addClass("disabled");

// manipulation

  // 1. Add five new list items to the end of the unordered list #myList. Hint: for (var i = 0; i<5; i++) { ... }
  for (var i=0; i<5; i++) {
    $("#myList").append("<li>new item"+ i +"</li>");
  }


  
  
  
  });
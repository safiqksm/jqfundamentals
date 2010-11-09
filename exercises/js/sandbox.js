$(function(){

  var $modules = $(".modules");
  
  var myList3rdItem1 = $("#myList li").eq(2);
  var myList3rdItem2 = $("#myList #myListItem"); // most efficient - goes straight to the item through the #id dom selector
  var myList3rdItem3 = $("#myList li:contains('List item 3')");
  
  
  var getSearchInputText = $("#search input:text");
  var numberOfHiddenElements =  $(":hidden").length;
  var findImagesWithOutAlt = $("img[alt=""]").length;
  
  var selectOddTableRows = $("#fruits tr:odd"); 
});
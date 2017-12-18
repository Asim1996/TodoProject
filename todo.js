// var li=document.querySelectorAll("li");
// li.addEventListener("click",function(){
// 	this.forEach(function(li){
// 		{
// 	console.log("li clicked");
// }
// })
// //code pen
//Using Plain Js
// var input = document.querySelector("input[type='text']");
// var ul = document.querySelector("ul");
// var faplus=document.querySelector("fa-plus");
// var li;

// ul.addEventListener("click", function(e) {
//   if (e.target && e.target.nodeName == "LI") {
//     e.target.classList.toggle("completed");
//   } else if (e.target && e.target.nodeName == "SPAN") {
//     li = e.target.parentNode;
//     li.parentNode.removeChild(li);
//   }
// });

// input.addEventListener("keypress", function(event) {
//   var str = this.value;
//   var noveLi = document.createElement("li");
//   noveLi.innerHTML = "<span><i class='fa fa-trash'></i></span> " + str;
//   if (event.which === 13) {
//     ul.appendChild(noveLi);
//     input.value = "";
//   }
// });


// Check Off Specific Todos By Clicking
//Lecture 190 at 9min
//li does not exist when new element are appended so we use $(ul)
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//Click on X to delete Todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
//Done to stop the bubbling effect(parents elements are effected )
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
	}
});

$(".fa-plus").click(function(){
	$("input[type='text'").fadeToggle()
});
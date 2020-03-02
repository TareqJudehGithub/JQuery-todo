
//line-through list item
$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
});

//remove list item:
$("ul").on("click","span", function (event){ 
    
    $(this).parent().fadeOut(1000, function(){ 
        $(this).remove();  
        if ($("li").length === 0){
            $("ul").css({
                boxShadow: "none",
            });
        }     
    });
    event.stopPropagation();   //this prevent event bubbling to other elements.
});

//input key event
const addItems = () => {
    
    $("input[type='text']").on("keypress", function(event){

        const todoText = $(this).val();

        if(event.which === 13 && todoText !== ""){
             //create a new item in the list:
             $("ul").append("<li class='fading-in'><span><i class='far fa-trash-alt' ></i></span>"+" " +todoText +"</li>");
             $(this).val("");        
             $("ul").css({
                boxShadow: "0px 2px 5px rgba(122, 122, 212, 0.486)"
            });
         }
    });
    
    $("button").on("click", function(){
    
         const todoText = $("input[type='text']").val();
         if(todoText !== ""){
            $("ul").append("<li class='fading-in'><span><i class='far fa-trash-alt' ></i></span>"+" " +todoText +"</li>");
            $("input[type='text']").val("");
            $("ul").css({
                boxShadow: "0px 2px 5px rgba(122, 122, 212, 0.486)"
            });
         }  
    });
}
addItems();


//remove all items (clear button):
$("#btn-clear").click(function(){
    $("li").addClass("fading-out");
	$("li").fadeOut(1000, function(){
        $(this).remove();
        $("ul").css({
            boxShadow: "none"
        });
    });
});

//add button hover in/out effects:
 $("#btn-add").on("mouseenter", function(){
     $(this).addClass("btn-hover-color");
 })
 $("#btn-add").on("mouseover", function(){
     $(this).removeClass("btn-hover-color");
 });



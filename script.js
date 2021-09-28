$().ready(() => 
{
	alert('The document is ready!');
});



$('button').on('click', function()
{
	let p = $(this).parent();
	
	$('<input type = "" name = "" placeholder = "">').insertBefore($(this).parent().children("b"));
	$(this).parent().children("input").attr("placeholder", $(this).parent().children().siblings("span").text());
	$(this).parent().children("input").attr("name", $(this).parent().children().siblings("b").text());
	$(this).parent().children("input").attr("type", $(this).parent().attr("data-type"));
	$(this).siblings().remove("span");
	$(this).parent().children("b").remove();
	$(this).parent().children("input").addClass('col-8');
	$(this).replaceWith('<button class="btn btn-dark pull-right">Update</button>');
	
	p.on('click', 'button', function()
	{
		if($(this).text() == "Update")
		{
			console.log($(this).parent().children("input").attr("type"));
			$('<b></b>', {html: $(this).parent().children("input").attr("name")}).insertBefore($(this).parent().children("input"));
			$('<span></span>', {html: " " + $(this).parent().children("input").val()}).insertBefore($(this).parent().children("input"));
			$(this).parent().children("input").remove();
			$(this).replaceWith('<button class="btn btn-dark pull-right">Edit</button>');
		}
		
		if($(this).text() == "Edit")
		{
			$('<input type = "" name = "" placeholder = "">').insertBefore($(this).parent().children("b"));
			$(this).parent().children("input").attr("placeholder", $(this).parent().children().siblings("span").text());
			$(this).parent().children("input").attr("name", $(this).parent().children().siblings("b").text());
			$(this).parent().children("input").attr("type", $(this).parent().attr("data-type"));
			$(this).siblings().remove("span");
			$(this).parent().children("b").remove();
			$(this).parent().children("input").addClass('col-8');
			$(this).replaceWith('<button class="btn btn-dark pull-right">Update</button>');
		}
		
	});
	
});







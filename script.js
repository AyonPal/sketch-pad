var h=20;
var text="Enter number of row: "
$(document).ready(function() {
	makeGrid(h)
	showColor(getRandomColor());
	$('#new').click(function(){
		makeGrid();
		showColor(getRandomColor());
	});
	$('#random').click(function(){
		makeGrid(h);
		showColor('black');
		screenClear();
		showRandomColor();
	});
	$('#trail').click(function(){
		makeGrid(h);
		showColor('black');
		screenClear();
		showTrail();
	});
	$('#clear').click(function(){
		screenClear();
	});
	$('#opacity').click(function(){
		makeGrid(h);
		showColor('black');
		screenClear();
		showOpacity();
	});
});

function makeGrid(rownum){
	if (rownum!=undefined){
		h = rownum;
	}
	else{
		getRow();
	}
	$('.container').remove();
	$('.main').append('<div class="container"></div>')
	var mh=800/h;
	for (i=0;i<h;i++){
		$('.container').append('<ul></ul>')
	}
	for (i=0;i<h;i++){
		$('ul').append('<li></li>')
	}
	$('.container').css({
		'margin-left':'200px',
		'margin-top':'20px',
	})
	$('li').css({display: "inline-block",
		height: mh+"px",
		width: mh+"px",
		'background-color': "black",
		margin:'0',
		padding:'0',
		'list-style-type': 'none',
	});
	$('ul').css({margin:'auto',
		padding:'0',		
		height:mh+'px',
	});
}

function showColor(color){
	$('li').hover(function() {
		$(this).css({'background-color':color});
	});
}
function showRandomColor(){
	$('li').hover(function() {
		$(this).css({'background-color':getRandomColor()});
	});
}
function showTrail(){
	$('li').hover(function(){
		$(this).css({opacity:'0'});		
	}, function(){
		$(this).fadeTo('slow', 1)
	});

}
function showOpacity(){
	$('li').mouseenter(function(){
		var opt = $(this).css('opacity')-0.1;
		$(this).css({opacity:opt});	
	});
}
function screenClear(){
	$('li').css({'background-color':'black',
			'opacity':'1'
	});
}
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


function getRow(){
	i=prompt(text);
	if (i>100||i<2){
		text="Row must be less than 100, greater than 1!"
		getRow();
	}
	else{
		text="Enter number of row: "
		h= i;
	}
}
$(document).ready(function(){
	var socket = io();

	.socket.on('chat message',function(msg)){
		var tiempo = new Date();
		var hora = tiempo.getHours();
		var minuto = tiempo.getMinutes();
		var mensajewsp = $('#m-wassap').val();
		$('.chat-chat').append('<div class="msg"><div class="bubble message-out tail"><div class="message-text"><span class="emojitext">'+mensajewsp+'</span><div class="message-meta"><span class="message-datetime chat-time">'+hora+':'+minuto+'</span></div></div></div></div>');
		
	}

	$('#m-wassap').keyup(function (evt) {
      if (evt.keyCode === 13) {
        socket.emit('chat message', $('#m-wassap').val());
        $('#m-wassap').val('');
      }
    });




// 	$('.msg').click(function(){
// 		$(this).remove();
// 	});

// 	$('.enviar').click(function(){
		
// 	});
// 	// $('#m-wassap').keypress(function(e){

// 	// 	if(e.which == 13) {

// 	// 				$(this).val('');
// 	//     }
// 	// });
// 	$('.spnborrar').click(function(){
// 		$(this).remove();
// 	});
// var cont =0;
// 	$('.msg').click(function(){
// 		cont++;
// 		if(cont%2){
// 			$(this).append('<span class="spnborrar">x</span>');
// 		}else{
// 			$('.spnborrar').remove();
// 		}
// 	});

});
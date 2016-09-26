$(document).ready(function(){
	  var text = '';
              if(window.getSelection){
                text = window.getSelection();
              }else if(document.getSelection){
                text = document.getSelection();
              }else if(document.selection){
                text = document.selection.createRange().text;
              }
              text=text.toString();
              $(".here").(text);
});
        



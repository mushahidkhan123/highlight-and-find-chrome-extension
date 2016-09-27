       $(document).ready(function() {

       chrome.storage.sync.get("word", function(item) {
      if(!chrome.runtime.error) {
        var url = "http://www.dictionaryapi.com/api/v1/references/collegiate/xml/" + item.word + "?key="+"1c1da8dc-8eb7-4d32-b2ca-aaa60ca078d8";
        $.get(url, function(data){
             var listOfDefinitions = data.getElementsByTagName("dt");
            for(var i = 0; i < listOfDefinitions.length; i++) {
              alert();
              console.log(listOfDefinitions);
              var a= listOfDefinitions[i].substr(1, listOfDefinitions[i].indexOf(':'));
              console.log("apples     " +a);
             // $(".titleArea ul").append("'<li>"+listOfDefinitions[i][0].innerHTML +"</li>'");
            }


                     });
          //document.getElementById("here").innerHTML = items.word;
      }
    });

}); 
 
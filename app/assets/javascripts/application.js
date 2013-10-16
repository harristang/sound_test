// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .



$(document).ready(function() {

  SC.initialize({
    client_id: '37ca2ed016b56b315340cc3ef594205a'
  });

  $("#sound_search").submit(function() {
    
    var searchVal = $("#search").val();
    getTracks(searchVal, function(tracks) {

      //$.post($("#sound_search").attr("action"), { tracks: tracks}, null, "script");
      var listHtml = "";

      for(var i = 0; i < tracks.length; i++)
      {

        listHtml += "<div id='track-" + i.toString() + "'></div>"
        // listHtml += "<div draggable='true' style='padding: 10px;margin-bottom:10px;border:1px solid black;width:300px'>";
        // listHtml += tracks[i].title;
        // listHtml += "</div>"

      }

      $("#song_list").html(listHtml);
      
      for(var i = 0; i < tracks.length; i++)
      {
          var trackDivID = "#track-" + i.toString();
          //console.log(trackDivID);
          SC.oEmbed(tracks[i].permalink_url, {color: "ff0066"}, $(trackDivID)[0]);
      }
      
    });

    return false;

  });

});

function getTracks(search, cb)
{ 
  SC.get('/tracks', { q: search, limit: 10}, function(tracks) {
      cb(tracks);
  });  
}





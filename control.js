/**
 * Created by huangchaohui on 16/4/16.
 */
$(function(){
  $("#barrage-add").click(function(){
    $(this).css("display","none");
    $("#barrage-send").css("display","block");
  });
  $("#barrage-send").click(function(){
    $(this).css("display","none");
    $("#barrage-add").css("display","block");
  });
  $("#personal").click(function(){
    window.location.href='person_page.html';
  });
  $("#team").click(function(){
    window.location.href='team_page.html';
  });
});
function check_team(){
  $("#group_alert").css("display","block");
}
function group_cancel(){
  $("#group_alert").css("display","none");
}
function check_personal(){
  $("#personal_alert").css("display","block");
}
function personal_cancel(){
  $("#personal_alert").css("display","none");
}

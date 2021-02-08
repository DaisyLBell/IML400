 $(document).ready(function() {
  
  // put javascript code here
  
  $(function () {
        $(".image-Stack1, .image-Stack2, .image-Stack3, .image-Stack4, .image-Stack5, .image-Stack6, .image-Stack7,.image-Stack8, .image-Stack9, .image-Stack10,.image-Stack11, .image-Stack12, .image-Stack13, .image-Stack14, .image-Stack15, .image-Stack16, .image-Stack17, .image-Stack18, .image-Stack19, .image-Stack20, .image-Stack21, .image-Stack22").draggable();
    });
     
$(".open").on("click", function(){
$(".popup, .popupContent").addClass("active");
});
     
$(".close, .popup").on("click", function(){
$(".popup, .popupContent").removeClass("active");
});
  
});
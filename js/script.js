$(document).ready(function(){
      $('.single-item').slick({
      	dots: true,
      	infinite: true,
      	speed: 500,
      	slidesToShow: 1,
        slidesToScroll: 1,
      	autoplay: true,
  		autoplaySpeed: 2000
      });
       $('.promotion-single-item').slick({
      	dots: true,
      	infinite: true,
      	speed: 500,
      	slidesToShow: 1,
        slidesToScroll: 1,
      	autoplay: true,
  		autoplaySpeed: 2000
      });
       $('.slider-for1').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav1'
      });
      $('.slider-nav1').slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          speed: 500,
          asNavFor: '.slider-for1',
          dots: true,
          centerMode: true,
          focusOnSelect: true,
          slide: 'div'
      });
      $('.slider-for2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav2'
      });
      $('.slider-nav2').slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          speed: 500,
          asNavFor: '.slider-for2',
          dots: true,
          centerMode: true,
          focusOnSelect: true,
          slide: 'div'
      });
      $('.slider-for3').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav3'
      });
      $('.slider-nav3').slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          speed: 500,
          asNavFor: '.slider-for3',
          dots: true,
          centerMode: true,
          focusOnSelect: true,
          slide: 'div'
      });   
    });
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();

function myFunction() {
  var name = document.getElementById("author").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("comment").value;
  // Returns successful data submission message when the entered information is stored in database.
  var dataString = 'name1=' + name + '&email1=' + email + '&message1=' + message + '&action=select';
  if (name == '' || email == '' || message == '') {
    alert("Please Fill All Fields");
  } else {
  // AJAX code to submit form.
    $.ajax({
      type: "POST",
      url: "ajaxjs.php",
      data: dataString,
      cache: false,
      success: function(res) {
      
      }
    });
  }
  return false;
}
// function yourFunction() {
//   var dataString = 'name1=' + 'name' + '&email1=' + 'email' + '&message1=' + 'message';
//   $.ajax({
//       type: "POST",
//       url: "ajaxjs.php",
//       data: dataString,
//       cache: false,
//       success: function(html) {
//         alert(html);
//       }
//   });

// }
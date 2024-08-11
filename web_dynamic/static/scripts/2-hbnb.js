$(document).ready(function () {
  $('input[type=checkbox]').click(function () {
    const myListName = [];
    const myId = [];
    $('input[type=checkbox]:checked').each(function () {
      myListName.push($(this).attr('data-name'));
      myId.push($(this).attr('data-id'));
    });
    if (myListName.length === 0) {
      $('.amenities h4').html('&nbsp;');
    } else {
      $('.amenities h4').text(myListName.join(', '));
    }
    console.log(myId);
  });
});


$.ajax({
  url: 'http://0.0.0.0:5001/api/v1/status/',
  method: 'GET',
  success: function (json) {
    $('#api_status').addClass('available');
  },
  error: function (error) {
    console.error('Error:', error);
  }
});
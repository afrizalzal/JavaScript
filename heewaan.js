$(document).ready(function () {
  $('.card-body').each(function () {
    $(this).click(function () {
      let hewan = $(this).find('h5').attr('id');
      $('#suara').remove();
      $('#foto').remove();
      if (hewan == 'sapi') {
        $(this).prepend(`<img id="foto" src="sapi.png" class="card-img-top">`);
        $(this).find('.audio').append(`<audio src="sapi.mp3" autoplay id="suara">`);
      } else if (hewan == 'kambing') {
        $(this).prepend(`<img id="foto" src="kambing.png" class="card-img-top">`);
        $(this).find('.audio').append(`<audio src="kambing.mp3" autoplay id="suara">`);
      } else if (hewan == 'kerbau') {
        $(this).prepend(`<img id="foto" src="kerbau.png" class="card-img-top">`);
        $(this).find('.audio').append(`<audio src="kerbau.mp3" autoplay id="suara">`);
      } else if (hewan == 'harimau') {
        $(this).prepend(`<img id="foto" src="harimau.png" class="card-img-top">`);
        $(this).find('.audio').append(`<audio src="harimau.mp3" autoplay id="suara">`);
      } else if (hewan == 'singa') {
        $(this).prepend(`<img id="foto" src="singa.png" class="card-img-top">`);
        $(this).find('.audio').append(`<audio src="singa.mp3" autoplay id="suara">`);
      } else if (hewan == 'gorila') {
        $(this).prepend(`<img id="foto" src="gorila.png" class="card-img-top">`);
        $(this).find('.audio').append(`<audio src="gorila.mp3" autoplay id="suara">`);
      } else if (hewan == 'ayam') {
        $(this).prepend(`<img id="foto" src="ayam.png" class="card-img-top">`);
        $(this).find('.audio').append(`<audio src="ayam.mp3" autoplay id="suara">`);
      } else if (hewan == 'angsa') {
        $(this).prepend(`<img id="foto" src="angsa.png" class="card-img-top">`);
        $(this).find('.audio').append(`<audio src="angsa.mp3" autoplay id="suara">`);
      } else if (hewan == 'merak') {
        $(this).prepend(`<img id="foto" src="merak.png" class="card-img-top">`);
        $(this).find('.audio').append(`<audio src="merak.mpeg" autoplay id="suara">`);
      }
    });
  });
});
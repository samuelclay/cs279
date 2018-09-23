$(document).ready(function() {
  window.HW2 = {};
  HW2.modalOptions = {
    'keyboard': false,
    'backdrop': 'static'
  };
  
  HW2.begin = function() {
    if (window.location.hash.indexOf('skip') != -1) {
      HW2.prepareExperiment();
    } else {
      $('#begin-modal').modal(HW2.modalOptions);
      $('#submit-begin').on("click", function() {
        HW2.prepareDemographicsForm();
      });
    }
  };
  
  HW2.prepareDemographicsForm = function() {
    $('#begin-modal').modal('hide');
    $('#demographics-modal').modal(HW2.modalOptions);
    $("#demographics-submit").on("click", function() {
      HW2.submitDemographicsForm();
    });
  };
  
  HW2.submitDemographicsForm = function() {
    $("#demographics-modal").modal('hide');

    $.ajax({
      'type': "POST",
      'url': '/demographics',
      'data': {
        'name': $("#demographics-name").val()
      },
      'success': function() {
        HW2.prepareExperiment();
      }
    });
  };
  
  HW2.prepareExperiment = function() {
    $("#demographics-modal").modal('hide');
    $("#experiment").show();
  };
  
  HW2.begin();
  
});

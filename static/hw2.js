$(document).ready(function() {
  window.HW2 = {};
  
  HW2.begin = function() {
    $('#begin-modal').modal();
    $('#submit-begin').on("click", function() {
      $('#begin-modal').modal('hide');
      $('#demographics-modal').modal();
      HW2.prepareDemographicsForm();
    });
  };
  
  HW2.prepareDemographicsForm = function() {
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

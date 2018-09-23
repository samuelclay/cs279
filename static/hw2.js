$(document).ready(function() {
  window.HW2 = {};
  
  HW2.prepareDemographicsForm = function() {
    $("#prepare-demographics").on("click", function() {
      HW2.handleDemographicsForm();
    });
  };
  
  HW2.handleDemographicsForm = function() {
    $("#prepare-demographics").hide();
    $("#demographics-form").show();
    $("#demographics-submit").on("click", function() {
      HW2.submitDemographicsForm();
    });
  };
  
  HW2.submitDemographicsForm = function() {
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
    $("#demographics-form").hide();
    $("#experiment").show();
  };
  
  HW2.prepareDemographicsForm();
});
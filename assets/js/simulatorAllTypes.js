/*
	Ajax Method to simulate blindness for all types
*/

$('#simulatorOriginalColor').change(function() {
	var color = $('#simulatorOriginalColor').val();
	$('#simulatorOriginalColor').css('background-color', color);

	$.ajax({
		type: 'post',
		url: 'http://localhost:4000/simulatorAll',
		data: { 'color' : color },

		success: function(data) {
			$('#simulatorProtanomaly').css('background-color', data[0]);
			$('#simulatorProtanopia').css('background-color', data[1]);
			$('#simulatorDeuteranomaly').css('background-color', data[2]);
			$('#simulatorDeuteranopia').css('background-color', data[3]);
			$('#simulatorTritanomaly').css('background-color', data[4]);
			$('#simulatorTritanopia').css('background-color', data[5]);
			$('#simulatorAchromatomaly').css('background-color', data[6]);
			$('#simulatorAchromatopsia').css('background-color', data[7]);
		}
	});
});
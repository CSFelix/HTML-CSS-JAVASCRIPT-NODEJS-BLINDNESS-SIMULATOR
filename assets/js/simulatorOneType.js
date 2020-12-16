/*
	Method to simulate each blindness type at time
*/

// Protanomaly
$('#protanomalyOriginalColor').change(function() {
	var color = $('#protanomalyOriginalColor').val();
	$('#protanomalyOriginalColor').css('background-color', color);
	$('#protanomalyOriginalField').text(color);
	
	$.ajax({
		type: 'post',
		url: 'http://localhost:4000/simulatorProtanomaly',
		data: { 'color' : color },

		success: function(data) {
			$('#protanomalyColor').css('background-color', data);
			$('#protanomalyBlindnessField').text(data);
		}
	});
});

// Protanopia
$('#protanopiaOriginalColor').change(function() {
	var color = $('#protanopiaOriginalColor').val();
	$('#protanopiaOriginalColor').css('background-color', color);
	$('#protanopiaOriginalField').text(color);
	
	$.ajax({
		type: 'post',
		url: 'http://localhost:4000/simulatorProtanopia',
		data: { 'color' : color },

		success: function(data) {
			$('#protanopiaColor').css('background-color', data);
			$('#protanopiaBlindnessField').text(data);
		}
	});
});

// Deuteranomaly
$('#deuteranomalyOriginalColor').change(function() {
	var color = $('#deuteranomalyOriginalColor').val();
	$('#deuteranomalyOriginalColor').css('background-color', color);
	$('#deuteranomalyOriginalField').text(color);
	
	$.ajax({
		type: 'post',
		url: 'http://localhost:4000/simulatorDeuteranomaly',
		data: { 'color' : color },

		success: function(data) {
			$('#deuteranomalyColor').css('background-color', data);
			$('#deuteranomalyBlindnessField').text(data);
		}
	});
});

// Deuteranopia
$('#deuteranopiaOriginalColor').change(function() {
	var color = $('#deuteranopiaOriginalColor').val();
	$('#deuteranopiaOriginalColor').css('background-color', color);
	$('#deuteranopiaOriginalField').text(color);
	
	$.ajax({
		type: 'post',
		url: 'http://localhost:4000/simulatorDeuteranopia',
		data: { 'color' : color },

		success: function(data) {
			$('#deuteranopiaColor').css('background-color', data);
			$('#deuteranopiaBlindnessField').text(data);
		}
	});
});

// Tritanomaly
$('#tritanomalyOriginalColor').change(function() {
	var color = $('#tritanomalyOriginalColor').val();
	$('#tritanomalyOriginalColor').css('background-color', color);
	$('#tritanomalyOriginalField').text(color);
	
	$.ajax({
		type: 'post',
		url: 'http://localhost:4000/simulatorTritanomaly',
		data: { 'color' : color },

		success: function(data) {
			$('#tritanomalyColor').css('background-color', data);
			$('#tritanomalyBlindnessField').text(data);
		}
	});
});

// Tritanopia
$('#tritanopiaOriginalColor').change(function() {
	var color = $('#tritanopiaOriginalColor').val();
	$('#tritanopiaOriginalColor').css('background-color', color);
	$('#tritanopiaOriginalField').text(color);
	
	$.ajax({
		type: 'post',
		url: 'http://localhost:4000/simulatorTritanopia',
		data: { 'color' : color },

		success: function(data) {
			$('#tritanopiaColor').css('background-color', data);
			$('#tritanopiaBlindnessField').text(data);
		}
	});
});

// Achromatomaly
$('#achromatomalyOriginalColor').change(function() {
	var color = $('#achromatomalyOriginalColor').val();
	$('#achromatomalyOriginalColor').css('background-color', color);
	$('#achromatomalyOriginalField').text(color);
	
	$.ajax({
		type: 'post',
		url: 'http://localhost:4000/simulatorAchromatomaly',
		data: { 'color' : color },

		success: function(data) {
			$('#achromatomalyColor').css('background-color', data);
			$('#achromatomalyBlindnessField').text(data);
		}
	});
});

// Achromatopsia
$('#achromatopsiaOriginalColor').change(function() {
	var color = $('#achromatopsiaOriginalColor').val();
	$('#achromatopsiaOriginalColor').css('background-color', color);
	$('#achromatopsiaOriginalField').text(color);
	
	$.ajax({
		type: 'post',
		url: 'http://localhost:4000/simulatorAchromatopsia',
		data: { 'color' : color },

		success: function(data) {
			$('#achromatopsiaColor').css('background-color', data);
			$('#achromatopsiaBlindnessField').text(data);
		}
	});
});
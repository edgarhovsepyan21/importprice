jQuery("document").ready(function () {

	jQuery('button').on("click", function () {

		var gin, tiv, fob,usgin;
		gin = jQuery("#val1").val()
		tiv = jQuery("#val2").val()

		gin = parseInt(gin);
		tiv = parseInt(tiv);

		if (gin <= 999) {
			fob = 200
		}
		else if (gin <= 1999) {
			fob = 350
		}
		else if (gin <= 3499) {
			fob = 500
		}
		else if (gin <= 4999) {
			fob = 750
		}
		else if (gin <= 6999) {
			fob = 890
		}
		else if (gin <= 14999) {
			fob = 1000
		}
		else {
			fob=gin*0.175
		}

		usgin=gin+fob+2500

		if (tiv <= 2019) {
			usgin = usgin * 1.45
		}
		else {
			usgin=usgin*1.38
		}
		
		usgin = Math.round(usgin);
		
		jQuery('#rez').html(usgin);
	});
});



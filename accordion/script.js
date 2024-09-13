// Normal accordion with panels that must be closed individually
var accordion = document.getElementsByClassName("accordion");

for (i = 0; i < accordion.length; i++) {
	accordion[i].addEventListener("click", function () {
		this.classList.toggle("active");

		var panel = this.nextElementSibling;
		if (panel.style.display === "block") {
			panel.style.display = "none";
		} else {
			panel.style.display = "block";
		}
	});
}

// Accordion that closes all open panels when a new panel is displayed
var accordionSingle = document.getElementsByClassName("accordion-single");

for (i = 0; i < accordionSingle.length; i++) {
	accordionSingle[i].addEventListener("click", function () {
		this.classList.toggle("active");

		var panelSingle = this.nextElementSibling;
		if (panelSingle.style.display === "block") {
			panelSingle.style.display = "none";
		} else {
			// Close all open panels
			var panels = document.getElementsByClassName("panel-single");
			for (j = 0; j < panels.length; j++) {
				panels[j].style.display = "none";
			}
			panelSingle.style.display = "block";
		}
	});
}

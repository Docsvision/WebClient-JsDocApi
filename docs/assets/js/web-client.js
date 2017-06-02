"use strict";

(function() { 
    // Show inherited toggle
	var WebClientDocsShowInherited = "WebClientDocsShowInherited";
	function toggleInherited(show) {
		if (show) {
			$(".tsd-is-inherited").show();
		} else {
			$(".tsd-is-inherited").hide();
		}
		toggleProtected($("#tsd-filter-protected")[0].checked);
	}
	$("#tsd-filter-inherited").on("change", function(ev) {
		toggleInherited(ev.target.checked);
		localStorage.setItem(WebClientDocsShowInherited, ev.target.checked);
	});
	if (localStorage.getItem(WebClientDocsShowInherited)) {
		var checked = JSON.parse(localStorage.getItem(WebClientDocsShowInherited));
		$("#tsd-filter-inherited")[0].checked = checked;
		toggleInherited(checked);
	}

	// Show protected toggle
	var WebClientDocsShowProtected = "WebClientDocsShowProtected";
	function toggleProtected(show) {
		if (show) {
			$(".tsd-is-protected").show();
		} else {
			$(".tsd-is-protected").hide();
		}
	}
	$("#tsd-filter-protected").on("change", function(ev) {
		toggleProtected(ev.target.checked);
		localStorage.setItem(WebClientDocsShowProtected, ev.target.checked);
	});
	if (localStorage.getItem(WebClientDocsShowProtected)) {
		var checked = JSON.parse(localStorage.getItem(WebClientDocsShowProtected));
		$("#tsd-filter-protected")[0].checked = checked;
		toggleProtected(checked);
	} else {
		toggleProtected(false);
	}

	// If not index.html show right menu (on index it is hiden, because is invalid)
	if (!$(".tsd-panel.tsd-typography")[0]) {
		$(".tsd-navigation.secondary").show();
	}
	
	// Hide constructor for controls (it should not be used directly)
	if ($(".tsd-sources a[href='webclient.basecontrol.html']")[0] || $(".tsd-sources a[href='webclient.basecontrolparams.html']")[0]) {
		$(".tsd-kind-constructor").hide();
		[].forEach.call($(".tsd-kind-constructor"), function(elem) {
			var parent = elem.parentNode;
			if (parent.classList.contains("tsd-panel-group")) {
				$(parent).hide();
			}
			var grandParent = parent.parentNode;
			if (grandParent.classList.contains("tsd-index-section")) {
				$(grandParent).hide();
			}
		});
	}
})();
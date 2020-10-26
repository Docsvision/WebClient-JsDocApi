"use strict";

(function() { 
	let labelTags = document.getElementsByTagName("dt");

	//Hide review tags
	[].forEach.call(labelTags, function(tags) { 
		if (tags.textContent == "review") 
			tags.style.display = "none"; 
	});

	// Update internal tag text
	[].forEach.call(labelTags, function(tags) { 
		if (tags.textContent == "internal")  { 
			tags.textContent = 'Это внутренний нестабильный API, который может измениться в следующих версиях Web-client.'; 
			tags.style.color = "red"; 
			tags.style.float = "none"; 
			tags.style.marginBottom = "10px"; 
			tags.style.display = "block";
		} 
	});

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
    
	if (location.href.indexOf("globals.html") >= 0) {
			$(".tsd-index-section h3").css({ opacity: 0 });
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
	
	document.addEventListener("navContentLoaded", function() {
		expandCurrentNav();
	});

	document.addEventListener("DOMContentLoaded", function() {
		expandCurrentNav();

		// Remove quotes and .d from module name
		var breadcrumbs = document.querySelectorAll(".breadcrumb");
		[].forEach.call(breadcrumbs, function(elem) {
			if (elem.innerHTML.indexOf(".d") >= 0) {
				elem.innerHTML = elem.innerHTML.split("\"").join("").replace(".d", "");
				elem.parentElement.classList.add("breadcrumb-no-ident");
			}
		});
		document.querySelector(".tsd-breadcrumb").classList.add("show");
		
		var header = document.querySelector(".tsd-page-title h1");
		if (header) {
            var title = document.querySelector(".title").textContent;
            if (title.indexOf("docsvision.web") >= 0) {
                header.innerHTML = header.innerHTML.replace("External module \"", "Модуль " + title + "/").replace(".d", "");
                document.querySelector(".tsd-breadcrumb .no-after-slash a").innerText = title + "/";
            } else {
                header.innerHTML = header.innerHTML.replace("External module \"", "Модуль @docsvision/webclient/").replace(".d", "");
            }
			header.classList.add("show");
		}
		
		if (location.href.indexOf("globals.html") >= 0) {
			var moduleLinks = document.querySelectorAll(".tsd-kind-external-module a");
			[].forEach.call(moduleLinks, function(elem) {
				if (elem.innerHTML.indexOf(".d") >= 0) {
					elem.innerHTML = elem.innerHTML.split("\"").join("").replace(".d", "");
					elem.parentElement.classList.add("show");
				}
			});
		}
	});
	
	// Fix of not working click on search results
	document.addEventListener("mousedown", 
		function (ev) {
			var url = ""; 
			if(ev.target.matches(".results li")) { 
				url = ev.target.firstElementChild.href;
			} else if(ev.target.matches(".results li a")) { 
				url = ev.target.href;
			} else if(ev.target.matches(".results li a span")) { 
				url = ev.target.parentElement.href;
			};  
			console.info(url);
			if (url && url != location.href) {
			   location.href = url;
			}
		}, 
		{ capture: true }
	);

	function endsWith(str, suffix) {
		return str.indexOf(suffix, str.length - suffix.length) !== -1;
	}

	function expandRoot() {
		var rootUl = document.querySelector("#tree_root>li:nth-child(2)>ul");
		if (rootUl && !rootUl.classList.contains("jsl-open")) {
			rootUl.classList.add("jsl-open");
		}

		var rootToggler = document.querySelector("#tree_root>li:nth-child(2)>div.jsl-collapsed-arrow");
		if (rootToggler && !rootToggler.classList.contains("jsl-open-arrow")) {
			rootToggler.classList.add("jsl-open-arrow");
		}
	}

	function expandCurrentNav() {
		expandRoot();

		var link = [].find.call(document.querySelectorAll("a.doc-link"), function(a) { return endsWith(location.href, a.href); });
		if (link) {
			link.style.fontWeight = "bold";
			var parent = link.parentElement;
			while (parent != null) {
				if (parent.tagName == "UL") {
					if (parent.id != "tree_root") {
						parent.classList.add("jsl-open");
						var toggler = parent.parentElement.querySelector("li>.jsl-collapsed-arrow");
						if (toggler) {
							toggler.classList.add("jsl-open-arrow");
						}
					}
				}
				parent = parent.parentElement;
			}
		}
	}
})();

// https://github.com/advisories/GHSA-gxr4-xjj5-5px2
jQuery.htmlPrefilter = function( html ) {
	return html;
};




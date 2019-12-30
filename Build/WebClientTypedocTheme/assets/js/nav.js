
try {
  const url = window.location.pathname;
  const pathNavQuery = (url.search(/\/$/) > 0 || url.search(/\/$/) > 0 || url.search(/index.html$/) > 0 || url.search(/globals.html$/) > 0)
    ? "navPrimaryContent.html"
    : "../navSecondaryContent.html";

  const nav = document.querySelector(".tsd-navigation.primary");
  const xhr = new XMLHttpRequest();
  xhr.open('GET', pathNavQuery, true);
  xhr.onload = function() {
    if (xhr.response && xhr.status === 200) {
      let event;

      if (typeof(window.Event) === "function") {
        // not IE
        event = new Event("navContentLoaded");
      } else{
        // IE
        event = new CustomEvent("navContentLoaded");
      }

      nav.innerHTML = xhr.response;
      document.dispatchEvent(event);
    }
  }
  xhr.send();
} catch (err) {
  console.error(err);
}
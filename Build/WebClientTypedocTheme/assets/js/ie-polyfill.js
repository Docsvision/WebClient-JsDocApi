(function() {
  function CustomEvent ( event, params ) {
    params = params || { bubbles: false, cancelable: false, detail: undefined };
    var evt = document.createEvent('CustomEvent');
    evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
    return evt;
   }

  CustomEvent.prototype = window.Event.prototype;

  window.CustomEvent = CustomEvent;

  if (!Array.prototype.find) {
    function ieArrayFind(callback) {
      for (let i = 0; i < this.length; i++) {
        let match = callback(this[i]);
        if (match) {
          return this[i];
        }
      }
    }
  
    Array.prototype.find = ieArrayFind;
  }
})();
// clicky
var clicky_site_ids = clicky_site_ids || []; clicky_site_ids.push(101246300);

// subscriber embed
function showMailingPopUp() {
  window.dojoRequire(["mojo/signup-forms/Loader"], function (L) { L.start({ "baseUrl": "mc.us19.list-manage.com", "uuid": "0c3e03a2482badc5c9c8958ab", "lid": "c82ae734c7", "uniqueMethods": true }) });
};

document.addEventListener("DOMContentLoaded", function () {
  var linksToManage = document.querySelectorAll('a[title="Email"]');

  linksToManage.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      document.cookie = 'MCPopupClosed=;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC;';
      document.cookie = 'MCPopupSubscribed=;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC;';
      showMailingPopUp();
    });
  });
});

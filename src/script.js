function inject_ta(taId) {
  var body = document.getElementsByTagName('body')[0];
  var script = document.createElement('script');

  script.type = 'text/javascript';
  script.text =
    'var el = document.createElement("div");' +
    'el.id = "findme";' +
    'document.getElementsByTagName("body")[0].appendChild(el);';
  body.appendChild(script);

}


chrome.runtime.sendMessage({command: "getTAID"}, function(response) {
  if(response != undefined && response.taId != undefined) {
    console.log("using taId: " + response.taId);
    inject_ta(response.taId);
  }
});

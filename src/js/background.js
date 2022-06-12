chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create(
    "index.html",
    {
      id: "appWindow",
      frame: {
        color: "#160722"
      },
      innerBounds: {
        width: 960,
        height: 580,
        minWidth: 320,
        minHeight: 466,
      }
    }
  );
});

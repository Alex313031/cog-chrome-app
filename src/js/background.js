chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create(
    "index.html",
    {
      id: "appWindow",
      frame: {
        color: "#24292f"
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

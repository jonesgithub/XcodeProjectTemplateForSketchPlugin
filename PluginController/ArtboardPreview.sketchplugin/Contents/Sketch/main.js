@import 'helper.js'

var openWindow = function(context) {
  
  log("Open Window Started");
  context.document.showMessage("Open Window Started2");
  if ( ! classExists("ArtboardPreviewController")) {
      // context.document.showMessage("framework loading... " + root + "/Contents/Sketch" );
      log("don't have ArtboardPreviewController");
      var loaded = loadFramework("ArtboardPreview", "/Contents/Sketch");
      log("finish loading " + loaded);
      context.document.showMessage("framework loaded ");

  } else {
    log("framework loaded " + loaded);
    context.document.showMessage("framework loaded ");
  }
  var controller = ArtboardPreviewController.alloc().init()
  // log("controller.string ", controller.string());
  context.document.showMessage("controller initalized");

}

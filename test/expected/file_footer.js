angular.module("templates-file_footer", ["../test/fixtures/three.tpl.html"]);

angular.module("../test/fixtures/three.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../test/fixtures/three.tpl.html",
    "Multiple\n" +
    "Lines\n" +
    "");
}]);
/* Module End */


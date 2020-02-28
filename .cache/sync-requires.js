const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-docs-js": hot(preferDefault(require("E:\\TEMP\\proekts_gatsby\\site\\babulya-gatsby\\src\\templates\\docs.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("E:\\TEMP\\proekts_gatsby\\site\\babulya-gatsby\\.cache\\dev-404-page.js")))
}


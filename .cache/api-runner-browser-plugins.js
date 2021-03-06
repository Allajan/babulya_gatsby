module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-layout/gatsby-browser.js'),
      options: {"plugins":[],"component":"E:\\TEMP\\proekts_gatsby\\babulya_gatsby\\src\\templates\\docs.js"},
    },{
      plugin: require('../node_modules/gatsby-plugin-mdx/gatsby-browser.js'),
      options: {"plugins":[],"gatsbyRemarkPlugins":[{"resolve":"gatsby-remark-images","options":{"maxWidth":1035,"sizeByPixelDensity":true}},{"resolve":"gatsby-remark-copy-linked-files"}],"extensions":[".mdx",".md"]},
    },{
      plugin: require('../node_modules/gatsby-plugin-gtag/gatsby-browser.js'),
      options: {"plugins":[],"trackingId":null,"head":true,"anonymize":false},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]

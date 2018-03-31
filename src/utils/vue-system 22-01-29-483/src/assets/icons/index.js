const svgs = require.context('./svg', true, /\.svg$/)

const module = {}

svgs.keys().forEach((item) => {
  module[item.replace(/(\.\/|\.svg)/g, '')] = svgs(item)
})
export default module

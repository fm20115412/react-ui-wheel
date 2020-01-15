const requireAll = requireContext => requireContext.keys().forEach(item => requireContext(item))
const req = require.context('./icons', false, /\.svg$/)
requireAll(req)
const requireAll = requireContext => requireContext.keys().forEach(item => requireContext(item))
try {
    const req = require.context('../icons', false, /\.svg$/)
    requireAll(req)
} catch (error) {

}

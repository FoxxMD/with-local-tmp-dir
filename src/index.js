const tmp = require('tmp-promise')

module.exports = async callback => tmp.withDir(
  async ({ path }) => {
    const previousCwd = process.cwd()
    process.chdir(path)
    try {
      await callback()
    } finally {
      process.chdir(previousCwd)
    }
  },
  { unsafeCleanup: true, dir: process.cwd() },
)

export interface withLocalTmpDirOptions {
  unsafeCleanup?: boolean
  dir?: string
  prefix?: string
}
function withLocalTmpDirFunc(args: withLocalTmpDirOptions | (() => Promise<void>)): Promise<string>
export default withLocalTmpDirFunc

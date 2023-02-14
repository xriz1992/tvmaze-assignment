import { existsSync } from 'fs'
import { join } from 'path'
import { getNuxt } from './nuxt'

type ModuleContainerMethod = 'addTemplate' | 'extendBuild' | 'extendRoutes' | 'addModule' | 'addPlugin' | 'addLayout' | 'addErrorLayout' | 'addServerMiddleware' | 'requireModule'

export function expectModuleToBeCalledWith (method: ModuleContainerMethod, ...args: any[]) {
  expect(getNuxt().moduleContainer[method]).toBeCalledWith(...args)
}

export function expectModuleNotToBeCalledWith (method: ModuleContainerMethod, ...args: any[]) {
  expect(getNuxt().moduleContainer[method]).not.toBeCalledWith(...args)
}

export function expectFileToBeGenerated (path: string) {
  expect(existsSync(join(getNuxt().options.generate.dir, path))).toBe(true)
}

export function expectFileNotToBeGenerated (path: string) {
  expect(existsSync(join(getNuxt().options.generate.dir, path))).toBe(false)
}

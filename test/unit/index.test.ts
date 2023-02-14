import { setupTest, get, expectModuleToBeCalledWith } from '../core'

describe('module', () => {
  setupTest({
    rootDir: 'test/fixtures/basic',
    server: true,
  })

  test('request page', async () => {
    const html = await get('/')
    expect(html).toContain('Works!')
  })

  test('module container call assertions', () => {
    expectModuleToBeCalledWith(
      'addLayout',
      expect.stringContaining('layout.vue')
    )
    expectModuleToBeCalledWith(
      'addLayout',
      expect.stringContaining('layout.vue'),
      'name-layout'
    )
    expectModuleToBeCalledWith(
      'addErrorLayout',
      expect.stringContaining('error')
    )
    expectModuleToBeCalledWith(
      'addServerMiddleware',
      expect.stringContaining('middleware.js')
    )
    expectModuleToBeCalledWith('requireModule', '~/modules/module-b')
    expectModuleToBeCalledWith('addPlugin', {
      src: expect.stringContaining('plugin.js'),
      fileName: 'plugin-a.js',
      options: {},
    })
  })
})

describe('setup with waitFor', () => {
  setupTest({
    rootDir: 'test/fixtures/basic',
    build: true,
    waitFor: 100,
  })
})

describe('server', () => {
  setupTest({
    rootDir: 'test/fixtures/basic',
  })

  test('should be error if server not enabled', () => {
    expect(() => get('/')).toThrowError('server is not enabled')
  })
})

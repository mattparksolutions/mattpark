import React from 'react'
import renderer from 'react-test-renderer'

import BlogPage from './index'

describe("Blog", () => {
  it("passes", () => {
    expect(true).toBe(true)
  })

  it("renders correctly", () => {
    const tree = renderer.create(<BlogPage />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
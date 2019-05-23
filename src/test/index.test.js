import { expect } from "chai"
import sinon from "sinon"

describe("Word watch functions", () => {
  describe("As a visitor", () => {
    describe("when I visit the index page", () => {
      it("should show me the top word and its count on the right hand side", () => {
        expect(page).to have_content('check')
          .and have_content(497)
      })
    })
  })
})

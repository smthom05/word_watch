import { expect } from "chai"
import sinon from "sinon"

describe("Word watch functions", () => {
  describe("As a visitor", () => {
    describe("when I visit the index page", () => {
      it("should show me the top word and its count on the right hand side", () => {
        word = document.getElementById('top_word')
        word_freq = document.getElementById('top_word_freq')
        expect(word).to.be.an.instanceOf(String)
        expect(word_freq).to.be.an.instanceOf(Integer)
      })
    })
  })
})

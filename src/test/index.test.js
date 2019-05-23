import { expect } from "chai"
import sinon from "sinon"
import $ from 'jquery'


describe("Word watch functions", () => {
  describe("As a visitor", () => {
    describe("when I visit the index page", () => {
      it("should show me the top word and its count on the right hand side", () => {
        $.get('https://wordwatch-api.herokuapp.com/api/v1/top_word', function( data ){
          expect(Object.keys(data.word)[0]).to.be.an.instanceOf(String)
          expect(Object.values(data.word)[0]).to.be.an.instanceOf(Integer)
        })
      })
    })

    describe('when I type in any amount of words and hit Break Down button', () => {
      it('should post all the words to the master list', () => {
        
      })
    })
  })
})

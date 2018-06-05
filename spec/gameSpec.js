describe('Tic Tac Toe', function (){

  describe('The Game ', function(){
    it('starts with an empty totalScore', function() {
      expect(game.totalScore).toEqual(0)
    })

  it('After user clicks, the option should be in the specific location on the grid', function() {
      addOption(0)
      expect(game.arrayOptions[0]).toEqual('x')
    })

  it('Existing on grid values cannot be replaced', function() {
    addOption(0)
    addOption(3)
    addOption(2)
    addOption(2)
    expect(game.arrayOptions[2]).toEqual('x')
  })

  })
})

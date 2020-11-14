class Statistics{
    constructor()
    {
        this.gameResults = [];
    }
    addGameToStatistics(win,bid)
    {
        let gameResult = {
            win: win,
            bid: bid,
        }
        console.log(gameResult);
        this.gameResults.push(gameResult);
    }
    showGameStatistics()
    {
        let games = this.gameResults.length;
        let wins = this.gameResults.filter(element=>{return element.win}).length;
        let losses = this.gameResults.filter(element=>{return !element.win}).length;
        return [games,wins,losses];
    }
}

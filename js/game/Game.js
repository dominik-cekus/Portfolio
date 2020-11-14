class GameMobile
{
    constructor(money)
    {
        this.stats = new Statistics();
        this.wallet = new Wallet(money);
        document.getElementById('start').addEventListener("click",this.startGame.bind(this));
        this.spanWallet = document.querySelector('.content__mobile .wrap__panel span.wrap__wallet');
        this.boards = document.querySelectorAll('div.color');
        this.inputBid = document.getElementById('bid');
        this.spanResult = document.querySelector('.content__mobile .wrap__score span.wrap__result');
        this.spanGames = document.querySelector('.content__mobile .wrap__score span.wrap__number-game');
        this.spanWins = document.querySelector('.content__mobile .wrap__score span.wrap__win');
        this.spanLosses = document.querySelector('.content__mobile .wrap__score span.wrap__loss');

        this.render();
    }
    render(colors = ['gray','gray','gray'], money = this.wallet.getWalletValue(), result = "", stats = [0,0,0],
    bid = 0, wonMoney = 0
    )
    {
        this.spanWallet.textContent = `${money}$`;
        this.boards.forEach((e,index)=>{e.style.backgroundImage = `url('./images/${colors[index]}.png')`});
        this.spanGames.textContent = stats[0];
        this.spanWins.textContent = stats[1];
        this.spanLosses.textContent = stats[2];
        if(result)
        {
            result = `You won ${wonMoney}$`;
        }
        else if( !result && result !== "") 
        { result = `You lost ${bid}$`;}
        this.spanResult.textContent = result;

    }
    startGame()
    {
        const bid = Number(this.inputBid.value);
        if(this.inputBid.value <1 || !this.wallet.checkCanPlay(bid))
        return alert(`You've got not enough money!`);
        else{
            this.wallet.changeWallet(bid,"-");
            const randColor = new Draw();
            const result = Result.checkWinner(randColor.getDrawResult());
            const wonMoney = Result.moneyWinInGame(result,bid);
            this.stats.addGameToStatistics(result,bid);
            this.wallet.changeWallet(wonMoney);
            
            this.render(randColor.getDrawResult(),this.wallet.getWalletValue(),result,this.stats.showGameStatistics(),bid,wonMoney);
            this.inputBid.value ="";
        }

    }

}
class GameDesktop
{
    constructor(money)
    {
        this.stats = new Statistics();
        this.wallet = new Wallet(money);
        document.getElementById('start--desktop').addEventListener("click",this.startGame.bind(this));
        this.spanWallet = document.querySelector('.content__desktop .wrap__panel span.wrap__wallet');
        this.boards = document.querySelectorAll('div.color--desktop');
        this.inputBid = document.getElementById('bid--desktop');
        this.spanResult = document.querySelector('.content__desktop .wrap__score span.wrap__result');
        this.spanGames = document.querySelector('.content__desktop .wrap__score span.wrap__number-game');
        this.spanWins = document.querySelector('.content__desktop .wrap__score span.wrap__win');
        this.spanLosses = document.querySelector('.content__desktop .wrap__score span.wrap__loss');

        this.render();
    }
    render(colors = ['gray','gray','gray'], money = this.wallet.getWalletValue(), result = "", stats = [0,0,0],
    bid = 0, wonMoney = 0
    )
    {
        this.spanWallet.textContent = `${money}$`;
        this.boards.forEach((e,index)=>{e.style.backgroundImage = `url('./images/${colors[index]}.png')`});
        this.spanGames.textContent = stats[0];
        this.spanWins.textContent = stats[1];
        this.spanLosses.textContent = stats[2];
        if(result)
        {
            result = `You won ${wonMoney}$`;
        }
        else if( !result && result !== "") 
        { result = `You lost ${bid}$`;}
        this.spanResult.textContent = result;

    }
    startGame()
    {
        const bid = Number(this.inputBid.value);
        if(this.inputBid.value <1 || !this.wallet.checkCanPlay(bid))
        return alert(`You've got not enough money!`);
        else{
            this.wallet.changeWallet(bid,"-");
            const randColor = new Draw();
            const result = Result.checkWinner(randColor.getDrawResult());
            const wonMoney = Result.moneyWinInGame(result,bid);
            this.stats.addGameToStatistics(result,bid);
            this.wallet.changeWallet(wonMoney);
            
            this.render(randColor.getDrawResult(),this.wallet.getWalletValue(),result,this.stats.showGameStatistics(),bid,wonMoney);
            this.inputBid.value ="";
        }

    }

}

class Draw {
    constructor()
    {
        this.options = ['bananas','cherry','pineapple'];
        let _result = this.drawResult();
        this.getDrawResult = () => {return _result};
    }
    drawResult()
    {
        const colors =[];
        for(let i =0; i< this.options.length;i++)
        {
            colors.push(this.options[Math.floor(Math.random()* this.options.length)]);
        }
        return colors;
    }
}

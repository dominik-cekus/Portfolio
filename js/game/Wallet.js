
class Wallet{
    constructor(money)
    {
        let _money = money;
        this.getWalletValue = () => {return _money;};
        this.checkCanPlay = (value) => {if(_money>=value)return true;
        return false;}
        this.changeWallet = (value,type = "+") =>
        {
            if(typeof(value)==="number" && !isNaN(value))
            {
                if(type==="+")
                {
                    return _money += value;
                }
                else if(type==="-" ) //&& this.checkCanPlay(value)
                {
                    return _money -= value;
                }
                else{
                    throw new Error("nieprawidłowy typ działania");
                }
                
            }
            else
            {
                throw new Error("nie została podana liczba");
            }
        }
    }
}
(function (w) {
    var moneyNum=1000;
    function getMoney() {
        console.log("我有"+moneyNum+'块钱');
    };
    function makeMoney() {
        moneyNum+=100;
        console.log("我赚钱了现在有"+moneyNum+"块钱")
    }
    function lost(m) {
        moneyNum-=100;
        console.log("我亏钱了现在有"+moneyNum+"块钱")
    }
    w.myMoney={
        getMoney,
        makeMoney,
        lost
    }
})(window);

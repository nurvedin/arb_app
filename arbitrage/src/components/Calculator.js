function Calculator () {

    const arbOpp = function (e) {
        const firstOdds = this.first_odds;
        const secondOdds = this.second_odds;

        const first = (1 / firstOdds);
        const second = (1 / secondOdds);
        const result = first + second;
        console.log(first + second);
        e.preventDefault();
    }
    
    const stake = function (e) {
        console.log('it works!');
        e.preventDefault();
    }

    return (
        <div className='right'>
            <h1>Calculator</h1>
            <form>
                <h3>Arbitrage opportunity calculator</h3>
                <label>
                    First Odds:
                    <input type="text" name="first_odds"/>
                </label>
                <br/>
                <label>
                    Second Odds:
                    <input type="text" name="second_odds"/>
                    <br/>
                    <button onClick={arbOpp}>Calcutate</button>
                </label>
                <br/>
                <label>
                    Result:
                </label>
                <br/>
            </form>

            <form>
                <h3>Stake calculator</h3>
                <label>
                    What is your stake?
                    <input onChange={stake} type="text" name="stake" />
                    <br/>
                    <button onClick={stake}>Calcutate</button>
                </label>
                <br/>
                <label>
                    Result:
                </label>
            </form>
        </div>
    );

}

export default Calculator;
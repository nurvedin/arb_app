import React, { useState, useRef } from 'react';

function Calculator () {
    
    const [odds, setodds] = useState();
    const first_odds = useRef();
    const second_odds = useRef();

    function arbOpp(e) {

        const first = first_odds.current.value;
        const second = second_odds.current.value;

        const firstOdds = (1 / first);
        const secondOdds = (1 / second);
        const result = firstOdds + secondOdds;
        console.log(first);
        console.log(second);
        console.log(result);
        e.preventDefault();
    }
    
    /*
    const stake = function (e) {
        console.log('it works!');
        e.preventDefault();
    }
    */

    return (
        <div className='right'>
            <h1>Calculator</h1>
            <form>
                <h3>Arbitrage opportunity calculator</h3>
                <label>
                    First Odds:
                    <input type="text" ref={first_odds}/>
                </label>
                <br/>
                <label>
                    Second Odds:
                    <input type="text" ref={second_odds}/>
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
                    <input type="text" />
                    <br/>
                    <button >Calcutate</button>
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
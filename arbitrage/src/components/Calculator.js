function Calculator () {
    return (
        <div className='right'>
            <h1>Calculator</h1>
            <form>
                <label>
                    First Odds:
                    <input type="text" name="first_odds" />
                </label>
                <br/>
                <label>
                    Second Odds:
                    <input type="text" name="second_odds" />
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
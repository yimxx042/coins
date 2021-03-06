import React from 'react';

class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { amount: '' };
}

    myChangeHandler = (event) => {
        this.setState({amount: event.target.value});
}

    Count = (cents, coins, amount) => // cents = [], coins = cents.length, amount = value of amount 
{
    let table = new Array(amount + 1); // make a table with new array > amount + 1 for 0 index on array 
    table.fill(0); // table fill with 0 
    table[0] = 1; //Table index 0, there is 1 solution(0 coins for empty array), no coins as start 0 empty array 

    //table[row][col] = table [row-1][col] + table[row][col-coins[row-1]]

    for(let i = 0; i < coins; i ++) // pick coins one by one and update the table array values column should be 0 ~500
        for(let j = cents[i]; j <= amount; j++) // After the index greater than or equal to the value of the picked coin. 
            table[j] += table[j - cents[i]];   // Row is adding cents like index 0, index 0 and index 1, index 0,1,2 ....
    return table[amount];   
}

    render() {
        const cents = [1,2,5,10,20,50,100,200];
        const coins = cents.length; 
        const amount = this.state.amount;

        return (
            <form id="form">
                <h1>Q) how many different ways can change be made for a "Euro"?</h1>
                <h2>The current cents is 1, 2, 5, 10, 20 and 50 cent, €1 and €2.</h2>
                <h2> Enter
                    <input 
                        id="input"
                        type="text"
                        onChange={this.myChangeHandler}
                        placeholder="5"
                    /> € 
                </h2>
                <h3>Total Euro is € {this.state.amount}</h3>
                <h3>There are {this.Count(cents, coins, amount*100)} ways!</h3>
            </form>
        );
    }
}
export default MyForm;
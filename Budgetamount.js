import React, {useEffect, useState} from 'react';

function Budgetamount(props)
{
    const[budget,setBudget] = useState("");
    const[expense,setExpenses] = useState("");
    const[amount,setAmount] = useState(0);

    useEffect( () => {
         setAmount(() =>  budget - expense);
        },[expense]);

    return(
        <div>
            
            <label for="budget" value="Budget">Budget:</label>
            <input type="number" id="budget" name="budget"  onChange={(e) => setBudget(e.target.value)}/><br>
            </br><br></br>
            <label for="expense" value="Expense">Expenses:</label>
            <input type="number" id="expense" name="expense"   onChange={(e) => setExpenses(e.target.value)}/><br></br><br></br>
            <label for="amount" value="Amount">Amount Remaining:</label>
            <input type="number" id="amount" name="amount"  value={amount} onChange={() => setAmount()}/>
           
        </div>
    );
}
export default Budgetamount;
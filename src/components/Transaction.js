import React, {useContext} from 'react';
import  { GlobalContext}  from '../context/Global';

export default function Transaction({transaction}) {
    const sign = transaction.amount < 0 ? '-' : '+';
    const {deleteTransaction} = useContext(GlobalContext)
  return (
    <div>
      <li className={transaction.Amount < 0 ? 'minus': 'plus'}>
        {transaction.text}
           <span>{sign}${Math.abs(transaction.amount)}</span><button onClick ={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
        </li>
    </div>
  )
}

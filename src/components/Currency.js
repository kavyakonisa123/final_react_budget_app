import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {
//     const { dispatch } = useContext(AppContext);

//     const changeCurrency = (val) => {
//         dispatch({
//             type: 'CHG_CURRENCY',
//             payload: val,
//         })
//         console.log(val)
//     }

//     return (
  

// 		<div className='alert alert-secondary "dropdown-menu"' style={{marginLeft: '1rem' , backgroundColor:'#33FF49', color:'white'}} >
//         <label >Currency
//       <select name='hover_color'id="currency" onChange={(event)=>changeCurrency(event.target.value)} style={{ marginLeft: '1rem' , backgroundColor:'#33FF49', color:'white'}}>
//         <option class="dropdown-item" style={{color:'black'}} value="£">£ Pound</option>
//         <option class="dropdown-item" style={{color:'black'}} value="$">$ Dollar</option>
//         <option class="dropdown-item" style={{color:'black'}} value="€">€ Euro</option>
//         <option class="dropdown-item" style={{color:'black'}} value="₹">₹ Rupee</option>
//       </select>	
//       </label>
      	
//     </div>
//     );
    
// };
const { currency, dispatch } = useContext(AppContext);

const handleSelector = (event) => {
    dispatch({
        type: 'CHG_CURRENCY',
        payload: event.target.value
    });
}

const getCurrencyToDisplay = (currency) => {
    switch (currency){
        case '$':
            return '$ Dollar';
        case '£':
            return '£ Pound';
        case '€':
            return '€ Euro';
        case '₹':
            return '₹ Ruppee';
        default:
            return 'Unknown Currency';
    }
}

return (
    <div className='alert alert-secondary'style={{marginLeft: '1rem' , backgroundColor:'#33FF49', color:'white'}}>

        <label for ="currencySelector">Currency {getCurrencyToDisplay}
        <select class="select" id="currencySelector" defaultValue={currency} onChange={handleSelector}  style={{ marginLeft: '1rem' ,border:'None', backgroundColor:'#33FF49', color:'white'}}>
            <option style={{color:'black'}} value="$">$ Dollar</option>
            <option value="£">£ Pound</option>
            <option value="€">€ Euro</option>
            <option value="₹">₹ Ruppee</option>
        </select>
        </label>

</div>


    
);
};
export default Currency;
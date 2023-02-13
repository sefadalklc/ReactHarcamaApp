import {moneyFormat} from "../helper"

function Header (props) {
    return(
        <div className="header">
          {props.total > 0 && props.money - props.total !== 0 && (
           
           `  Harcayacak ${moneyFormat(props.money-props.total)} $ paranız kaldı !`
           
          )}
          {props.total === 0 && (
            `Harcamak için ${moneyFormat(props.money)} $ paranız var !`
          )}
          {props.money - props.total === 0 && (
            `Paran bitti`
          )}
          
          
        </div>
    )
}


export default Header
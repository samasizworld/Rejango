import React, { Fragment,useEffect } from "react";
import { useAlert } from "react-alert";
const Alerts =() =>{
const alert = useAlert();
useEffect(()=>{alert.show('It Worked')},[])
return(
<Fragment/>
)
}
export default Alerts;
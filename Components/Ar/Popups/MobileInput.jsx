 
import InputMask from "react-input-mask";

function MobileInput(props) {
  return <InputMask className={props.classes} id={props.id} mask="(+999)  999  999  999" onChange={props.onChange} value={props.value} placeholder={props.placeholder || 'Mobile Number'} />;
}
export default MobileInput
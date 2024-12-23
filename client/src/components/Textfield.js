function Textfield(props) {
    return (
       <div className="mb-3">
          <label htmlFor={props.parametro} className="form-label">{props.parametro}</label>
          {props.type === "textarea" ? (
             <textarea
                className="form-control"
                id={props.parametro}
                name={props.parametro}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
                rows={props.rows}
             />
          ) : (
             <input
                type={props.type}
                className="form-control"
                id={props.parametro}
                name={props.parametro}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
             />
          )}
       </div>
    );
 }
 
 export default Textfield;
 

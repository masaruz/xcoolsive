const Input = ({col, id, placeholder, validateMsg}) => (
    <div className={col}>
        <div className="form-group">
        <input className="form-control" id={id} type="text" placeholder={placeholder} required="required" data-validation-required-message={validateMsg}/>
        <p className="help-block text-danger"></p>
        </div>
    </div>
)

export default Input
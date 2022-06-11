function InputWrapper({ children }) {
    return (
        <div className="row justify-content-center" id="input-ui">
            <div className="col-8">
                <div className="input-group mb-3">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default InputWrapper;
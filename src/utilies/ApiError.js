class ApiError extends Error{
    constructor(
       statusCode,
        message,
        errors=[],
        stack=""
    
    ) {
        super(message);
        this.statusCode = statusCode,
        this.error = error,
        this.stack = stack,
        this.data=null,
        this.message=message,
        this.success = false,
        this.error = errors

        if(stack){
            this.stack = stack
        }else{
            Error.captureStackTrace(this,this.constructor)
        }
    }
}
export default ApiError

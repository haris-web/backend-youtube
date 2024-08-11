 const asyncHandler =(requestHandler)=>{
    (req,res,next) => {
        Promise.resolve( requestHandler(req,res,next)).catch((err)=>next(err))
    }

 }


// const asyncHandler = (fun) => async (req, res, next) => {
//   try {
//     await fun(req, res, next);
//   } catch (error) {
//     res.status(error.status || 500).json({
//       message: error.message,
//       success: false,
//     });
//   }
// };
export default asyncHandler

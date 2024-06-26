const asyncHandler = (requestHandler)=>{
    return (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err))
    }
}



// const asyncHandler = ()=>{}
// const asyncHandler = (func)=> ()=>{}
// const asyncHandler = (func)=>async () => {}


// const asyncHandler = (fn)=>async(req,res,next)=>{
//     try {
//         await fn(req,res,next)
        
//     } catch (error) {
//         console.statue=s(error.code|| 500).json({
//             sucess:false,
//             message:error.message
//         });
        
//     }




export {asyncHandler}
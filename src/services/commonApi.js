import axios from "axios";

export const commonApi=async(method,url,reqbody,reqheader)=>{
 //(method:get,put,post,delete | url:(different request paths) | reqbody:email,password,userName | reqheader:for  file type contents )

    const config={
        method,
        url,
        data:reqbody,
        headers:reqheader?reqheader:{"Content-Type":"application/json"} // {"multipart":"formdata"}
    }
   return await axios(config).then((result)=>{
    return result
   }).catch(result=>{
    return result 
   })
}       
  
import { base_url } from "./baseUrl";
import { commonApi } from "./commonApi";



 export const registerApi=async(body)=>{
  return await commonApi('POST',`${base_url}/user/register`,body,"")
 }
 

 export const loginApi=async(body)=>{
    return await commonApi('POST',`${base_url}/user/login`,body,"")
 }

 export const timelineApi=async(userId)=>{
   return await commonApi('GET',`${base_url}/user/timeline/${userId}`,"","")
 }

 export const getauserApi=async(userName)=>{
   return await commonApi('GET',`${base_url}/user/getauser?userName=${userName}`,"","")
 }

 export const getauserApii=async(userId)=>{
  return await commonApi('GET',`${base_url}/user/getauser?userId=${userId}`,"","")
}

 export const getusersallpostApi=async(userName)=>{
  return await commonApi('GET',`${base_url}/user/profile/${userName}`,"","")
}
  

export const likedislikeApi=async(id,body)=>{
  return await commonApi('PUT',`${base_url}/user/likedislike/${id}/like`,body,"")
}

export const createapostApi=async(body,headers)=>{
  return await commonApi('POST',`${base_url}/user/createpost`,body,headers)
}
 

export const getFriendsApi=async(userId)=>{
  return await commonApi('GET',`${base_url}/user/friends/${userId}`,"","")
}

export const followuserApi=async(id,currentid)=>{
  console.log(id);
  return await commonApi('PUT',`${base_url}/user/follow/${id}`,currentid,"")
}
   
export const unfollowuserApi=async(id,currentid)=>{
  return await commonApi('PUT',`${base_url}/user/unfollow/${id}`,currentid,"")
}

export const editprofileApi=async(body,headers,_id)=>{
  console.log(_id);
  return await commonApi('PUT',`${base_url}/user/editprofile/${_id}`,body,headers)
}

export const getprofileApi=async(_id)=>{
 return await commonApi('GET',`${base_url}/user/getprofile/${_id}`,"","")
}


export const getallusersApi=async(search)=>{
  return await commonApi('GET',`${base_url}/user/getallusers?search=${search}`,"","")
}

export const deletepostApi=async(body,headers,id)=>{
  return await commonApi("DELETE",`${base_url}/user/deletepost/${id}`,body,headers) 
}

export const getimagesApi=async()=>{
  return await commonApi("GET",`${base_url}/user/getimages`,"","")
}
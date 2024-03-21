import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { getimagesApi } from '../services/allApi'
import './Rightside.css'
import ar from "../assets/Faces Poster Design Series - Zeka Design.jpg"
import ta from "../assets/Free_Photo___3d_render_gift_box_with_ribbon_present_package-removebg-preview.png"
import rs from "../assets/Bene Schulz.jpeg"
import ab from "../assets/download (2).jpg"
import bb from "../assets/d98e81a3c34cde89311562f9a9b63dd7.jpg"
import bd from "../assets/0_3 seconds.jpg"

function Rightside() {
  
const [getimages,setgetImages]=useState([])

const imageget=async()=>{
  const result = await getimagesApi()
  setgetImages(result.data)
}

useEffect(()=>{
imageget()
},[])


const shuffleArray = (array) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

  return (
   

    <>
    <br/>
    <br/>
        <div className="birthdayContainer">
          <img className="birthdayImg" src={ta} alt="" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birhday today.
          </span>
        </div>
        <img style={{width:"350px"}} className="rightbarAd" src={ar} alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <br/>
        <br/>
        <ul className="rightbarFriendList">
        
          <div className="rightbarFollowing">
            <img
              src={rs}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Alex</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={ab}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">jordhan</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={bb}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">alen grand</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={bd}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/6.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          
          {/* {Users.map((u) => ( */}
          {/* //   <Online key={u.id} user={u} />
          // ))} */}
        </ul>
      </>
  )
}

export default Rightside
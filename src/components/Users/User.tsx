import {NavLink} from "react-router-dom";
import User_avatar from "../../assets/images/User_avatar.png";
import React from "react";
import {UserType} from "../../Types/Types";
import {Avatar, Button, Card} from "antd";
import Meta from "antd/lib/card/Meta";
type PropsType = {
    user:UserType
    followingInProgress:Array<number>
    follow:(userId:number) => void
    unfollow:(userId:number) => void
}

const User: React.FC<PropsType> = ({user, followingInProgress, follow, unfollow}) => {
    return (

         <div>

             <NavLink to={'/profile/' + user.id}>
            <Card
                 style={{ width: 250 }}
                 cover={
                     <img
                         alt="example"
                         src={user.photos.large !== null ? user.photos.large : User_avatar}
                     />}>
                 <Meta
                    avatar={<Avatar src={user.photos.small !== null ? user.photos.small : User_avatar} />}
                     title={user.name}
                     description={user.status}
                 />
                 <hr/>
             </Card>
         </NavLink>
             {user.followed ?
                 <Button danger disabled={followingInProgress.some(id => id === user.id)}
                         onClick={() => {unfollow(user.id)}} >Unfollow</Button>
                              :
                 <Button disabled={followingInProgress.some(id => id === user.id)}
                         onClick={() => {follow(user.id)}}>Follow</Button>}
                     </div>
    )

}


export default User

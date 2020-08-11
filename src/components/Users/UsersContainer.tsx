import React from "react";
import {Users} from "./Users";
import {Loader} from "../common/Loader/Loader";
import {getIsFetching} from "../../redux/UsersStore/usersSelectors";
import { useSelector} from "react-redux";

export const UsersPage:React.FC = (props) => {
    const isFetching = useSelector(getIsFetching)
    return (
        <div>
            {isFetching && <Loader/>}
            <Users />
        </div>
    )

}



import React from "react";
import DialogsList from "./DialogsList";
import {Col, Row} from "antd";
import {actions} from "../../redux/DialogStore/dialogsReducer";
import Message from "./Messages";
import {useDispatch, useSelector} from "react-redux";
import {getDialogsSelector, getMessagesSelector} from "../../redux/DialogStore/dialogsSelectors";
import {DialogForm} from "./DialogsForm";
import s from './Dialogs.module.css'


export const Dialogs: React.FC = (props) => {
    const dialogs = useSelector(getDialogsSelector)
    const messages = useSelector(getMessagesSelector)
    const dispatch = useDispatch()
// todo: redirect !auth
    let dialogsElements = dialogs.map(d => <DialogsList key={d.id} id={d.id} name={d.name}/>)
    let messagesElements = messages.map(m => <Message key={m.id} message={m.message}/>)

    let addNewMessage = (newMessage: string) => {
        dispatch(actions.sendMessage(newMessage));
    }
    return (
        <div className={s.dialogs}>
            <Row>
                <Col span={7}>
                    {dialogsElements}
                </Col>
                <Col span={14}>
                    {messagesElements}
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <DialogForm addNewMessage={addNewMessage}/>
                </Col>
            </Row>
        </div>
    )
}

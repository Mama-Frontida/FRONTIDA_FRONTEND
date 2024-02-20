import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";


import { AppContext } from "../contexts/AppContexts";
import { Avatar, AvatarGroupCounter, Badge, Button, TextInput, Tooltip } from "flowbite-react";
import { MdArrowBackIos, MdArrowForwardIos, MdArrowRight, MdArrowRightAlt, MdChatBubble, MdChatBubbleOutline, MdEmojiPeople, MdInfo, MdVerticalSplit } from "react-icons/md";
import { GiChatBubble, GiHandGrip, GiPencil, GiPencilBrush, GiQuill, GiTrashCan } from "react-icons/gi";
import { RiArrowRightLine, RiChatQuoteFill, RiPencilFill, RiQuillPenFill, RiRobot2Fill, RiWomenFill } from "react-icons/ri";


const Emotions = [
    {
        emotion_name: 'happy',
        emotion_emoji: '😁',
        emotion_ratio: '90%'
    },
    {
        emotion_name: 'chill',
        emotion_emoji: '🙂',
        emotion_ratio: '8%'
    }, {
        emotion_name: 'normal',
        emotion_emoji: '😐',
        emotion_ratio: '2%'
    }, {
        emotion_name: 'sad',
        emotion_emoji: '😥',
        emotion_ratio: '0%'
    }, {
        emotion_name: 'very sad',
        emotion_emoji: '😰',
        emotion_ratio: '0%'
    },
]
function Chat() {

    const navigate = useNavigate()
    const [openSideNav, setOpenSideNav] = useState(true)

    const { userData, logout } = useContext(AppContext)

    // console.log(userData.username)

    const BotCard = ({ text }) => {
        return (
            <div className="flex flex-row items-start gap-2 w-full my-3">
                <Avatar rounded size={'md'} />
                <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 bg-blue-300 rounded-e-xl rounded-es-xl dark:bg-gray-700">
                    <div className="flex items-center justify-between space-x-2 rtl:space-x-reverse">
                        <span className="text-sm font-semibold text-gray-700 dark:text-white">Frontida BOT</span>
                        <MdInfo className="text-white" />
                    </div>
                    <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">{text}</p>
                    <span className="text-sm font-normal text-gray-500 dark:text-gray-400">11:46</span>
                </div>
            </div>
        )
    }

    const UserCard = ({ text }) => {
        return (
            <div className="flex flex-row items-start justify-end gap-2 w-full my-3">
                <div className="h-full flex flex-col justify-center items-center">
                    <Tooltip
                        className="p-0 m-0 bg-transparent border-none"
                        content={
                            <div className="w-fit flex flex-row-reverse gap-3 h-fit px-5 py-1 bg-white rounded-[99px]">
                                {
                                    Emotions.map((emotion) => (
                                        <div className="flex justify-center items-center flex-col">
                                            <h2 className="text-xl">{emotion.emotion_emoji}</h2>
                                            <p className="text-xs text-gray-700 !font-sans">{emotion.emotion_ratio}</p>
                                        </div>
                                    ))
                                }

                            </div>
                        }
                        style={'light'}
                        placement="left"
                        arrow={false}

                    >
                        <Button color="gray" size={'xs'} className="!w-fit !p-0 !m-0">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 4 15">
                                <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                            </svg>
                        </Button>
                    </Tooltip>
                </div>
                <div className="flex flex-col w-full max-w-[320px] leading-1.5 px-4 py-1 border-gray-200 bg-white rounded-s-xl rounded-ee-xl dark:bg-gray-700">

                    <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">{text}</p>
                    <span className="text-sm font-normal text-gray-500 dark:text-gray-400">Delivered</span>
                </div>
                <Avatar rounded size={'md'} />
            </div>
        )
    }


    return (
        <div className="w-full flex flex-col h-full">

            <div className="flex flex-row h-full p-2 gap-4">
                <div className={`${openSideNav ? 'w-1/4' : 'w-fit'} h-full  rounded p-3`}>
                    <div className="flex flex-col w-full gap-3">
                        <Button size={'lg'} className={!openSideNav ? "py-2" : 'w-fit'} color="gray" pill onClick={() => (setOpenSideNav(!openSideNav))} > {openSideNav ? <MdArrowBackIos /> : <MdArrowForwardIos />} {openSideNav && "Collapse"}</Button>
                        <Button size={'lg'} className={!openSideNav ? "py-2" : 'w-fit'} color="dark" pill={!openSideNav} > {openSideNav && "Start New Chat"} <GiChatBubble className={openSideNav && "ms-20"} />  </Button>
                    </div>
                </div>
                <div className="w-full flex flex-col justify-center items-center rounded py-3">

                    <div className={`${openSideNav ? "w-10/12" : "w-3/4"} flex flex-col justify-between h-full  gap-3 `}>
                        <div className="flex flex-row justify-between w-full">
                            <Badge className="rounded-full px-3 py-1 gap-3 text-lg flex flex-row justify-between" icon={RiPencilFill} >February_10_conversation_1</Badge>

                            <div className="flex flex-row">
                                <Tooltip
                                    style="light"
                                    arrow={false}
                                    trigger="click"
                                    placement='bottom'
                                    content={
                                        <div className="w-[10vw]">
                                            <h3 className="font-serif w-full text-center">Are you sure you want to delete this chat?</h3>
                                            <div className="flex flex-row justify-between pt-2">
                                                <Button color="blue" className="!py-0 h-fit">Cancel</Button>
                                                <Button color="red"className="!text-red-500 h-fit !py-0">Delete</Button>
                                            </div>
                                        </div>
                                    }
                                >
                                    <Badge icon={GiTrashCan} className="bg-red-400 px-3 py-2" color={'dark'} size={'xl'} />
                                    {/* <GiTrashCan/> */}
                                </Tooltip>

                            </div>
                        </div>
                        <div className="h-full w-full flex flex-col justify-end items-center">
                            <UserCard text={'This is the type shii that gets yo bitches'} />
                            <BotCard text={'Thats what Im talking about '} />
                        </div>
                        <div className="flex flex-row h-fit w-full">
                            <form action="" className="w-full">
                                <div className="flex flex-row w-full gap-4">
                                    <TextInput
                                        icon={GiQuill}
                                        rightIcon={RiRobot2Fill}
                                        placeholder="Your text goes here ..."
                                        className="w-full"
                                    />
                                    <Button color="purple" className="py-0" >Send <RiArrowRightLine className="ms-2 text-2xl" /></Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Chat;

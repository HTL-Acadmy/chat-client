import { Box, Image, Spinner } from "@chakra-ui/react";


export default function ChatBoard({
    messages,
    user,
}) {
    const orderedMessages = [...messages].reverse();

    return (
        <div className="chat__conversation-board">
            {messages ? orderedMessages.map((msg, index) => {
                return (
                    <Box
                        key={index}
                        className={`chat__conversation-board__message-container ${Number(msg.from) === Number(user.userId) ? '' : 'reversed'}`}
                    >
                        <Box className={`chat__conversation-board__message__person ${Number(msg.from) === Number(user.userId) ? '' : 'reversed'}`}>
                            <Box className="chat__conversation-board__message__person__avatar">
                                <img src={`${Number(msg.from) === Number(user.userId) ? 'https://randomuser.me/api/portraits/men/9.jpg' : 'https://randomuser.me/api/portraits/women/51.jpg'}`} alt="Dennis Mikle" />
                            </Box>
                            <span className="chat__conversation-board__message__person__nickname">
                                {Number(msg.from) === Number(user.userId) ? user.username : 'Virus 24'}
                            </span>
                        </Box>
                        {msg.message ?
                            <Box className="chat__conversation-board__message__context">
                                <Box className="chat__conversation-board__message__bubble">
                                    <span>
                                        {msg.message}
                                    </span>
                                </Box>
                            </Box>
                            :
                            <Box
                                className="chat__conversation-board__message__context"
                            >
                                <Box
                                    className="chat__conversation-board__message__bubble"
                                >
                                    <Image
                                        src={msg.attachment}
                                        alt="attachment"
                                    />
                                </Box>
                            </Box>
                        }

                        <Box className="chat__conversation-board__message__options">
                            <button className="btn-icon chat__conversation-board__message__option-button option-item emoji-button">
                                <svg className="feather feather-smile sc-dnqmqq jxshSx" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                                    <line x1="9" y1="9" x2="9.01" y2="9"></line>
                                    <line x1="15" y1="9" x2="15.01" y2="9"></line>
                                </svg>
                            </button>
                            <button className="btn-icon chat__conversation-board__message__option-button option-item more-button">
                                <svg className="feather feather-more-horizontal sc-dnqmqq jxshSx" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <circle cx="12" cy="12" r="1"></circle>
                                    <circle cx="19" cy="12" r="1"></circle>
                                    <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                            </button>
                        </Box>
                    </Box>
                )
            })
                :
                <Box
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    height={'100%'}
                >
                    <Spinner
                        borderBlock={'8px red solid'}
                        borderInline={'1px transparent solid'}
                        color={'red'}
                        boxSize={'150px'}
                        speed="0.95s"
                    />
                </Box>
            }

        </div>

    )
}

import { React, useState } from 'react'
import './UserInfoBar.css';
import Modal from '../Public_Component/Modal/Modal'

export default function UserInfoBar(props) {
    const [modalOpen, setModalOpen] = useState(false);

    function addBalance() {
        setModalOpen(true);
    }

    const rechargeAct = (amt) => {
        props.addBalance(amt);
    }


    return (
        <>
            <div className="userinfodiv">
                {modalOpen && <Modal setOpenModal={setModalOpen} title="Add Balance" addClicked={rechargeAct} />}
                <div className="flexCenter">
                    <div className="leftDiv">
                        <div style={{textTransform:"initial",cursor: "pointer"}}>{props.userName}</div>
                    </div>
                    <div className="centertDiv">
                        <div className="timer">00:{props.time}</div>
                    </div>
                    <div className="rightDiv">
                        <div className="userinfodivRight">
                            
                            <span>₹{props.balance}</span>
                            <div className="addBtn" onClick={() => addBalance()}>Add+</div>
                            
                            

                        </div>
                    </div>

                    {/* <div className="userinfodivRight">
                        <div style={{
                            cursor: "pointer", display: "flex",
                            alignItems: "center"
                        }}>
                            <span style={{
                                textTransform: "initial", marginLeft: "11px", cursor: "pointer", display: "flex",
                                alignItems: "center"
                            }}>{props.userName}</span>
                        </div>

                        <span style={{
                            display: "flex",
                            alignItems: "center"
                        }}>₹ {props.balance}</span>

                        <div className="addBtn" onClick={() => addBalance()}>+

                        </div>

                    </div> */}


                </div>


            </div>
        </>
    )
}


{/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-piggy-bank-fill" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M7.964 1.527c-2.977 0-5.571 1.704-6.32 4.125h-.55A1 1 0 0 0 .11 6.824l.254 1.46a1.5 1.5 0 0 0 1.478 1.243h.263c.3.513.688.978 1.145 1.382l-.729 2.477a.5.5 0 0 0 .48.641h2a.5.5 0 0 0 .471-.332l.482-1.351c.635.173 1.31.267 2.011.267.707 0 1.388-.095 2.028-.272l.543 1.372a.5.5 0 0 0 .465.316h2a.5.5 0 0 0 .478-.645l-.761-2.506C13.81 9.895 14.5 8.559 14.5 7.069c0-.145-.007-.29-.02-.431.261-.11.508-.266.705-.444.315.306.815.306.815-.417 0 .223-.5.223-.461-.026a.95.95 0 0 0 .09-.255.7.7 0 0 0-.202-.645.58.58 0 0 0-.707-.098.735.735 0 0 0-.375.562c-.024.243.082.48.32.654a2.112 2.112 0 0 1-.259.153c-.534-2.664-3.284-4.595-6.442-4.595zm7.173 3.876a.565.565 0 0 1-.098.21.704.704 0 0 1-.044-.025c-.146-.09-.157-.175-.152-.223a.236.236 0 0 1 .117-.173c.049-.027.08-.021.113.012a.202.202 0 0 1 .064.199zm-8.999-.65A6.613 6.613 0 0 1 7.964 4.5c.666 0 1.303.097 1.893.273a.5.5 0 1 0 .286-.958A7.601 7.601 0 0 0 7.964 3.5c-.734 0-1.441.103-2.102.292a.5.5 0 1 0 .276.962zM5 6.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0z" />
                        </svg> */}

{/* <div style={{ display: "inline-block", marginLeft: "25px", cursor: "pointer" }} onClick={() => addBalance()}>
                        <svg style={{}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-node-plus-fill" viewBox="0 0 16 16">
                            <path d="M11 13a5 5 0 1 0-4.975-5.5H4A1.5 1.5 0 0 0 2.5 6h-1A1.5 1.5 0 0 0 0 7.5v1A1.5 1.5 0 0 0 1.5 10h1A1.5 1.5 0 0 0 4 8.5h2.025A5 5 0 0 0 11 13zm.5-7.5v2h2a.5.5 0 0 1 0 1h-2v2a.5.5 0 0 1-1 0v-2h-2a.5.5 0 0 1 0-1h2v-2a.5.5 0 0 1 1 0z" />
                        </svg></div> */}
"use client";

import {
  SidebarWrapper,
  Sidebar,
  ClearButton,
} from "../mui-components/SidebarStyles";
import {
  Hero,
  HeroWrapper,
  InsideHero,
  InputWrapper,
  MessageWrapper,
  Text,
  ContentWrapper,
} from "../mui-components/HeroStyles";
import { Box } from "@mui/material";
import { SendRounded, Delete } from "@mui/icons-material";
import { useState, useEffect, useRef } from "react";
import { database, COLLOCTION_ID, DATABASE_ID, ID, client, account } from "../appwrite";
import { Query } from "appwrite";
import { useDispatch } from "react-redux";
import { logout } from "../store/authSlice";
import { useSelector } from "react-redux";
import { login } from "../store/authSlice";
import { useRouter } from "next/navigation";
import { Permission, Role } from "appwrite";


const Main = () => {
  const router = useRouter();
  const dis = useDispatch();
  const token = useSelector((state: any) => state.auth.token);
  const messageEndRef = useRef<any>(null);
  const [messages, setMessages] = useState<any>([]);
  const [text, setText] = useState("");
  console.log('token for id', token)
  console.log('erfgh',Role.user(token.$id).slice(5))

  const logoutUser = async () => {
    await account.deleteSessions();
    dis(logout());
  };
  const getMessages = async () => {
    const { documents } = await database.listDocuments(
      DATABASE_ID,
      COLLOCTION_ID,
      [Query.orderAsc("$createdAt")]
    );
    setMessages(documents);
  };

  const permission = [
    Permission.write(Role.user(token.$id))
  ]

  console.log('token-id', )

  const addMessage = async () => {
    await database.createDocument(DATABASE_ID, COLLOCTION_ID, ID.unique(), {
      user_id: token.$id,
      username: token.name,
      body: text,  
    }, permission)
    setText("");
  };

  const deleteMessage = async (message_id: string) => {
    await database.deleteDocument(DATABASE_ID, COLLOCTION_ID, message_id);
  };


  useEffect(() => {
    getMessages();
    const unsub = client.subscribe(
      `databases.${DATABASE_ID}.collections.${COLLOCTION_ID}.documents`,
      (response: any) => {
        if (
          response.events.includes(
            "databases.*.collections.*.documents.*.delete"
          )
        ) {
          setMessages((prev: any) =>
            prev.filter((message: any) => message.$id !== response.payload.$id)
          );
        }

        if (
          response.events.includes(
            "databases.*.collections.*.documents.*.create"
          )
        ) {
          
          setMessages((prev: any) => [...prev, response.payload]);
          console.log(messages);
        }
      }
    );
    return () => unsub();
  }, [messages]);

  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollTop = messageEndRef.current.scrollHeight;
    }
  }, [messages]);

  console.log('messages',messages)

  return (
    <Box
      sx={{
        display: "flex",
        width: "100vw",
        backgroundColor: "rgb( 9, 46, 32)",
      }}
    >
      <SidebarWrapper>
        <Sidebar>
          <ClearButton>Clear Chat</ClearButton>
          <ClearButton onClick={logoutUser}>Logout</ClearButton>
        </Sidebar>
      </SidebarWrapper>
      <HeroWrapper>
        <Hero>
          <InsideHero>
            <MessageWrapper>
              <ContentWrapper ref={messageEndRef}>
                {messages.map((message: any, index: number) => {
                  console.log('message', message.user_id)
                  return (
                    <div
                      key={index}
                      style={{
                        backgroundColor: "rgb( 9, 46, 32)",
                        borderRadius: "10px",
                        border: "1px solid #fff",
                        margin: "0.5rem",
                        padding: "0.5rem",
                        width: "fit-content",
                        maxWidth: "50%",
                        display: "flex",
                        gap: "1.5rem",
                        alignItems: "center",
                      }}
                    >
                      <div style={{width: '100%'}}>
                        <div style={{display: 'flex', width: '100%', justifyContent: 'space-between', gap: '20px'}}>
                        <p style={{fontSize: '10px'}}>{message.username ? message.username : 'Anonymous User'}</p>
                        <p
                          style={{
                            fontSize: "12px",
                          }}
                        >
                          {message &&
                            new Date(message.$createdAt).toLocaleTimeString()}
                        </p>
                        </div>
                        <p
                          style={{
                            fontSize: "16px",
                          }}
                        >
                          {message && message.body}
                        </p>
                      </div>
                     {
                      message.$permissions
                      .includes(`delete(\"user:${token.$id}\")`) ? (
                        <Delete
                          sx={{
                            fontSize: "20px",
                            color: "red",
                            cursor: "pointer",
                            '&:hover':{
                                color: 'white'
                            }
                          }}
                          onClick={() => deleteMessage(message.$id)}
                        /> 
                      ) : null
                     }
                    </div>
                  );
                })}
              </ContentWrapper>
            </MessageWrapper>
            <InputWrapper>
              <Text
                placeholder="Type your message.. "
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    addMessage();
                  }
                }}
              />
              <SendRounded
                sx={{ color: "green", fontSize: "30px", cursor: "pointer" }}
                onClick={addMessage}
              />
            </InputWrapper>
          </InsideHero>
        </Hero>
      </HeroWrapper>
    </Box>
  );
};

export default Main;

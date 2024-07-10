"use client"
import { SignedIn, UserButton } from "@clerk/nextjs";
import { clerkClient } from "@clerk/nextjs/server";
import { useEffect, useState } from "react";

// Dashboard component definition
const Dashboard = () => {
    //list of users
    const [fetchUsers,setFetchUsers] = useState([null]);

    useEffect(() => {
        const fetchUsersFromClerk = async () => {
            try {
                const response = await clerkClient.users.getUserList();
                
                console.log(response);
                
                // setFetchUsers(response.data);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };
        
        fetchUsersFromClerk();
    }, []);

    // List of chat items
    const chatList = [
        { img: "user1.jpg", name: "User 1", message: "Hello, how are you?" },
        { img: "user2.jpg", name: "User 2", message: "Are we still on for tomorrow?" },
        { img: "user3.jpg", name: "User 3", message: "Can you send me the report?" }
    ];

    // List of messages in the chat
    const messages = [
        { sender: "Me", text: "Hey, how's it going?", align: "self-end" },
        { sender: "Other Person", text: "I'm good, thanks! How about you?", align: "self-start" },
        { sender: "Me", text: "Doing well, just working on a project.", align: "self-end" },
        { sender: "Other Person", text: "Sounds interesting! Need any help?", align: "self-start" }
    ];

    // List of shared media items
    const sharedMedia = ["media1.jpg", "media2.jpg", "media3.jpg"];

    return (
        // Main container for the dashboard
        <div className="h-screen flex justify-center items-center">

            <div className="w-screen h-screen md:w-11/12 md:h-5/6">
                {/* <div className="flex w-full rounded-md backdrop-blur-sm mb-1 p-5 bg-white/30 drop-shadow-xl">
                    <h3 className="text-center">TESTING</h3>
                </div> */}
                <div className="flex gap-1 h-full">
                    {/* Chat list section */}
                    <div className="flex h-full rounded-md backdrop-blur-sm bg-white/30 drop-shadow-xl gap-2 w-1/4">
                        <div className="flex flex-col border-e h-full p-2 justify-end">
                            {/* User button for signed-in users */}
                            <SignedIn>
                                <UserButton />
                            </SignedIn>
                        </div>
                        <div className="h-full p-2">
                            {/* Search input */}
                            <div className="flex items-center">
                                <div className="bg-white rounded-xl flex items-center p-2 shadow-md">
                                    <input type="text" className="border-none text-gray-700 outline-none bg-transparent p-2 w-full" placeholder="Search" />
                                    <button className="text-gray-500 hover:text-gray-700">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M16.65 10.35a6.3 6.3 0 11-12.6 0 6.3 6.3 0 0112.6 0z" />
                                        </svg>
                                    </button>
                                </div>
                                <button className="ml-2 bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                                    </svg>
                                </button>
                            </div>
                            {/* Chat list items */}
                            <div className="flex flex-wrap gap-2 my-2">
                                {chatList.map((chat, index) => (
                                    <div key={index} className="w-full h-16 rounded-2xl bg-slate-300 flex items-center p-2">
                                        <img src={chat.img} alt={chat.name} className="w-10 h-10 rounded-full mr-2" />
                                        <div>
                                            <p className="font-bold">{chat.name}</p>
                                            <p className="text-sm text-gray-600">{chat.message}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* Chats section */}
                    <div className="w-1/2 h-full rounded-md backdrop-blur-sm bg-white/30 drop-shadow-xl p-4 flex flex-col">
                        <div className="flex flex-col gap-2 overflow-y-auto flex-grow">
                            {/* Messages */}
                            {messages.map((message, index) => (
                                <div key={index} className={`bg-white p-2 rounded-lg ${message.align}`}>
                                    <p className="font-bold">{message.sender}:</p>
                                    <p>{message.text}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-2 flex items-center gap-1">
                            <button className="ml-2 bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                                </svg>
                            </button>
                            <div className="flex items-center border-none text-gray-700 outline-none bg-white p-2 rounded-lg flex-grow">
                                <input type="text" className="flex-grow border-none outline-none bg-transparent" placeholder="Type a message" />
                                <button className="text-gray-500 hover:text-gray-700">
                                    {/* Send icon */}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* User details section */}
                    <div className="w-1/4 h-full rounded-md backdrop-blur-sm bg-white/30 drop-shadow-xl p-4 flex flex-col items-center">
                        <div className="mb-4 flex flex-col items-center">
                            <img src="user2.jpg" alt="User 2" className="w-24 h-24 rounded-full mb-2" />
                            <h2 className="text-lg font-bold">User 2</h2>
                        </div>
                        <div className="mb-4 w-full">
                            <h2 className="text-xl font-bold mb-2">Shared Media</h2>
                            <div className="flex flex-wrap gap-2">
                                {sharedMedia.map((media, index) => (
                                    <img key={index} src={media} alt={`Media ${index + 1}`} className="w-16 h-16 rounded-lg" />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;

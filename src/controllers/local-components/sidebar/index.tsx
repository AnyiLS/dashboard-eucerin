import React from "react";
import {FaPowerOff, FaUserLock, FaUsers} from "react-icons/fa";
import {BiWorld} from "react-icons/bi";
import {AiFillTrophy, AiOutlineMenuUnfold, AiOutlineMessage, AiTwotoneTrophy} from "react-icons/ai";
import { BsFillTrophyFill } from "react-icons/bs";

export interface ILinksSidebar {
    path: string;
    to: string;
    name: string;
    icon: JSX.Element;
}

export interface IRoutesSidebar {
    title: string;
    links: ILinksSidebar[];
}

const useSidebar = () => {
    const routes: IRoutesSidebar[] = [
        {
            title: "Usuarios Inactivod",
            links: [
                {
                    path: "/admin/active-users5",
                    to: "/admin/active-users5",
                    name: "Dashboard",
                    icon: <img src="/graficas.png" className="w-6 h-6"/>
                },
            ]
        },
        {
            title: "Usuarios Registrados",
            links: [
                {
                    path: "/admin/active-users6",
                    to: "/admin/active-users6",
                    name: "Dermoconsejo",
                    icon: <img src="/col.png" className="w-6 h-6"/>
                },
                {
                    path: "/admin/active-users1",
                    to: "/admin/active-users1",
                    name: "Visita Médica Col",
                    icon: <img src="/dermo.png" className="w-6 h-6"/>
                },
                {
                    path: "/admin/active-users2",
                    to: "/admin/active-users2",
                    name: "Dermoconsejo",
                    icon: <img src="/ecu.png" className="w-6 h-6"/>
                },
                {
                    path: "/admin/active-users3",
                    to: "/admin/active-users3",
                    name: "Visita Médica Ecu",
                    icon: <img src="/ecu-dermo.png" className="w-6 h-6"/>
                },
            ]
        },
        {
            title: "Quiz",
            links: [
                {
                    path: "/admin/world/1",
                    to: "/admin/world/1",
                    name: "Dermoconsejo",
                    icon: <img src="/lapiz.png" className="w-6 h-8"/>
                },
                {
                    path: "/admin/world/2",
                    to: "/admin/world/2",
                    name: "Visita Médica Col",
                    icon: <img src="/col.png" className="w-6 h-6"/>
                },
                {
                    path: "/admin/world/3",
                    to: "/admin/world/3",
                    name: "Dermoconsejo",
                    icon: <img src="/dermoecu.png" className="w-6 h-8"/>
                },
                {
                    path: "/admin/world/4",
                    to: "/admin/world/4",
                    name: "Visita Médica Ecu",
                    icon: <img src="/ecu.png" className="w-6 h-6"/>
                },
            ]   
        },
        {
            title: "certificaciones",
            links: [
                {
                    path: "/admin/scores/1",
                    to: "/admin/scores/1",
                    name: "Dermoconsejo Col",
                    icon: <img src="/certificado.png" className="w-6 h-8"/>
                },
                {
                    path: "/admin/scores/2",
                    to: "/admin/scores/2",
                    name: "Visita Médica Col",
                    icon: <img src="/col-visi.png" className="w-6 h-8"/>
                },
                {
                    path: "/admin/scores/3",
                    to: "/admin/scores/3",
                    name: "Dermoconsejo Ecu",
                    icon: <img src="/certi-ecu.png" className="w-6 h-8"/>
                },
                {
                    path: "/admin/scores/4",
                    to: "/admin/scores/4",
                    name: "Visita Médica Ecu",
                    icon: <img src="/visi-ecu.png" className="w-6 h-8"/>
                },
            ]   
        },
        
    ];

    return {
        routes
    };
}


export default useSidebar;
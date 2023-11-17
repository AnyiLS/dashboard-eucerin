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
            title: "Dashboard",
            links: [
                {
                    path: "/admin/dashboard",
                    to: "/admin/dashboard",
                    name: "Dashboard",
                    icon: <img src="/graficas.png" className="w-6 h-6"/>
                },
            ]
        },
        {
            title: "Activar Usuarios",
            links: [
                {
                    path: "/admin/inactive-users",
                    to: "/admin/inactive-users",
                    name: "Usuarios Inactivos",
                    icon: <img src="/activos.png" className="w-8 h-8"/>
                },
            ]
        },
        {
            title: "Usuarios",
            links: [
                {
                    path: "/admin/active-users",
                    to: "/admin/active-users",
                    name: "Usuarios Registrados",
                    icon: <img src="/inactive.png" className="w-8 h-8"/>
                },
            ]
        },
        {
            title: "Quiz",
            links: [
                {
                    path: "/admin/quiz/1",
                    to: "/admin/quiz/1",
                    name: "Dermoconsejo",
                    icon: <img src="/lapiz.png" className="w-6 h-8"/>
                },
                {
                    path: "/admin/quiz/2",
                    to: "/admin/quiz/2",
                    name: "Visita Médica Col",
                    icon: <img src="/col.png" className="w-6 h-6"/>
                },
                {
                    path: "/admin/quiz/3",
                    to: "/admin/quiz/3",
                    name: "Dermoconsejo Ecu",
                    icon: <img src="/dermoecu.png" className="w-6 h-8"/>
                },
                {
                    path: "/admin/quiz/4",
                    to: "/admin/quiz/4",
                    name: "Visita Médica Ecu",
                    icon: <img src="/ecu.png" className="w-6 h-6"/>
                },
            ]   
        },
        {
            title: "certificaciones",
            links: [
                {
                    path: "/admin/certificaciones/1",
                    to: "/admin/certificaciones/1",
                    name: "Dermoconsejo Col",
                    icon: <img src="/certificado.png" className="w-6 h-8"/>
                },
                {
                    path: "/admin/certificaciones/2",
                    to: "/admin/certificaciones/2",
                    name: "Visita Médica Col",
                    icon: <img src="/col-visi.png" className="w-6 h-8"/>
                },
                {
                    path: "/admin/certificaciones/3",
                    to: "/admin/certificaciones/3",
                    name: "Dermoconsejo Ecu",
                    icon: <img src="/certi-ecu.png" className="w-6 h-8"/>
                },
                {
                    path: "/admin/certificaciones/4",
                    to: "/admin/certificaciones/4",
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
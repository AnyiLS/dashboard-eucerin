import React from "react";

const Button = React.lazy(() => import("./button"));
const Card = React.lazy(() => import("./card"));
const Dropdown = React.lazy(() => import("./dropdown"));
const LinkSidebar = React.lazy(() => import("./link-sidebar"));
const Modal = React.lazy(() => import("./modal"));
const Input = React.lazy(() => import("./input"));
const Separator = React.lazy(() => import("./separator"));
const Table = React.lazy(() => import("./table"));
const Loading = React.lazy(() => import("./loading"));

const useComponents = () => {
    return {
        Button,
        Dropdown,
        LinkSidebar,
        Modal,
        Input,
        Separator,
        Table,
        Loading,
        Card
    };
}

export default useComponents;
import React from "react";
import { Primary } from "../Buttons/Button.stories";
import { Danger } from "../Buttons/Button.stories";

export default {
    title: 'Combined/buttons'
}
export const Buttons = () => {
    return (
        <>
            <Primary />
            <Danger />
        </>
    );
} 
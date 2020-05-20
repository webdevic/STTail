import React from "react";
import InputField from "./InputField";

export default {
    component: InputField,
    title: "InputField",
};

export const Hello = () => (
    <InputField
        label="hello"
        onEnterKeyDown={(keys: string): void => {
            console.log({ keys });
        }}
        onInputFieldChange={(keys: string): void => {
            console.log({ keys });
        }}
    />
);

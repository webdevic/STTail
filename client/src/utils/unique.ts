import debug from "debug";

const uniqueDebuger = debug("unique utils");

export const uniqueArrayById = (data: any[]) => {
    uniqueDebuger("uniqueArrayById", { data });
    return Array.from(new Set(data.map((item) => item.id))).map((id) => {
        return data.find((item) => item.id === id);
    });
};

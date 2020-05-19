import React, { useEffect, useRef } from "react";

const useInterval = (handle: Function, delay: number) => {
    const savedCallback: React.MutableRefObject<any> = useRef();

    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = handle;
    }, [handle]);

    // Set up the interval.
    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
};

export default useInterval;

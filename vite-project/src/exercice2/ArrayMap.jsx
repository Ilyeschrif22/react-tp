import { useEffect, useState } from "react";

const ArrayMap = () => {

    useEffect(() => {
        showarr()
    }, [])

    const arr = [1, 2, 3, 4, 5]


    function showarr() {
        arr.map(arr => console.log(arr))
    }





    return (
        <>
            <div></div>
        </>
    );
};

export default ArrayMap;
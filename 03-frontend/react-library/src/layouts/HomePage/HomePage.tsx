import {ExoloreTopBooks} from "./components/ExoloreTopBooks";
import {Carousel} from "./components/Carousel";
import {Heros} from "./components/Heros";
import {LibraryServices} from "./components/LibraryServices";
import React from "react";

export const HomePage = () => {
    return (
        <>
            <ExoloreTopBooks/>
            <Carousel/>
            <Heros/>
            <LibraryServices/>
        </>
    )
}
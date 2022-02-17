import React from "react";
// import styled from "styled-components";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import Card from "./Card";

const DicList = (props) => {
    const data = useSelector((state) => state.words.words);
    const words = data.map((word) => <Card word={word} key={word.id}/>);
    return (
        <>
            <h2>목록</h2>
            <Link to="/addword">추가하기</Link>
            {words}
        </>
    );
};



export default DicList;
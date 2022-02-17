import {useDispatch} from "react-redux";
import {deleteWordFB} from "./redux/modules/words";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";

const Card = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const deleteWord = (id) => {
        dispatch(deleteWordFB(id));
    };
    return (
        <>
            <CardStyle>
            <h3>카드</h3>
            <h4>{props.word.word}</h4>
            <h4>{props.word.meaning}</h4>
            <h4 style={{color: 'blue'}}>{props.word.example}</h4>
            <button onClick={() => {
                navigate("./updateWord", {state: props.word});
            }}>수정</button>
            <button onClick={() => {
                deleteWord(props.word.id);
            }}>
                삭제
            </button>
            </CardStyle>
        </>
    )
}


const CardStyle = styled.div `
overflow-x: hidden;
overflow-y: auto;
width: 30%;
background-color: ivory;
`;

export default Card;
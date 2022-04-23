import { useSelector } from "react-redux";
import styled from "styled-components";
import { animated, useSpring } from "react-spring";

import { AppState } from "../../store/reducers/rootReducer";

const Blur = () => {
    const { NavOn } = useSelector((state: AppState) => state.nav);
    const { ModOn } = useSelector((state: AppState) => state.mod);

    interface springProps {
        pointerEvents?: string;
    }

    const blur = useSpring<springProps>({
        opacity: NavOn || ModOn ? "1" : "0",
        //display written as 'diplay'
        diplay: NavOn || ModOn ? "block" : "none",
        pointerEvents: NavOn || ModOn ? "all" : "none",
    });

    return <Blured style={blur} />;
};

export default Blur;

const Blured = styled(animated.div)`
    width: 100vw;
    height: 100vh;
    opacity: 0;

    pointer-events: none;
    position: fixed;

    z-index: 7;
    backdrop-filter: blur(15px);
`;

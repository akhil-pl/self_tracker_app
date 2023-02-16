import React, {useState} from 'react'
import styled from 'styled-components'

function Trackerlist(props) {
    const [active, setActive] = useState("");

    return (
        <TrackerlistCSS>
            Select a Tracker
            {props.userTrackers.map((tracker) =>(
                <ListButtonToggleCSS
                key={tracker.tid}
                active={active === tracker.tname} //To make only the active list button highlight. But not working properly
                onClick={() => {props.ShowList(tracker.tname); setActive(tracker.tname)}}
                >
                    {tracker.tname}
                </ListButtonToggleCSS>
            ))}
        </TrackerlistCSS>
    )
};


const TrackerlistCSS = styled.div`
    background-color: aqua;
    align-self: stretch;
`;

// Link to this button styling: https://react.school/ui/button
const theme = {
    blue: {
      default: "#a52a2a",
      hover: "#283593"
    },
    pink: {
      default: "#e91e63",
      hover: "#ad1457"
    }
  };  
const ListButtonCSS = styled.button`
    background-color: ${(props) => theme[props.theme].default};
    color: white;
    padding: 5px 15px;
    display: block;
    border-radius: 5px;
    outline: 0;
    text-transform: uppercase;
    margin: 10px 0px;
    cursor: pointer;
    box-shadow: 0px 2px 2px lightgray;
    transition: ease background-color 250ms;
    &:hover {
        background-color: ${(props) => theme[props.theme].hover};
    }
    &:disabled {
        cursor: default;
        opacity: 0.7;
    }
`;
ListButtonCSS.defaultProps = {
    theme: "blue"
};
const ListButtonToggleCSS = styled(ListButtonCSS)`
  opacity: 0.7;
  ${({ active }) =>
    active &&
    `
    opacity: 1; 
  `}
`;



export default Trackerlist







// function Trackerlist(props) {

    // const ListButtons = props.userTrackers.map((tracker) => {
    //     const [active, setActive] = useState("");

    //     return (
    //         <ListButtonToggleCSS
    //             key={tracker.tid}
    //             active={active === tracker.tname} //To make only the active list button highlight. But not working properly
    //             onClick={() => {props.ShowList(tracker.tname); setActive(tracker.tname)}}
    //         >
    //             {tracker.tname}
    //         </ListButtonToggleCSS>
    //     );
    // });
   
    // return (
    //     <TrackerlistCSS>
    //         Tracker list
    //         {ListButtons}
            
    //     </TrackerlistCSS>
    // )
// };

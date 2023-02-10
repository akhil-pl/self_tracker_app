import React from 'react'
import styled from 'styled-components'

function Trackerlist(props) {

    function ShowList(tname) {
        props.setViewTracker(tname)
    }

    return (
        <TrackerlistCSS>
            Tracker list
            {props.userTrackers.map((tracker) => {
                return (
                    <div key={tracker.tid}>
                        <button onClick={ShowList(tracker.tname)}>{tracker.tname}</button>
                    </div>
                )
            })}
        </TrackerlistCSS>
    )
}

const TrackerlistCSS = styled.div`
    background-color: aqua;
    align-self: stretch;
`

export default Trackerlist
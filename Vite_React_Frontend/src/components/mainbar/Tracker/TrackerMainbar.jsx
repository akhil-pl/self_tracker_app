import React from 'react';
import styled from 'styled-components';

import CreateTracker from './CreateTracker';
import {Trackerlist, ListButtons} from './Trackerlist';

function TrackerMainbar(props) {
  return (
    <TrackerMainbarCSS>
        <CreateTracker />
        <Trackerlist />
        <ListButtons userTrackers={props.userTrackers} ShowList={props.ShowList} />
    </TrackerMainbarCSS>
  )
};

const TrackerMainbarCSS = styled.div`
    background-color: aqua;
    align-self: stretch;
`

export default TrackerMainbar
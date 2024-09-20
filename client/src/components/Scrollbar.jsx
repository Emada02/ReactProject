import React, { useContext } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Box, Typography } from '@mui/material';
import BodyPart from './BodyPart';
import 'react-horizontal-scrolling-menu/dist/styles.css';




const Scrollbar = ({ data, bodyPart, setBodyPart }) => {
    return (
        <ScrollMenu >
            {data.slice(0, 4).map((item) => (
                <Box
                    key={item.id || item}
                    itemID={item.id || item}
                    title={item.id || item}
                    m="0 40px"
                >
                    <BodyPart
                        item={item}
                        setBodyPart={setBodyPart}
                        bodyPart={bodyPart}
                    />
                </Box>
            ))}
        </ScrollMenu>
    );
};


export default Scrollbar;



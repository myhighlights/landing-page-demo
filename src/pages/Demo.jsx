import React, {useEffect} from 'react';
import Favourites from '../components/demo/favourites/Favourites';
import Games from '../components/demo/games/Games';

const Demo = () => {
    useEffect(() => {
        document.body.classList.add("scrollBody");
        
        return () => {
          document.body.classList.remove("scrollBody");
        };
      }, []);

    return (
        <>
            <Favourites />
            <Games />
        </>
    );
};

export default Demo;
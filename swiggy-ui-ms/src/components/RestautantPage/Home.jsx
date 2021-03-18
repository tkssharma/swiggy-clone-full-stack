import React from 'react';
import Navigator from './Navigator';
import HomeDummy from './HomeDummy';
import AllRestaurants from './AllRestaurants';

function Home() {
    return (
        <div>
            <Navigator />
            <HomeDummy />
            <AllRestaurants />
        </div>
    );
}

export default Home;

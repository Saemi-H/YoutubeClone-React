import React from "react";
import Detail from "../component/detailpage/Detail";
import { Route,Switch } from "react-router-dom";


const route = () => {
    return (
        <Switch>
           
            <Route path="/detail" component={Detail} />
        </Switch>
    );
};

export default route;

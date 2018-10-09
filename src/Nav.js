import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { Button } from 'reactstrap';

class Nav extends Component {
    render() {
        return (
            <div>
                 <Button color="danger"><Link to="/About">show me Abput!</Link></Button>
                <Link to="/Contact">show me Contact!</Link>
                <Link to="/">show me Home!</Link>
                <Link to="/user/Jack">show me Jack!</Link>
                <Link to="/user/Jill">show me Jill!</Link>
                <Link to="/user/Hill">show me Hill!</Link>
            </div>
        );
    }
}

export default Nav;

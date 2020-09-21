import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

class HomePage extends Component {
    render() {
        return (
            // <Router>
            //     <div>
            //         <ul>
            //             <li><NavLink to='/person' exact></NavLink>person</li>
            //             <li><NavLink to='/event' exact>event</NavLink></li>
            //         </ul>
            //         <Route path='/person' component={} />
            //         <Route path='/event' component={} />
            //     </div>
            // </Router>

            <div>
                <button>אנשים</button>
                <button>אירוע</button>
            </div>
        );
    };
}

export default HomePage; 
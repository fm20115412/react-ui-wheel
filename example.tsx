import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { Icon } from './lib';
import IconExample from './lib/icon/icon.example'
import './example.scss';

ReactDOM.render(
    <Router>
        <div className="container">
            <header>React UI<Icon name='bear' /></header>
            <div className="content">
                <aside>
                    <ul>
                        <li>
                            <Link to="/Icon">Icon</Link>
                        </li>
                        <li>
                            <Link to="/Button">Button</Link>
                        </li>
                        <li>
                            <Link to="/Dialog">Dialog</Link>
                        </li>
                    </ul>
                </aside>
                <main>
                    <Route path="/Icon" component={IconExample} />
                </main>
            </div>
        </div>
    </Router>,
    document.getElementById('root')
)

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Các trang của bạn
import Home from '../views/HomePage';
import About from '../views/AboutPage';
import Contact from '../views/ContactPage';
import Login from '../views/LoginPage';
import Register from '../views/RegisterPage';

function Routes() {
    return (
        <Router>
            <Switch>
                {/* Định nghĩa các route */}
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                
                {/* Bạn có thể thêm Route mặc định nếu không tìm thấy bất kỳ route nào */}
                <Route path="*">
                    <div>Page Not Found</div>
                </Route>
            </Switch>
        </Router>
    );
}

export default Routes;

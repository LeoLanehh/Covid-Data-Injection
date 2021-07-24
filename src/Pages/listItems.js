import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';

import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
// import List from '@material-ui/core/List';

// import Paper from '@material-ui/core/Paper';


// import Divider from '@material-ui/core/Divider';
// import InboxIcon from '@material-ui/icons/Inbox';
// import DraftsIcon from '@material-ui/icons/Drafts';
// import Typography from '@material-ui/core/Typography';
// import { Route, MemoryRouter } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';


function ListItemLink(props) {
    const { icon, primary, to } = props;

    const renderLink = React.useMemo(
        () => React.forwardRef((itemProps, ref) => <RouterLink to={to} ref={ref} {...itemProps} />),
        [to],
    );

    return (
        <li>
            <ListItem button component={renderLink}>
                {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
                <ListItemText primary={primary} />
            </ListItem>
        </li>
    );
}
ListItemLink.propTypes = {
    icon: PropTypes.element,
    primary: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
};



export const mainListItems = (
    <div>

        <ListItemLink to="/dashboard" primary="Dashboard" icon={<DashboardIcon />} />
        <ListItemLink to="/sql-injection" primary="SQL Injection" icon={<AssignmentIcon />} />
        <ListItemLink to="/nosql-injection" primary="NOSQL Injection" icon={<AssignmentIcon />} />
        <ListItemLink to="/dataset" primary="Dataset" icon={<BarChartIcon />} />
        <ListItemLink to="/result" primary="Result" icon={<LayersIcon />} />

    </div>
);
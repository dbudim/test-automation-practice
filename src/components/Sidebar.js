import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InputIcon from '@mui/icons-material/Input';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import DateRangeIcon from '@mui/icons-material/DateRange';
import TableRowsIcon from '@mui/icons-material/TableRows';
import CurrencyFrancIcon from '@mui/icons-material/CurrencyFranc';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import MessageIcon from '@mui/icons-material/Message';

export default function Sidebar({ onSelectView }) {
    return (
        <Drawer variant="permanent">
            <List>
                <ListItem button onClick={() => onSelectView('Dashboard')}>
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Buttons" />
                </ListItem>
                <ListItem button onClick={() => onSelectView('Inputs')}>
                    <ListItemIcon>
                        <InputIcon />
                    </ListItemIcon>
                    <ListItemText primary="Inputs" />
                </ListItem>
                <ListItem button onClick={() => onSelectView('Dropdowns')}>
                    <ListItemIcon>
                        <ArrowDropDownIcon />
                    </ListItemIcon>
                    <ListItemText primary="Dropdowns" />
                </ListItem>
                <ListItem button onClick={() => onSelectView('File Upload')}>
                    <ListItemIcon>
                        <CloudUploadIcon />
                    </ListItemIcon>
                    <ListItemText primary="File Upload" />
                </ListItem>
                <ListItem button onClick={() => onSelectView('Drag & Drop')}>
                    <ListItemIcon>
                        <DragIndicatorIcon />
                    </ListItemIcon>
                    <ListItemText primary="Drag & Drop" />
                </ListItem>
                <ListItem button onClick={() => onSelectView('Date Picker')}>
                    <ListItemIcon>
                        <DateRangeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Date Picker" />
                </ListItem>
                <ListItem button onClick={() => onSelectView('Tables')}>
                    <ListItemIcon>
                        <TableRowsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Tables" />
                </ListItem>
                <ListItem button onClick={() => onSelectView('Iframes')}>
                    <ListItemIcon>
                        <CurrencyFrancIcon />
                    </ListItemIcon>
                    <ListItemText primary="Iframes" />
                </ListItem>
                <ListItem button onClick={() => onSelectView('Loaders')}>
                    <ListItemIcon>
                        <HourglassBottomIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Loaders" />
                </ListItem>
                <ListItem button onClick={() => onSelectView('Dialogs')}>
                    <ListItemIcon>
                        <MessageIcon />
                    </ListItemIcon>
                    <ListItemText primary="Dialogs" />
                </ListItem>
            </List>
        </Drawer>
    );
}
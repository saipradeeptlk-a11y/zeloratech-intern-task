import {Home, LayoutDashboard, Users, MessageSquare, Settings, HelpCircle } from 'lucide-react';
import '../App.css';

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <div className="sidebar_logo">
                <div className="logo_box">ti</div>
            </div>
            <nav className="sidebar_nav">
                <div className="nav_item"><Home size={20} /></div>
                <div className="nav_item"><LayoutDashboard size={20} /></div>
                <div className="nav_item active"><Users size={20} /></div>
                <div className="nav_item"><MessageSquare size={20} /></div>
                <div className="nav_item"><Settings size={20} /></div>
            </nav>
            <div className="sidebar_bottom">
                <div className="nav_item"><HelpCircle size={20} /></div>
            </div>
        </aside>
    );
};
export default Sidebar;
import React from 'react';
import {Search, Plus, ChevronLeft,Bell,Settings} from 'lucide-react';
import '../App.css'

const Topbar =({totalCandidates, onSearchChange,onAddClick}) => {
    return(
        <header className="topbar">
         <div className="topbar_left">
            <button>
                <ChevronLeft size={20} />
            </button>
            <div className="title_section">
                <h2>Research and Development Officer
                <span className="total_count">({totalCandidates})</span>     
                </h2>
                <div className="status_tags">
                    <span className ="tag_open">Open</span>
                    <span className="tag_info">Researcher</span>
                    <span className="tag_info">Onsite</span>

                </div>


            </div>
         </div>
         <div className="Topbar_right">
                <div className="search_wrapper">
                <Search size={18} className="search_icon" />
                <input 
                    type="text" 
                    placeholder="Search candidates..." 
                    className="search_input"
                    onChange={(e) => onSearchChange(e.target.value)} 
                /> 
                </div>
         
            
                <button className="add_candidate_btn" onClick={onAddClick}>
                <Plus size={18} />
                <span>Add Candidate</span>
                </button>

                
                <div className="topbar_icons">
                <Bell size={20} className="header_icon" />
                <Settings size={20} className="header_icon" />
                </div>
                
                <div className="user_profile">
                <div className="avatar">BF</div>
                </div>
            </div>    
      
        </header>
    );
};
export default Topbar;
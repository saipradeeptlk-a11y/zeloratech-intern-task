import React from 'react';
import '../App.css';

// Generate initials from name
const getInitials = (name) => {
    return name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
};

// Give each candidate a consistent avatar color based on their name
const AVATAR_COLORS = ['#ef4444','#f97316','#eab308','#22c55e','#3b82f6','#8b5cf6','#ec4899','#14b8a6'];
const getAvatarColor = (name) => AVATAR_COLORS[name.charCodeAt(0) % AVATAR_COLORS.length];

const CandidateCard = ({candidate, handleDelete, handleMove, Stages}) => {
    const currentIndex = Stages.indexOf(candidate.stage);
    const nextStage = Stages[currentIndex + 1];

    return( 
        <div className="candidate_card">
            <div className="card_header">
                <div className="card_identity">
                    {/* Avatar circle with initials */}
                    <div className="candidate_avatar" style={{backgroundColor: getAvatarColor(candidate.name)}}>
                        {getInitials(candidate.name)}
                    </div>
                    <div className="candidate_info">
                        <h4 className="candidate_name">{candidate.name}</h4>
                        <span className="applied_date">Applied at {candidate.date}</span>
                    </div>
                </div>
                {/* subtle delete button top right */}
                <button className="delete_btn" onClick={() => handleDelete(candidate.id)}>×</button>
            </div>

            <div className="card_footer">
                {/* Star rating like reference */}
                {candidate.rating ? (
                    <span className="rating_row">
                        <span className="star">★</span>
                        <span className="rating_text">{candidate.rating} Overall</span>
                    </span>
                ) : null}

                {/* Referred badge */}
                {candidate.referred && <span className="badge">⟳ Referred</span>}

                {/* Three dot menu */}
                <span className="dots_menu">···</span>
            </div>

            <div className="card_actions">
                {nextStage ? (
                    <button className="move-btn" onClick={() => handleMove(candidate.id, nextStage)}>
                        + Move to {nextStage}
                    </button>
                ) : (
                    <span className="final_stage">Final Stage</span>
                )}
            </div>
        </div>
    );
}

export default CandidateCard;

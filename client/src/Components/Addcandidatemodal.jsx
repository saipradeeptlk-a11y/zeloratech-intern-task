import React, { useState } from 'react';
import '../App.css';

const AddCandidateModal = ({ onClose, onAdd }) => {
    const [name, setName] = useState('');
    const [dob, setDob] = useState('');
    const [rating, setRating] = useState('');
    const [referred, setReferred] = useState(false);

    const handleSubmit = () => {
        if(!name.trim()){
            alert("Name is required!");
            return;
        }
        if(!dob){
            alert("Date of birth is required!");
            return;
        }

        const newCandidate = {
            name: name.trim(),
            dob: dob,
            rating: rating ? parseFloat(rating) : 0,
            referred: referred
        };

        onAdd(newCandidate);
        onClose();
    };

    return (
        <div className="modal_overlay" onClick={onClose}>
            <div className="modal_box" onClick={(e) => e.stopPropagation()}>
                <div className="modal_header">
                    <h3>Add New Candidate</h3>
                    <button className="modal_close_btn" onClick={onClose}>×</button>
                </div>

                <div className="modal_body">
                    <div className="form_group">
                        <label>Full Name *</label>
                        <input
                            type="text"
                            placeholder="Enter candidate name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="modal_input"
                        />
                    </div>

                    <div className="form_group">
                        <label>Date of Birth *</label>
                        <input
                            type="date"
                            value={dob}
                            onChange={(e) => setDob(e.target.value)}
                            className="modal_input"
                        />
                    </div>

                    <div className="form_group">
                        <label>Rating (0 - 5)</label>
                        <input
                            type="number"
                            placeholder="e.g. 3.5"
                            value={rating}
                            min="0"
                            max="5"
                            step="0.5"
                            onChange={(e) => setRating(e.target.value)}
                            className="modal_input"
                        />
                    </div>

                    <div className="form_group_inline">
                        <input
                            type="checkbox"
                            id="referred"
                            checked={referred}
                            onChange={(e) => setReferred(e.target.checked)}
                            className="modal_checkbox"
                        />
                        <label htmlFor="referred">Referred Candidate</label>
                    </div>
                </div>

                <div className="modal_footer">
                    <button className="modal_cancel_btn" onClick={onClose}>Cancel</button>
                    <button className="modal_submit_btn" onClick={handleSubmit}>Add Candidate</button>
                </div>
            </div>
        </div>
    );
};

export default AddCandidateModal;

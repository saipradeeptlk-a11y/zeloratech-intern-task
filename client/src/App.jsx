import { useState, useEffect } from 'react'
import './App.css'
import Sidebar from './Components/Sidebar';
import Topbar from './Components/Topbar';
import KanbanBoard from './Components/KanbanBroad';
import AddCandidateModal from './Components/AddCandidateModal';

function App(){
    const [candidates, setCandidates] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [showModal, setShowModal] = useState(false);


    const Stages = ["Applying Period", "Screening", "Interview", "Test"];

    useEffect(()=> {
        fetch('http://localhost:5000/api/candidates').then(response => response.json()).then(data => {
            console.log("Data from server: ", data);
            setCandidates(data);
        } )
        .catch(error => console.error("Error fetching data:", error));

    },[]);

    const handleDelete = (id) => {

      fetch(`http://localhost:5000/api/candidates/${id}`, {
        method : 'DELETE'
      }).then(response => {
        if(response.ok){
          setCandidates(candidates.filter(candidate => candidate.id !== id));
        }
      })
      .catch(error => console.error("Error deleting candidate:", error));

    };

    const handleMove = (id , newStage) => {
      fetch(`http://localhost:5000/api/candidates/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({newStage : newStage})
      }).then(response => response.json()).then(updatedCandidate => {
        setCandidates(candidates.map(candidate => candidate.id === id ? updatedCandidate : candidate));
      })
      .catch(error => console.error("Error updating candidate stage:", error));

      


      
    };

    const handleAddCandidate = (formData) => {
      fetch('http://localhost:5000/api/candidates', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      }).then(response => response.json()).then(newCandidate => {
        setCandidates([...candidates, newCandidate]);
      })
      .catch(error => console.error("Error adding candidate:", error));
    };


    const filteredCandidates = candidates.filter(c =>
      c.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return (<div className="layout_wrapper">
      <Sidebar />
      
      <div className="main_container">
        {/* Pass the total count only */}
        <Topbar totalCandidates={candidates.length} onSearchChange={setSearchQuery} 
        onAddClick={() => setShowModal(true)}/>
        
        <main className="content_area">
          <KanbanBoard 
            candidates={filteredCandidates} 
            stages={Stages} 
            handleDelete={handleDelete} 
            handleMove={handleMove} 
          />
        </main>
      </div>

      {showModal && (
        <AddCandidateModal 
          onClose={() => setShowModal(false)} 
          onAdd={handleAddCandidate} 
        />
      )}

    </div>);


}


export default App

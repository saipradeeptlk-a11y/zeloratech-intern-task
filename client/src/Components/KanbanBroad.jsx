
import CandidateCard from './CandidateCard';
import '../App.css';

const KanbanBroad = ({ candidates, handleDelete,handleMove,stages }) => {

    return(
    <div className="pipeline_broad">
      {stages.map((stage) => (
        <div key={stage} className="column">
          <div className="column_header_wrapper">
             <h3 className="column_heading">{stage}</h3>
             <span className="count">{candidates.filter(c => c.stage === stage).length}</span>
          </div>

          <div className="candidate_list">
            {candidates
              .filter((candidate) => candidate.stage === stage)
              .map((candidate) => (
                <CandidateCard 
                  key={candidate.id} 
                  candidate={candidate} 
                  handleDelete={handleDelete} 
                  handleMove={handleMove} 
                  Stages={stages} 
                />
              ))}
          </div>
        </div>
      ))}
    </div>

    );

};
export default KanbanBroad;
const express = require('express');
const cors= require('cors');

const app = express();
const PORT = 5000;

// This allows our React app (which will run on a different port) 
// to talk to this server without being blocked by security.

app.use(cors());
app.use(express.json());

// This is our "Dummy Data" - it mimics the names and stages from the image you sent.
let candidates = [
  { id: 1, name: "Marlon Reynolds", stage: "Applying Period", date: "29 Oct, 2023", rating: 3.5, referred: true },
  { id: 2, name: "Kristi Sipes", stage: "Screening", date: "20 Oct, 2023", rating: 3.5, referred: false },
  { id: 3, name: "Cameron Dickens", stage: "Interview", date: "03 Sep, 2023", rating: 4, referred: false },
  { id: 4, name: "Lola Kirlin", stage: "Test", date: "03 Sep, 2023", rating: 4.5, referred: true },
  { id: 5, name: "Regina Hane", stage: "Applying Period", date: "29 Oct, 2023", rating: 2, referred: false }
];

// This is an "Endpoint". When the browser visits /api/candidates, we send the list above.
app.get('/api/candidates', (req, res) => {
  res.json(candidates);
});

app.get('/',(req,res)=>{
    res.json({message:"Hello Sai !"})
});

app.patch('/api/candidates/:id',(req,res)=>{
    const {id} = req.params;
    const {newStage} = req.body;

    const candidate = candidates.find(applicant => applicant.id === parseInt(id));

    if(candidate){
      candidate.stage = newStage;
      const sucess_message="Candidate stage updated successfully to " +newStage
      console.log(sucess_message);
      res.json(candidate);
    }else{
      const error_message="Candidate with id " + id + " not found.";
      res.status(404).json({message:error_message});
    }
});

app.post('/api/candidates',(req,res)=>{
    const newApplicant ={
        id: candidates.length+1,
        name:req.body.name,
        stage:"Applying Period",
        date: new Date().toLocaleDateString('en-GB',{day:'2-digit',month:'short',year:'numeric'}),
        dob:req.body.dob,
        rating:req.body.rating,
        referred:req.body.referred

    };
    candidates.push(newApplicant);
    res.json(newApplicant);

});

app.delete('/api/candidates/:id',(req,res)=>{
  const {id} = req.params;

  const candidate = candidates.find(applicant => applicant.id === parseInt(id));

  if(candidate){
      const index = candidates.indexOf(candidate);
      candidates.splice(index,1);
      const sucess_message="Candidate with id " + id + " deleted successfully.";
      console.log(sucess_message);
      res.json({message:sucess_message});
    }else{
      const error_message="Candidate with id " + id + " not found.";
      res.status(404).json({message:error_message});
    }

  

});



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});






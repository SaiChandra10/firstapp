import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import cors from 'cors';

const port = 4000;
const app = express();
const db = new pg.Client({
    user:"postgres",
    password:"Saichandra",
    database:"keeper",
    host:"localhost",
    port:5432
});

db.connect();

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(cors());

var notes = [];

async function getNotes(){
    let notes = await db.query("select * from notes");
    return notes.rows;
}

app.get("/", async (req,res)=>{
    notes = await getNotes();
    res.send(notes);
    res.status(200);
})

app.post('/add', async (req,res) => {
    try{
        const {title, content} = req.body;
        const response = await db.query("insert into notes(title,content) values($1,$2)",[title,content]);
        console.log("Note added successfully");
        res.send({ success: true, message: "Note added" });
    }catch(error){
        console.error("Error while Adding data", error);
        res.status(404).send({ success: false, error: error.message });
    }
})

app.delete('/delete/:id', async (req,res) =>{
    try{
        const id = req.params.id
        const response = await db.query("delete from notes where id = $1",[id]);
        console.log("Note is deleted successfully");
        res.send({success:true,message:"Note deleted"});
    }catch(err){
        //console.error("Error while deleting note", err);
        res.status(404).send({ success: false, error: err.message });
    }
})

app.listen(port,()=>{
    console.log(`Backend server is started and listen on ${port}`);
})


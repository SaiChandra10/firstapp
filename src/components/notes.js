import axios from "axios";

export const fetchNotes = async () => {
  try {
    const response = await axios.get('http://localhost:4000/');
    console.log("Data fetched:", response.data);
    return response.data;
  } catch(err) {
    console.error("Error while fetching notes", err);
    return [];
  }
};

export const addNotes = async (note) => {
  console.log(note)
  try{
    const response = await axios.post('http://localhost:4000/add',{
      title : note.title,
      content : note.content
    });
    return response.data;
  }catch(err){
    console.log("Error while adding notes",err);
    return null;
  }
}

export const deleteNotes = async (id) =>{
  try{
    const URL = 'http://localhost:4000/delete/' + id;
    console.log(URL);
    const response = await axios.delete(URL);
    return response.data;
  }catch(error){
    console.log("Error while deleting note", error);
    return null;
  }
}
//console.log(dbnotes, "from notes.js");

// const note = [
//   {
//     key: 1,
//     title: "Delegation",
//     content:
//       "Q. How many programmers does it take to change a light bulb? A. None – It’s a hardware problem"
//   },
//   {
//     key: 2,
//     title: "Loops",
//     content:
//       "How to keep a programmer in the shower forever. Show him the shampoo bottle instructions: Lather. Rinse. Repeat."
//   },
//   {
//     key: 3,
//     title: "Arrays",
//     content:
//       "Q. Why did the programmer quit his job? A. Because he didn't get arrays."
//   },
//   {
//     key: 4,
//     title: "Hardware vs. Software",
//     content:
//       "What's the difference between hardware and software? You can hit your hardware with a hammer, but you can only curse at your software."
//   }
// ];
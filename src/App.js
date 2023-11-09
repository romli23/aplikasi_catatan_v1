
import './App.css';
import { Home } from './home/home';

function App() {
  const items = [
    {judul:"Tugas Bahasa Inggris", date:"07-11-2023", description:"Mengerjakan tugas simple pas pada hal 86"},
    {judul:"Tugas Matematika", date:"01-11-2023", description:"Mengerjakan bilangan array dan kemudian menyelesaikan perhitungan aritmatika"},
    {judul:"Tugas Bahasa Indonesia", date:"02-11-2023", description:"Mencari rangkuman berupa penjelasan apa yang disebut karya ilmiah "},
    {judul:"Tugas IPA", date:"03-11-2023", description:"Mengamati ada total berapa mobil berwarna merah yang lewat jalan depan rumah"},
    {judul:"Tugas IPS" ,date:"04-11-2023",description:"Membuat peta timbul yang dikerjakan secara berkelompok dan dikumpul minggu depan."}
  ]; 
  return (
    
    <div className="App">
      <h2>My Note APP</h2>
      <form className="form-input">
        <input
        type="text"
        placeholder="judul"
        name="judul"
        className="border-2 border-blue-200 p-2"
        />
        <input
        type="text"
        placeholder="Tanggal"
        name="tanggal"
        className="border-2 border-blue-200 p-2"
        />
        <textarea 
        name="note"
        id="note"
        cols="20"
        rows="10"
        placeholder="catatan"
        className="border-2 border-blue-200 p-2"
        >

        </textarea>
        <button type="submit" className='bg-blue-500 px-5 py-3 text-white mt-4'>Add Note</button>
      </form>
      
    
      <div className="home">
      <hr/>
      
      <Home items={items}/>

      
      </div>
      
    </div>
    
  );
}

export default App;

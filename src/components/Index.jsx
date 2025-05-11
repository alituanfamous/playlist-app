import { useState} from 'react'

function PlaylistApp() {

    const [songName, setSongName] = useState("");
    const [playlist, setPlaylist] = useState([]);
    const[message, setMessage] = useState(null);
    const [count, setCount] = useState(0); 

    const addSong = () => {
        if(!songName.trim())
            return;
        const newSong = {
            id: Date.now(),
            name: songName,
        };
        
        
        setPlaylist([...playlist, newSong]);
        setSongName("");
        setMessage("");

    };
    const removeSong = (id) => {
        setPlaylist(playlist.filter(song => song.id !== id));
        setMessage("Song removed");

        setTimeout(() =>{
            setMessage("");
        }, 1000);


    };

    return (
       <>
        
        <div className='flex flex-col sm:flex-col lg:flex-row p-5 bg-gray-100 max-w-full max-h-full sticky top-0 '>
            <h1 className='px-5 mx-5 font-extrabold text-3xl text-gray-500 '>PlayList <span>App</span></h1>
        

        </div>
    <section className='flex flex-col sm:flex-col lg:flex-row max-w-full p-3  max-h-3xl gap-5 '>
        <div className="add max-w-lg max-h-md p-5 bg-slate-50 border border-gray-100 rounded-xl shadow flex flex-col gap-3 ml-3">
            <h1 className='p-5 text-xl'>Add songs to playlist</h1>
            <input type="text" value={songName} onChange={(e) => setSongName(e.target.value)} 
            placeholder='Type song name to play...' className='p-3 border
             border-gray-300 rounded-xl max-w-full outline-none focus:ring-2 focus:ring-blue-900' autoFocus/>
             <button onClick={addSong} className='px-5 py-3 rounded-xl
              bg-blue-900 text-white shadtow font-semibold cursor-pointer'>Pick Playlist</button>


        </div>
        <div className="playlist max-w-5xl p-5 sm:p-5 lg:p-10 bg-gray-100 rounded-xl max-h-full
         flex flex-col gap-5 w-full">
       <h1 className='text-2xl'>My Playlist Songs</h1>

       {message && 
        <div className='max-w-xs absolute right-5 top-20 bg-green-100 border-b-3 border-r-3 border-green-500
         text-green-800   px-5 py-2 flex justify-between gap-10 rounded-lg'>
      <p>{message}</p>
      <p className='cursor-pointer text-lg'>&times;</p>  
        </div>
       }
       
      {playlist.length === 0 ? (
        <h1 className='text-center text-xl text-slate-500'>Playlist is empty</h1>
      ): (
        <ul className='gap-4'>
        {playlist.map((song) => (
            <li key={song.id} className=' flex text-lg justify-between gap-3 
            bg-gray-50 rounded-full border border-slate-200 cursor-pointer px-5
              my-2 text-gray-700 hover:bg-slate-200'>
                <span className='p-2 m-2'>{song.name}</span> 
                <div className='flex gap-3'>
                
                <button onClick={() => removeSong(song.id)} className='px-4 m-2 py-2 bg-red-200 
             cursor-pointer border-2 border-red-500 rounded-full justify-center
              text-red-900 font-bold'>&times;</button>
           
                </div>
            
             </li>
           
        ))}
       </ul>

      )
    }
      

        </div>



    </section>

    </>
            );
}
export default PlaylistApp;
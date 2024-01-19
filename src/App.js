import { useState } from 'react';
import './App.css';
import UserTable from './UserTable';
import Search from './Search';
function App() {
  const [flag, setFlag] = useState(true)
  const [text, setText] = useState('');
  
  const users =
    [{ "id": 1, "first_name": "Scarlet", "last_name": "Southerton", "email": "ssoutherton0@qq.com", "gender": "Bigender", "ip_address": "233.132.172.208" },
    { "id": 2, "first_name": "Flossi", "last_name": "Lambourne", "email": "flambourne1@prweb.com", "gender": "Female", "ip_address": "183.30.63.201" },
    { "id": 3, "first_name": "Dilan", "last_name": "Reitenbach", "email": "dreitenbach2@technorati.com", "gender": "Male", "ip_address": "131.33.162.48" },
    { "id": 4, "first_name": "Fitz", "last_name": "Mervyn", "email": "fmervyn3@typepad.com", "gender": "Male", "ip_address": "129.240.97.218" },
    { "id": 5, "first_name": "Ewell", "last_name": "Maingot", "email": "emaingot4@indiatimes.com", "gender": "Male", "ip_address": "192.74.125.30" },
    { "id": 6, "first_name": "Curt", "last_name": "Itzhaiek", "email": "citzhaiek5@cpanel.net", "gender": "Male", "ip_address": "52.69.188.197" },
    { "id": 7, "first_name": "Thain", "last_name": "Twinterman", "email": "ttwinterman6@friendfeed.com", "gender": "Male", "ip_address": "209.130.209.26" },
    { "id": 8, "first_name": "Fran", "last_name": "Lamming", "email": "flamming7@nsw.gov.au", "gender": "Female", "ip_address": "99.91.209.23" },
    { "id": 9, "first_name": "Carey", "last_name": "Vannoort", "email": "cvannoort8@sitemeter.com", "gender": "Female", "ip_address": "89.248.21.140" },
    { "id": 10, "first_name": "Adelice", "last_name": "Agass", "email": "aagass9@unc.edu", "gender": "Female", "ip_address": "177.214.237.25" }]

    function toggle(){
      setFlag(!flag)
    }
  return (
    <div className="App">
      {flag && <Search filterText={text} changeFilterText={setText}/>}
      {flag && <UserTable users={users} filterText={text} changeFilterText={setText}/>}
      <button onClick={toggle}>Click</button>
    </div>
  );
}

export default App;

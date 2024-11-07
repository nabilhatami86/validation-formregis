import {useCallback, useEffect, useState} from 'react'

const Identity = () => {
    const fecthUser =useCallback (() =>['rixki', 'wawan'],[])

    let [user, setUser] = useState([]);

    useEffect(() => {
        const data = fecthUser;
        setUser(data);
    }, [fecthUser])

  return (
    <div>
        <ul>
            {
                user.map(u => <li key={u}>{u}</li>)
            }
        </ul>
    </div>
  )
}

export default Identity
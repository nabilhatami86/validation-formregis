import { useState } from 'react'

 const useToggle = () => {
    let [value, setValue] = useState (false);

    return[value, setValue];
}

export default useToggle
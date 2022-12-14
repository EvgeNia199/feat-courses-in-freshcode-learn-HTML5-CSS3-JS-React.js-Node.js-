import React, { useEffect, useState } from 'react'


/*
function useMyHook(initState1, initState2, fun){
    const [state1, setState1] = useState(initState1);
    const [state2, setState2] = useState(initState2);
    // codehttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEcYRoFOP4Qo0BoDDIVeoK1p-rnFzphuenjGcPK1w1oNnvRkIQOw5vZ5EsPJ4DwAx-iGo&usqp=CAU
    return {state1, state2}
}
вызов в компоненте const {state1, state2} = useMyHook(props.x, props.y)
*/

function useLoadUsers(loadFun) {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect( () => {
    setIsFetching(true);
    try{
        const data = loadFun({});
        setData(data);
        console.log('data in hook=',data);
    } catch(error){
        setIsError(true);
    } finally{
        setIsFetching(false);
    }
  }, []);
   /*
  useEffect( () => {
    setIsFetching(true);
    loadFun({})
    .then( (data) => {console.log('hook data=',data); setData(data.results)})
    .catch( (error) => setIsError(true))
    .finally(() => { setIsFetching(false)})
  }, []);
  */
  return {data, isFetching, isError};
}

export default useLoadUsers;
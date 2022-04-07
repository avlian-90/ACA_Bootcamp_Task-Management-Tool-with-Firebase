import { useEffect } from 'react';
import { projectFireStore } from '../../fireBase';
import { useCleverContext, ACTION_TYPES } from '../../state';

function SingleBoard() {

    const { state, dispatch } = useCleverContext();

    useEffect(() => {
        let results = [];
        projectFireStore.collection('/tasks').get().then(snapshot => {
            snapshot.docs.forEach(doc => {
                return results.push({ id: doc.id, ...doc.data() });
            })
        });
        dispatch({ type: ACTION_TYPES.SET_TASKS, tasks: results });
    }, [])

    console.log(state);

    return (
      <div>
          Singleboard
          {state.tasks.map(task => <div key={task.id}>
              <span>{task.title}</span>
              <span>{task.priority}</span>
          </div>)}
      </div>
    )
}
  
export default SingleBoard;
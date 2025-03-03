import { useWorkoutsContext } from '../hooks/useWorkoutsContext'
import { useTranslation } from 'react-i18next';
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { zhCN, enUS } from 'date-fns/locale';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { useAuthContext } from '../hooks/useAuthContext';

const WorkoutDetails = ({ workout }) => {
  const { t, i18n } = useTranslation();

  const { dispatch } = useWorkoutsContext()
  const {user } =useAuthContext()

  const handleClick = async () => {
    if(!user){
      return
    }
    const response = await fetch('/api/workouts/' + workout._id, {
      method: 'DELETE',
      headers: { 
        'Authorization': `Bearer ${user.token}`
      }
    })
    const json = await response.json()

    if (response.ok) {
      dispatch({type: 'DELETE_WORKOUT', payload: json})
    }
  };

  const getLocale = () => {
    switch (i18n.language) {
      case 'zh':
        return zhCN;
      case 'en':
      default:
        return enUS;
    }
  };

  return (
    <div className="workout-details">
      <h4>{t('workoutDetails.title')}: {workout.title}</h4>
      <p><strong>{t('workoutDetails.load')}: </strong>{workout.load}</p>
      <p><strong>{t('workoutDetails.reps')}:</strong>{workout.reps}</p>
      <p>
        {formatDistanceToNow(new Date(workout.createdAt), { 
          addSuffix: true,
          locale: getLocale()
           })}</p>
      <span 
      className="material-symbols-outlined" 
      onClick={handleClick}
      title={t('workoutDetails.delete')}
      >
        <DeleteOutlinedIcon /> 
      </span>
    </div>
  )
}

export default WorkoutDetails
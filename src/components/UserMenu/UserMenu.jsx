import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { logout } from '../../redux/auth/operations';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function UserMenu() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector(selectUser);

  const logingOut = () => {
    dispatch(logout())
      .unwrap()
      .then(() => {
        toast.success('Logged Out successfully!');
      })
      .catch(() => {
        toast.error('Something went wrong, try again!');
      });
    navigate('/login');
  };

  return (
    <>
      <p className={css.text}>Welcome, {user.name}</p>
      <button className={css.button} onClick={logingOut}>
        LogOut
      </button>
    </>
  );
}

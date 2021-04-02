import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import Fade from '@material-ui/core/Fade';
import Slide from '@material-ui/core/Slide';
import Grow from '@material-ui/core/Grow';

function SlideTransition(props) {
  return <Slide {...props} direction="up" />;
}


export default function LoginForm() {
    const [state, setState] = React.useState({
        open: false,
        Transition: Fade,
      });
    
      const handleClick = (Transition) => () => {
        setState({
          open: true,
          Transition,
        });
      };
    
      const handleClose = () => {
        setState({
          ...state,
          open: false,
        });
      };


    const [name, setName] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [valid, setValid] = React.useState(false);
  
    const validationHandler = (event) => {
        const regExp = /^(\+7|[78])(\s?|-?)(\(\d{3}\)|\d{3})(-?|\s?)\d{3}(-?|\s?)\d{2}(-?|\s?)\d{2}$/ig;
        if(regExp.test(phone)){
            setValid(true)
        }
        else{
            setValid(false)
        };
    }

    

    const handleSubmit = (e) => {
      e.preventDefault();
    };
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='email'>Имя</label>
          <input type='text' id='name' value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label htmlFor='password'>Телефон</label>
          <input type='text' id='phone' value={phone} onBlur={validationHandler} onChange={(e) => setPhone(e.target.value)} />
        </div>
            <Button onClick={handleClick(SlideTransition)}>Отправить</Button>
            <Snackbar
                open={state.open}
                onClose={handleClose}
                TransitionComponent={state.Transition}
                message={valid ? 'Заявка успешно отправлена' : 'Введите, пожалуйста, телефон'}
                key={state.Transition.name}
            />
      </form>
    );
  }

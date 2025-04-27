import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const BasicForm = (props) => {
    const [firstName,setFirstName]=useState('');
    const [lastName,setLastName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [showPassword, setShowPassword] = useState(false);

    const submitData = () =>{
        
    }

      const passwordActivation = () => {
        setShowPassword(!showPassword);
      };


    return (
      <form onSubmit={submitData}>

        <h1 className="">Register</h1>

        <div className='control-group'>
          <div className='form-control'>
            <label htmlFor='name'>First Name</label>
            <input type='text' id='name' value={firstName} onChange={(e)=> setFirstName(e.target.value)} />
          </div>
          <div className='form-control'>
            <label htmlFor='name'>Last Name</label>
            <input type='text' id='name' value={lastName} onChange={(e)=> setLastName (e.target.value)} />
          </div>
        </div>
        <div className='form-control'>
          <label htmlFor='name'>E-Mail Address</label>
          <input type='text' id='name' value={email} onChange={(e)=> setEmail (e.target.value)} />
        </div>

        <div className='form-control'>
            <label htmlFor="name">Password</label>
            <input type= {showPassword ? 'text' : 'password'} id="name" value={password} onChange={(e)=> setPassword (e.target.value)}/>
            <span className="eye-icon" onClick={passwordActivation}>
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
           </span>

        </div>

        <div className='form-actions'>
          <button>Submit</button>
        </div>

        <div className="login">
            <p>Already have an account? Login</p>
        </div>
      </form>

    );
  };
  
  export default BasicForm;
  
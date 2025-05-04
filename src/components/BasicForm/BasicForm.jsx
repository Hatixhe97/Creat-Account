import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const BasicForm = (props) => {
    const [firstName,setFirstName]=useState('');
    const [lastName,setLastName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [showPassword, setShowPassword] = useState(false);

    const [isValid, setIsValid] =useState(false);
   
    const [firstNameHasError, setfirstNameHasError] =useState(false);
    const [firstNameTouched,setfirstNameTouched] =useState(false);

    const [LastNameHasError, setlastNameHasError] =useState(false);
    const [LastNameTouched,setlastNameTouched] =useState(false);

    const [EmailHasError, setEmailHasError] =useState(false);
    const [EmailTouched,setEmailTouched] =useState(false);

    const [PasswordHasError, setPasswordHasError] =useState(false);
    const [PasswordTouched,setPasswordTouched] =useState(false);

    

    useEffect (()=>{

      if (firstName.trim().length === 0 && firstNameTouched) { 
         setfirstNameHasError (true);
        } else {setfirstNameHasError(false);};

        if (lastName.trim().length === 0 && LastNameTouched) { 
            setlastNameHasError (true);
           } else {setlastNameHasError(false);};

        if ((email.trim().length === 0 || !email.includes('@')) && EmailTouched) { 
              setEmailHasError (true);
             } else {setEmailHasError(false); };
        
       if (password.trim().length === 0 && PasswordTouched) { 
              setPasswordHasError (true);
             } else {setPasswordHasError(false); };

       if(!firstNameHasError && !LastNameHasError && !EmailHasError && !PasswordHasError && firstNameTouched && LastNameTouched && EmailTouched && PasswordTouched )
        {
            setIsValid(true)
        } else {
            setIsValid(false)
        };

        setPasswordHasError(password.length > 0 && password.length < 8);

    }, [firstName,lastName,email,password, firstNameTouched, LastNameTouched, EmailTouched, PasswordTouched, firstNameHasError, LastNameHasError, EmailHasError, PasswordHasError])
   
    const resetStates=()=>{
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
    }
    
    const submitData = (event) =>{
        event.preventDefault();

        
        resetStates();
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
            <input type='text' id='name' value={firstName} onChange={(e)=> setFirstName(e.target.value)}
            onBlur={() => setfirstNameTouched (true)} />
            { firstNameHasError ? ( <p className="error-text">Please enter first name</p> ) : null}
          </div>
          <div className='form-control'>
            <label htmlFor='name'>Last Name</label>
            <input type='text' id='name' value={lastName} onChange={(e)=> setLastName (e.target.value)} onBlur={()=>setlastNameTouched(true)}/>
            { LastNameHasError? ( <p className="error-text">Please enter last name</p> ) : null}
          </div>
        </div>
        <div className='form-control'>
          <label htmlFor='name'>E-Mail Address</label>
          <input type='text' id='name' value={email} onChange={(e)=> setEmail (e.target.value)} onBlur={()=>setEmailTouched(true)} />
          { EmailHasError ? ( <p className="error-text">Please enter email</p> ) : null}
        </div>

        <div className='form-control'>
            <label htmlFor="name"> <span style={{ color: 'red' }}>*</span> Password</label>
            <input type= {showPassword ? 'text' : 'password'} id="name" value={password} onChange={(e)=> setPassword (e.target.value)} onBlur={()=>setPasswordTouched(true)}/>
            { PasswordHasError ? ( <p className="error-text">Please enter a password of at least 8 characters</p> ) : null}
            <span className="eye-icon " onClick={passwordActivation}>
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
           </span>
        </div>

        <div className='form-actions'>
          <button className={isValid ? '' : 'button-disabled'} disabled={!isValid} >Submit</button>
        </div>

        <div className="login">
            <a href="" target="_blank" className="nounderline">Already have an account? Login</a>
        </div>
      </form>

    );
  };
  
  export default BasicForm;
  
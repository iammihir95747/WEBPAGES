import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";


function Category() {
  const [role, setRole] = useState("");
  const [visible, setVisible] = useState(true);
  const navigate = useNavigate();

  const handleclick = (temprole) => { 
    setRole(temprole);
    setVisible(false);
   
  };

  const handlenavigatefun = () =>{
    navigate('/register');
  }

  return (
    <div>
      <div className="category">
        <div className="cat-head">
          <center><h2>SteadyDusk</h2></center>
          <div className="cat-sub-text">
            <h2>Sign Up for free</h2>
            <p>Choose which type of account you'd like to create:</p>
          </div>
        </div>

        <div className="box-cat">
          {["Teacher", "Student"].map((temprole) => (
            <button 
              className="admin-box" 
              key={temprole} 
              onClick={() => handleclick(temprole)}
            >
              <p className="PHeader">{temprole}</p>
              <p className="Psubtext">I'm looking for classes or appointments.</p>
            </button>
          ))}
        </div>
        {!visible || 
        <div className="not-active">
        <button>Signup as a ...</button>
        </div>
         }
  
               <div className="sub-btn-reg">
                {!role || <div className="sub-btn-reg">
                   <button onClick={handlenavigatefun}> SignUp as a {role}</button>
                </div> }
               </div>  
      </div>
   <center>

   <hr />
   </center>
      <div className="foot-subtext">
       <p>Already have an account?</p>
       <p>Try <a href=""> logging in here </a></p>
      </div>
    </div>
  );
}

export default Category;

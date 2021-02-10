import React from 'react'  
import Mohit from '../assets/img/Mohit.jpeg';
import Bhaskar from '../assets/img/bhaskar.jpg';

const Team = () =>{
    return(  
        <> 
        <div className = "container-fluid mb-5 shadow-lg p-3 mb-5 bg-white rounded"> 
          <div className = "row"> 
            <div className = "col-10 mx-auto"> 
              <div className = "row"> 
                 <div className="col-md-4 col-10 mx-auto">
                 <div className="container">
                   <img src= {Bhaskar} alt="Avatar" className="image" />
                     <div className="overlay">
                      <div className="text">Hello World</div>
                 </div>
             </div> 
             </div>  
             <div className="col-md-4 col-10 mx-auto">
                 <div className="container">
                   <img src= {Bhaskar} alt="Avatar" className="image" />
                     <div className="overlay">
                      <div className="text">Hello World</div>
                 </div>
             </div> 
             </div> 
             <div className="col-md-4 col-10 mx-auto">
                 <div className="container">
                   <img src= {Bhaskar} alt="Avatar" className="image" />
                     <div className="overlay">
                      <div className="text">Hello World</div>
                 </div>
             </div> 
             </div> 
             <div className="col-md-4 col-10 mx-auto">
                 <div className="container">
                   <img src= {Bhaskar} alt="Avatar" className="image" />
                     <div className="overlay">
                      <div className="text">Hello World</div>
                 </div>
             </div> 
             </div> 
              </div>

            </div>
        </div> 

        </div>
     </>   
    );
};

export default Team;
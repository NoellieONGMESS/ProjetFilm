import React from 'react';

function Affiche (Films){
   try {
       return(Films.show.name)
    
   } catch (error) {
       return(error);
   }
        
}
export default Affiche;
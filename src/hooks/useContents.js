import { useEffect, useState } from "react";
import { COURSES_CONTENT } from "../data/contents";



export function useContents(idCourse){

    const [loading, setLoading] = useState(true);
    const [contentModule, setcontentModule] = useState([]);

    useEffect(() =>{

                 const timer = setTimeout(() => {
                 setcontentModule(COURSES_CONTENT.filter(x => x.courseId === idCourse)); setLoading(false);    
                  //console.log("hook", contentModule);              
              }, 0);
      
              return () => clearTimeout(timer);        
    })

        return { contentModule, loading }

}
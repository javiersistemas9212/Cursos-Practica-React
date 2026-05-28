import { useEffect, useState } from "react";
import { COURSES_DATA } from "../data/coursesData";
import React from 'react';

export function useCourses () {
    
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [content, setContent] = useState([]);

    useEffect(() => {

        const timer = setTimeout(() => {
            setCourses(COURSES_DATA);
            setLoading(false);
            console.log(COURSES_DATA);
            
        }, 600);

        return () => clearTimeout(timer);        

    })

    return { courses, loading }


}
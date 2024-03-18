import { useState } from "react"
import { FcLike } from "react-icons/fc"
import { toast } from "react-toastify"

export default function Card({ course , likedCourses, setlikedCourses}) {
    //since we need record of likes of all cards so we will define the likehandler in cards.jsx

    function likeHandler(){
    //logic for likehandler
        if(likedCourses.includes(course.id)){
            //i.e course pehle se hi liked ho rakha hai, toh use unlike karne ka logic likhna hai.
            //aise sabhi course ko filter karlo jinki id liked nahi hai, ya jjinki id is liked course ke barabar nahi hai.

            setlikedCourses((prevlikcourse)=>prevlikcourse.filter((cid)=>(cid!==course.id)))
            toast.warning("Like removed")
            // prevlikcourse refers to all liked courses and now after filtering, the current course.id will be removed from prevlikedcourse
        }
        else{
            //Jab course pehle se liked nahi hai.
            //So insert the course into liked courses.
        }
    }
    return (

        <div className="w-[300px] bg-blue-950   rounded-md overflow-hidden">
            <div className=" relative">
                <img src={course.image.url} alt="" />
                <div className="w-[35px] h-[35px] bg-white absolute rounded-full right-2 bottom-3 flex items-center justify-center">
                    <button onClick={likeHandler}>
                        <FcLike fontSize="1.75rem"></FcLike>
                    </button>
                </div>
            </div>
            <div className="p-4 text-white ">
                <p className=" font-bold text-lg leading-6">{course.title}</p>
                <p className="mt-2 ">{course.description}</p>
            </div>
        </div>

    )
}
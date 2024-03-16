import { FcLike } from "react-icons/fc"

export default function Card(props) {
    let course=props.course;
    return (
        
            <div className="">
                <img src={course.image.url} alt="" />
                <div className="">
                    <button>
                        <FcLike fontSize="1.75rem"></FcLike>
                    </button>
                </div>
                <div className="">
                    <p>{course.title}</p>
                    <p>{course.description}</p>
                </div>
            </div>
    
    )
}
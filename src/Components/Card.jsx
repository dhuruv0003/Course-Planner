import { FcLike } from "react-icons/fc"

export default function Card({ course }) {
    return (<div>
        <div className="">
            <img src={course.image.url} alt="" />
            <div className="">
                <button>
                    <FcLike fontSize="1.75rem"></FcLike>
                </button>
            </div>
            <div className="">
                <p>course.title</p>
                <p>course.description</p>
            </div>
        </div>
    </div>)
}
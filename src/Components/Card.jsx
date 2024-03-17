import { FcLike } from "react-icons/fc"

export default function Card({ course }) {

    return (

        <div className="w-[300px] bg-blue-950   rounded-md overflow-hidden">
            <div className=" relative">
                <img src={course.image.url} alt="" />
                <div className="w-[35px] h-[35px] bg-white absolute rounded-full right-2 bottom-3 flex items-center justify-center">
                    <button>
                        <FcLike fontSize="1.75rem"></FcLike>
                    </button>
                </div>
            </div>
            <div className="p-4 text-white ">
                <p className=" font-bold text-lg leading-6">{course.title}</p>
                <p>{course.description}</p>
            </div>
        </div>

    )
}
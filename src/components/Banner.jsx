import IconRating from "../assets/rating.png"
import IconRatingHalf from "../assets/rating-half.png"
import IconTemp from "../assets/temp-1.jpeg"
import IconPlay from "../assets/play-button.png"

const Banner = () => {
    return (
        <div className="w-full h-[600px] bg-center bg-cover bg-no-repeat bg-banner relative">
            <div className="absolute w-full h-full top-0 left-0 bg-black opacity-30" />
            <div className="w-full h-full flex items-center justify-center space-x-[30px] p-4">
                <div className="flex flex-col space-y-5 p-3 z-20 items-baseline w-[50%]">

                    <p className="text-white bg-gradient-to-r
                    from-red-600 to-red-300 text-xl py-1 px-2 relative ">TV show</p>
                    <div className="flex flex-col space-y-4">
                        <h2 className="text-white font-bold text-[40px]">Nghe nói em thích tôi</h2>
                        <div className="flex items-center 
                         space-x-3">
                            <img src={IconRating} alt="rating"
                                className="w-8 h-8" />
                            <img src={IconRating} alt="rating"
                                className="w-8 h-8" />
                            <img src={IconRating} alt="rating"
                                className="w-8 h-8" />
                            <img src={IconRating} alt="rating"
                                className="w-8 h-8" />
                            <img src={IconRatingHalf} alt="rating"
                                className="w-8 h-8" />
                        </div>
                        <p className="text-white ">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Quo repudiandae suscipit commodi distinctio molestiae nihil odio eligendi perspiciatis iusto cum quia expedita,
                            ducimus officia facilis eaque, quas quibusdam, ut vero.</p>
                        <div className="flex items-center space-x-4">
                            <button className="text-white bg-black font-bold
                        p-3 text-sm">
                                Chi tiết
                            </button>
                            <button className="text-white bg-red-600 font-bold
                        p-3 text-sm">
                                Xem phim
                            </button>
                        </div>
                    </div>

                </div>
                <div className="w-[50%] flex items-center justify-center">

                    <div className="w-[300px] h-[400px] relative group">
                        <img src={IconTemp}
                            alt="temp" className="w-full h-full object-cover" />
                        <div className="w-full h-full absolute top-0 left-0 flex items-center
                    justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500
                    ease-in-out space-x-4 p-4">
                            <img src={IconPlay} alt="play" className="w-20 h-20 relative z-20" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Banner

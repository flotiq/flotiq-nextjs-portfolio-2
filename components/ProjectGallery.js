import React from 'react'
import Carousel from 'react-multi-carousel'
import { Image } from 'flotiq-components-react'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/solid'
import FlotiqImage from '../lib/flotiqImage'

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 2,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
}

const CarouselNavigation = ({ goToSlide, ...rest }) => {
    const {
        carouselState: { currentSlide },
    } = rest
    return (
        <div className="flex items-center justify-between font-sora underline font-light text-sm mt-5">
            <div
                className="cursor-pointer flex items-center bg-secondary px-7 py-3 rounded-full"
                onClick={() => goToSlide(currentSlide - 1)}
            >
                <ArrowLeftIcon className="h-6 w-6 text-white" />
            </div>
            <div
                className="cursor-pointer flex items-center bg-secondary px-7 py-3 rounded-full"
                onClick={() => goToSlide(currentSlide + 1)}
            >
                <ArrowRightIcon className="h-6 w-6 text-white" />
            </div>
        </div>
    )
}

const ProjectGallery = ({ gallery }) => (
    <div className="grid grid-cols-1">
        {gallery && (
            <Carousel
                draggable={false}
                infinite
                autoPlay
                autoPlaySpeed={3000}
                responsive={responsive}
                arrows={false}
                renderButtonGroupOutside
                customButtonGroup={<CarouselNavigation />}
            >
                {gallery.map((image) => (
                    <div className="px-2" key={image.id}>
                        <Image
                            url={FlotiqImage.getSrc(image, 0, 0)}
                            alt="Gallery Images"
                            additionalClasses={['rounded-3xl']}
                            key={image.id}
                        />
                    </div>
                ))}
            </Carousel>
        )}
    </div>
)

export default ProjectGallery

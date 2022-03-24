import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

// Event Images
import galleryImg1 from '../../assets/img/gallery/1.jpg';
import galleryImg2 from '../../assets/img/gallery/2.jpg';
import galleryImg3 from '../../assets/img/gallery/3.jpg';
import galleryImg4 from '../../assets/img/gallery/4.jpg';
import galleryImg5 from '../../assets/img/gallery/5.jpg';
import galleryImg6 from '../../assets/img/gallery/6.jpg';
import galleryImg7 from '../../assets/img/gallery/7.jpg';
import galleryImg8 from '../../assets/img/gallery/8.jpg';
import galleryImg9 from '../../assets/img/gallery/9.jpg';
import galleryImg10 from '../../assets/img/gallery/10.jpg';
import galleryImg11 from '../../assets/img/gallery/11.jpg';
import galleryImg12 from '../../assets/img/gallery/12.jpg';

const photos = [
    {
        src: galleryImg1,
        width: 1,
        height: 1
    },
    {
        src: galleryImg2,
        width: 1,
        height: 1
    },
    {
        src: galleryImg3,
        width: 1,
        height: 1
    },
    {
        src: galleryImg4,
        width: 1,
        height: 1
    },
    {
        src: galleryImg5,
        width: 1,
        height: 1
    },
    {
        src: galleryImg6,
        width: 1,
        height: 1
    },
    {
        src: galleryImg7,
        width: 1,
        height: 1
    },
    {
        src: galleryImg8,
        width: 1,
        height: 1
    },
    {
        src: galleryImg9,
        width: 1,
        height: 1
    },
    {
        src: galleryImg10,
        width: 1,
        height: 1
    },
    {
        src: galleryImg11,
        width: 1,
        height: 1
    },
    {
        src: galleryImg12,
        width: 1,
        height: 1
    }
];
  

const GalleryPart = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    return (
        <>
            <div className="rs-gallery pt-100 pb-70 md-pt-80 md-pb-50">
                <div className="container">
                    <Gallery 
                        direction={"column"} 
                        photos={photos} 
                        onClick={openLightbox}
                        
                    />
                    <ModalGateway> 
                        {viewerIsOpen ? (
                            <Modal onClose={closeLightbox}>
                                <Carousel
                                    currentIndex={currentImage}
                                    views={photos.map(x => ({
                                        ...x,
                                        srcset: x.srcSet,
                                        caption: x.title
                                    }))}
                                />
                            </Modal>
                        ) : null}
                    </ModalGateway>
                </div>
            </div>
        </>
    );
}


export default GalleryPart
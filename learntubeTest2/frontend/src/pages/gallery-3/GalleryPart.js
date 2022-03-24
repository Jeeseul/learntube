import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images"

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
        title: 'Gallery One',
        width: 1,
        height: 1
    },
    {
        src: galleryImg2,
        title: 'Gallery Two',
        width: 1,
        height: 1
    },
    {
        src: galleryImg3,
        title: 'Gallery Three',
        width: 1,
        height: 1
    },
    {
        src: galleryImg4,
        title: 'Gallery Four',
        width: 1,
        height: 1
    },
    {
        src: galleryImg5,
        title: 'Gallery Five',
        width: 1,
        height: 1
    },
    {
        src: galleryImg6,
        title: 'Gallery Six',
        width: 1,
        height: 1
    },
    {
        src: galleryImg7,
        title: 'Gallery Seven',
        width: 1,
        height: 1
    },
    {
        src: galleryImg8,
        title: 'Gallery Eight',
        width: 1,
        height: 1
    },
    {
        src: galleryImg9,
        title: 'Gallery Nine',
        width: 1,
        height: 1
    },
    {
        src: galleryImg10,
        title: 'Gallery Ten',
        width: 1,
        height: 1
    },
    {
        src: galleryImg11,
        title: 'Gallery Eleven',
        width: 1,
        height: 1
    },
    {
        src: galleryImg12,
        title: 'Gallery Twelve',
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

    {/*const imageRenderer = ({ key, index, photo }) => (
        <ImagePart
            key={key}
            index={index}
            padding={"0"}
            margin={"15px"}
            photo={photo}
        />
    );*/}

    return (
        <>
            <div className="rs-gallery no-gap pt-100 pb-100 md-pt-80 md-pb-80">
                <div className="container">
                    <Gallery 
                        direction={"column"} 
                        photos={photos} 
                        onClick={openLightbox}
                        // renderImage={imageRenderer}
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
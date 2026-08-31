import galleryBackground from "../../../public/images/gallery/gallery-bg.webp";

export default function Gallery() {
  return (
    <div id="gallery-wrapper">
      <div id="gallery-intro">
        <img src={galleryBackground.src} alt="" />
      </div>
    </div>
  );
}

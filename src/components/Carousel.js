import ImageSlider from "./ImageSlider";

const Carousel = () => {
  const slides = [
    {
      url: "https://fastly.picsum.photos/id/24/4855/1803.jpg?hmac=ICVhP1pUXDLXaTkgwDJinSUS59UWalMxf4SOIWb9Ui4",
      title: "abstract1",
    },
    {
      url: "https://fastly.picsum.photos/id/22/4434/3729.jpg?hmac=fjZdkSMZJNFgsoDh8Qo5zdA_nSGUAWvKLyyqmEt2xs0",
      title: "abstract2",
    },
    {
      url: "https://fastly.picsum.photos/id/14/2500/1667.jpg?hmac=ssQyTcZRRumHXVbQAVlXTx-MGBxm6NHWD3SryQ48G-o",
      title: "abstract3",
    },
    {
      url: "https://fastly.picsum.photos/id/27/3264/1836.jpg?hmac=p3BVIgKKQpHhfGRRCbsi2MCAzw8mWBCayBsKxxtWO8g",
      title: "abstract4",
    },
    {
      url: "https://fastly.picsum.photos/id/41/1280/805.jpg?hmac=W9CWeYdlZisqEfhjuODl83T3lCXAqjUZrOe9iMFPYmI",
      title: "abstract5",
    },
    {
      url: "https://fastly.picsum.photos/id/43/1280/831.jpg?hmac=glK-rQ0ppFClW-lvjk9FqEWKog07XkOxJf6Xg_cU9LI",
      title: "abstract6",
    },
    {
      url: "https://fastly.picsum.photos/id/45/4592/2576.jpg?hmac=Vc7_kMYufvy96FxocZ1Zx6DR1PNsNQXF4XUw1mZ2dlc",
      title: "abstract7",
    },
  ];

  return (
    <div className="Carousel">
      <h1 id="content">Featured Products</h1>
      <p id="contentt">Explore and discover a variety of products</p>
      <div className="slider">
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};

export default Carousel;

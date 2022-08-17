import React from "react";
import LiveChannelItem from "./LiveChannelItem";
import live1 from "../public/assets/live/live1.jpeg";
import live2 from "../public/assets/live/live2.jpeg";
import live3 from "../public/assets/live/live3.jpeg";
import live4 from "../public/assets/live/live4.jpeg";
import live5 from "../public/assets/live/live5.jpeg";
import live6 from "../public/assets/live/live6.jpeg";
import live7 from "../public/assets/live/live7.jpeg";
import live8 from "../public/assets/live/live8.jpeg";
import live9 from "../public/assets/live/live9.jpeg";
import live10 from "../public/assets/live/live10.jpeg";

const LiveChannels = () => {
  return (
    <div id="live" className="p-2 md:p-8 ">
      <h2 className="text-xl font-bold px-2">
        <span className="text-[#9147ff]">Live Channels</span> we think you will
        like
      </h2>
      {/* Container */}
      <div className="grid sm:grid-cols2 md:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-4 py-2">
        <LiveChannelItem
          img={live1}
          profile_Img="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg"
          title="TURN UP LET DESTROY"
          user="NATT"
          game="Warzone"
        />
        <LiveChannelItem
          img={live2}
          profile_Img="https://static-cdn.jtvnw.net/jtv_user_pictures/9193acb2-d282-4474-acf3-a286407d3ebf-profile_image-50x50.png"
          title="TURN UP LET DESTROY"
          user="NATT"
          game="Warzone"
        />
        <LiveChannelItem
          img={live3}
          profile_Img="https://static-cdn.jtvnw.net/jtv_user_pictures/6779c120-259e-4d7e-907e-1ca19b66d526-profile_image-50x50.png"
          title="TURN UP LET DESTROY"
          user="NATT"
          game="Warzone"
        />
        <LiveChannelItem
          img={live4}
          profile_Img="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg"
          title="TURN UP LET DESTROY"
          user="NATT"
          game="Warzone"
        />
        <LiveChannelItem
          img={live5}
          profile_Img="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg"
          title="TURN UP LET DESTROY"
          user="NATT"
          game="Warzone"
        />
        <LiveChannelItem
          img={live6}
          profile_Img="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg"
          title="TURN UP LET DESTROY"
          user="NATT"
          game="Warzone"
        />
        <LiveChannelItem
          img={live7}
          profile_Img="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg"
          title="TURN UP LET DESTROY"
          user="NATT"
          game="Warzone"
        />
        <LiveChannelItem
          img={live8}
          profile_Img="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg"
          title="TURN UP LET DESTROY"
          user="NATT"
          game="Warzone"
        />
        <LiveChannelItem
          img={live9}
          profile_Img="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg"
          title="TURN UP LET DESTROY"
          user="NATT"
          game="Warzone"
        />
        <LiveChannelItem
          img={live10}
          profile_Img="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg"
          title="TURN UP LET DESTROY"
          user="NATT"
          game="Warzone"
        />
      </div>
    </div>
  );
};

export default LiveChannels;

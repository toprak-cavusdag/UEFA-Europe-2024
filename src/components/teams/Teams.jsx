import React, { useEffect, useState } from "react";
import axios from "axios";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Teams = () => {
  const [team, setTeam] = useState([]);
  const options = {
    method: "GET",
    url: "https://euro-20242.p.rapidapi.com/teams",
    headers: {
      "x-rapidapi-key": "ba1b47ff04msh118c73c0d667a7ap189587jsnb30f25d97d69",
      "x-rapidapi-host": "euro-20242.p.rapidapi.com",
    },
  };

  const teamValueHandler = async () => {
    try {
      const response = await axios.request(options);
      setTeam(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    teamValueHandler();
  }, []);

  return (
    <Swiper
      slidesPerView={8}
      spaceBetween={30}
      loop={true}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Navigation, Autoplay]}
      className="mySwiper container mx-auto"
    >
      {team?.map((team) => (
        <SwiperSlide>
          <div className="justify-center cursor-pointer my-10 items-center flex flex-col gap2">
            <div className="w-36 h-36   flex items-center justify-center">
              <img
                src={team.imageUrl}
                className="w-full h-full  object-contain"
                alt={team.name}
              />
            </div>
            <p className="font-semibold capitalize">{team.name}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Teams;

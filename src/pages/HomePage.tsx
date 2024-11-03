import React, { useEffect } from "react";
import { Navbar } from "../components/navbar";
import axios from "axios";

export const HomePage: React.FC = () => {
  // const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/157336?api_key=793dcc8ee2283a3e0f908b6d2820498f"
      );
      console.log(response.data);
    };

    fetchData(); // Call the fetch function when the component mounts
  }, []);

  return (
    <div className="flex justify-center items-center flex-col w-dvw">
      <div className="carousel carousel-center rounded-box gap-2">
        <div className="carousel-item">
          <img
            className="rounded-sm"
            src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
            alt="Pizza"
          />
        </div>
        <div className="carousel-item">
          <img
            className="rounded-sm"
            src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
            alt="Pizza"
          />
        </div>
        <div className="carousel-item">
          <img
            className="rounded-sm"
            src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
            alt="Pizza"
          />
        </div>
        <div className="carousel-item">
          <img
            className="rounded-sm"
            src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
            alt="Pizza"
          />
        </div>
        <div className="carousel-item">
          <img
            className="rounded-sm"
            src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
            alt="Pizza"
          />
        </div>
        <div className="carousel-item">
          <img
            className="rounded-sm"
            src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
            alt="Pizza"
          />
        </div>
        <div className="carousel-item">
          <img
            className="rounded-sm"
            src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
            alt="Pizza"
          />
        </div>
      </div>
      <Navbar />
      <p className="hover:scale-125">Large movie cover with image bg</p>
      <div className="flex justify-center items-center flex-col w-full">
        <p className="hover:scale-125">Your next watch carousel</p>
        <p className="hover:scale-125">continue watching carousel</p>
        <p className="hover:scale-125">Top 10 TV Shows in Brazil Today</p>
        <p className="hover:scale-125">carousel</p>
        <p className="hover:scale-125">carousel</p>
        <p className="hover:scale-125">carousel</p>
        <p className="hover:scale-125">carousel</p>
        <p className="hover:scale-125">Top 10 Movies in Brazil Today</p>
        <p className="hover:scale-125">carousel</p>
        <p className="hover:scale-125">carousel</p>
      </div>
    </div>
  );
};

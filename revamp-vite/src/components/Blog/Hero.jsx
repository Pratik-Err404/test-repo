import { useEffect, useState } from 'react';
import Card from '../../components/Blog/Card';
import CardHorizontal from "../../components/Blog/CardHorizontal";

const Hero = () => {
  const [data, setData1] = useState(null);
  const [data2, setData2] = useState(null);
  const [data3, setData3] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('http://localhost:8000/api/blogs/669bdbe955cf46e1152b3343', {
        method: 'GET'
      });
      const res2 = await fetch('http://localhost:8000/api/blogs/669bdc1455cf46e1152b3345', {
        method: 'GET'
      });
      const res3 = await fetch('http://localhost:8000/api/blogs/669bf9640993facbd8635b9d', {
        method: 'GET'
      });
      const data = await res.json();
      const data2 = await res2.json();
      const data3 = await res3.json();
      setData1(data);
      setData2(data2);
      setData3(data3);
    };

    fetchData();
  }, []);
  const truncate = (text, maxLen) => {
    if (!text) return ''; // Handle empty or null text
    if (text.length <= maxLen) return text;
    // Truncate and add ellipsis
    return text.slice(0, maxLen).trim() + '...';
  };
  return (
    <div className=''>
      <div className="text-3xl flex items-center justify-center gap-x-4 text-center pt-10 lg:pt-0">
        <p className=" text-5xl uppercase text-red-700 font-bold">Froker</p>
        <p className="uppercase text-white text-5xl font-bold">Blog</p>
      </div>
      <div>
        <div className="text-center flex flex-col items-center justify-center text-2xl pt-5 lg:pt-0 lg:text-5xl mt-3 gap-y-3 font-bold text-white">
          <p>Articles covering the most recent</p>
          <p>updates and advancements</p>
        </div>
      </div>

      {/* Cards */}
      <div className="md:flex justify-center  mt-10 px-28 hidden ">
        <div className="w-1/2  mx-10 h-full">
          {data && (
            <Card
              imageSrc={data.blog.image}
              title={truncate(data.blog.title, 50)}
              description={truncate(data.blog.body,150)}
              author={data.blog.author.name}
              date={data.blog.date}
            />
          )}
        </div>
        <div className="flex flex-col w-2/3 gap-14 ">
          {data && (
            <>
              <CardHorizontal
                imageSrc={data2.blog.image}
                title={truncate(data2.blog.title,50)}
                description={truncate(data2.blog.body,150)}
                author={data2.blog.author.name}
                date={data2.blog.date}
              />
              <CardHorizontal
                imageSrc={data3.blog.image}
                title={truncate(data3.blog.title,50)}
                description={truncate(data3.blog.body,150)}
                author={data3.blog.author.name}
                date={data3.blog.date}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
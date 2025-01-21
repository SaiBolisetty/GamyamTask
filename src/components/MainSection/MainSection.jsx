import React from 'react'
import LandsSections from './LandsSection/LandsSections'
import Filter from './Filter/Filter'
import { getlands } from '../../utils/getlands'
import { useEffect,useState } from 'react'
const MainSection = () => {
    const [currentPage, setCurrentPage] = useState(1); 
    const [landdata, setLandData] = useState([]); 
    const [isloading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
          setIsLoading(true);
          const data = await getlands(10, currentPage); 
          setLandData((prev) => [...prev, ...data.results]);
          setIsLoading(false);
        };
        fetchData();
      }, [currentPage]);
    

    //   const handleScroll = () => {
    //     console.log(`scrollY: ${window.scrollY}`);
    //     console.log(`windowinner: ${window.innerHeight}`);
    //      console.log(`scrollheight: ${window.innerHeight}`);
    //     if (
    //       window.scrollY + window.innerHeight >=
    //       document.documentElement.scrollHeight
    //     ) {
    //       setCurrentPage((prev) => prev + 1);
    //     }
    //   };
    
    const handleScroll = () => {
        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
    
        console.log(`scrollY: ${scrollTop}`);
        console.log(`window.innerHeight: ${windowHeight}`);
        console.log(`documentElement.scrollHeight: ${documentHeight}`);
    
        if (scrollTop + windowHeight >= documentHeight - 50) {
          // Adding a small buffer (-50) to ensure better UX for triggering the next page
          setCurrentPage((prev) => prev + 1);
        }
      };
      useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);

      useEffect(()=>{
        console.log(currentPage)
      },[currentPage])
  return (
    <div>
        <Filter></Filter>
        <LandsSections landData={landdata} isLoading={isloading}></LandsSections>
    </div>
  )
}

export default MainSection
import { useQuery } from 'react-query';


const fetchSections = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/sections`
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (err) {
      return err.response.data;
    }
};

export const useGetSections = () => {
    return useQuery({
      queryFn: async () => {
        try {
          
          const data = await fetchSections();
          console.log(data)
          return data;
        } catch (err) {
          console.log({ err });
          throw new Error(err.response.data);
        }
      },
      queryKey:["sections"]      
    });
};
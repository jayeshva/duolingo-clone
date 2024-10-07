import { useGetSections } from "../hooks/useGetSections";
import { Learn } from "../dashboard/Learn/Learn";


export const QueryLearn = () => {
    const { data, isFetching, error } = useGetSections();
    console.log(data, isFetching, error)

    return (
      <Learn data={data} isLoading={isFetching} error={error?.message} />
    );
  };
  
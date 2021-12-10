import React, { useState, useContext } from "react";
import AmazeLoader from "@components/reusable/Loader";
import PostCard from "@components/general/PostCard";
import { AmazeContext } from "utils";
import { useSelector } from "react-redux";
import { RootState } from "state/reducers";

interface IShowPosts {
  data: any;
  loading: any;
  refetch: any;
}

const ShowPosts: React.FC<IShowPosts> = ({
  data,
  refetch,
  loading,
}): JSX.Element => {
  const { state } = useContext(AmazeContext);
  const [PostData, setPostData] = useState<any>();

  React.useEffect(() => {
    setPostData(data);
    console.log("-->> ", data);
  }, [data]);

  return (
    <div>
      <AmazeLoader data={loading} />
      {PostData?.getAllPost?.map((item: any) => (
        <div key={item.id}>
          <PostCard postData={item} location={item.location} />
        </div>
      ))}
    </div>
  );
};

export default ShowPosts;

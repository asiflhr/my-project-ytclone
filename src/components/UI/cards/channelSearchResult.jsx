import React from "react";

const channelSearchResult = ({ data }) => {
  return (
    data && (
      <div className="flex gap-3">
        <div className="flex w-[20rem] h-[12rem] z-40 bg-white">
          <img
            alt=""
            src={data?.channel?.avatar[0].url}
            width={"100%"}
            height={"100%"}
            className="rounded-xl object-center object-contain"
          />
        </div>

        <div className="flex flex-col items-start gap-2">
          <span>
            <a
              href={`https://www.youtube.com/${data?.channel?.canonicalBaseUrl}`}
              className="font-semibold"
            >
              {data?.channel?.title}
            </a>
            {data?.channel?.badges ? (
              <span className="rounded-full opacity-70">☑️</span>
            ) : null}
          </span>
          <div className="flex justify-between w-full">
            <div className="w-10/12">
              <div className="flex gap-1">
                <span className="text-gray-600">{data?.channel?.username}</span>
                .
                <span className="text-gray-600">{data?.channel?.stats?.subscribersText}</span>
              </div>

              <div
                className="text-sm text-left"
              >
                {data?.channel?.descriptionSnippet}
              </div>
            </div>

            <button className="border border-[#00ccff] hover:text-white active:scale-50 shadow shadow-[#00ccff] hover:shadow-[#00ccff] hover:shadow-lg transition-all duration-700 h-fit w-2/12 p-2 font-semibold rounded-full hover:bg-[#00ccff]">Subscribe</button>
          </div>
        </div>
      </div>
    )
  );
};

export default channelSearchResult;

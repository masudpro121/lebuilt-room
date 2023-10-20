import React from "react";
import RenderImage from "../RenderImage/RenderImage";
import CollectionHistoryModal from "../CollectionHistoryModal/CollectionHistoryModal";

const CollectionHistory = ({ data }) => {
  return (
    <div>
      <div className="bg-[#F2F1EF] py-3 px-3 rounded-md font-[Gilroy-SemiBold] text-xl mt-4 mb-2 w-[85%] m-auto">Explore what others are creating</div>
      <div className="flex flex-wrap gap-3 justify-center py-3">
      {data.map((image, i) => {
        return (
          <CollectionHistoryModal key={image + i} img={image}>
            <div className="cursor-pointer">
              <RenderImage src={image} />
            </div>
          </CollectionHistoryModal>
        );
      })}
    </div>
    </div>
  );
};

export default CollectionHistory;

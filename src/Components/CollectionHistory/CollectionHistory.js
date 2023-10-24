import React from "react";
import RenderImage from "../RenderImage/RenderImage";
import CollectionHistoryModal from "../CollectionHistoryModal/CollectionHistoryModal";

const CollectionHistory = ({ data }) => {
  return (
      <div className="flex flex-wrap gap-3 justify-center py-3">
      {data.map((image, i) => {
        return (
          <div key={image + i} className="w-[45%] md:w-[20%]  flex flex-wrap">
            <CollectionHistoryModal img={image}>
            <div className="cursor-pointer ">
            <img className="rounded-md object-cover" src={image}  />
            </div>
          </CollectionHistoryModal>
          </div>
        );
      })}
    </div>
  );
};

export default CollectionHistory;

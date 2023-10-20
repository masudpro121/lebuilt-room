import React from "react";
import RenderImage from "../RenderImage/RenderImage";
import CollectionHistoryModal from "../CollectionHistoryModal/CollectionHistoryModal";

const CollectionHistory = ({ data }) => {
  return (
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
  );
};

export default CollectionHistory;

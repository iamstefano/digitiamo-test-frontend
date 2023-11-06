import React, { useRef } from "react";
import ModalSheet from "react-modal-sheet";

import styles from "./BottomSheetModal.module.scss";
import TimingAnalysisChart from "../timingAnalysisChart/TimingAnalysisChart";

const BottomSheetModal = () => {
  const sheetRef = useRef();

  return (
    <>
      <ModalSheet
        isOpen={true}
        onClose={() => {}}
        snapPoints={[900, 550, 250, 50]}
        initialSnap={3}
        ref={sheetRef}
        disableSnap={true}
        tweenConfig={{ ease: "easeOut", duration: 0 }}
      >
        <ModalSheet.Container>
          <ModalSheet.Header />
          <ModalSheet.Content>
            <div className={styles.bottomSheetModal}>
              <p>Draggable Bottom Sheet</p>
              <TimingAnalysisChart />
            </div>
          </ModalSheet.Content>
        </ModalSheet.Container>
      </ModalSheet>
    </>
  );
};

export default BottomSheetModal;

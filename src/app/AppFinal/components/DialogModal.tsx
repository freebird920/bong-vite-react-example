import {
  ButtonHTMLAttributes,
  cloneElement,
  memo,
  ReactElement,
  ReactNode,
  useRef,
} from "react";

interface DialogModalProps {
  openButton?: ReactElement<ButtonHTMLAttributes<HTMLButtonElement>>; // 버튼을 전달받음
  closeButton?: ReactElement<ButtonHTMLAttributes<HTMLButtonElement>>;
  children?: ReactNode;
}

const DialogModal = memo(
  ({ openButton, closeButton, children }: DialogModalProps) => {
    const dialogRef = useRef<HTMLDialogElement>(null);

    const openModal = () => {
      if (dialogRef.current) {
        dialogRef.current.showModal(); // 모달 열기
      }
    };

    const closeModal = () => {
      if (dialogRef.current) {
        dialogRef.current.close(); // 모달 닫기
      }
    };

    // 받은 openButton을 렌더링하고, 그 안에서 모달을 여는 함수를 추가
    return (
      <div>
        {!openButton ? (
          <button type="button" onClick={openModal}>
            열어
          </button>
        ) : (
          cloneElement(openButton, {
            onClick: openModal,
            type: "button",
          })
        )}
        <dialog ref={dialogRef}>
          {children}
          {!closeButton ? (
            <button type="button" onClick={closeModal}>
              닫아
            </button>
          ) : (
            cloneElement(closeButton, {
              onClick: closeModal,
              type: "button",
            })
          )}
        </dialog>
      </div>
    );
  }
);

DialogModal.displayName = "DialogModal";
export default DialogModal;

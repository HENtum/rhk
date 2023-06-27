"use client";

import { FC, useEffect, useState } from "react";
import style from "./message.module.scss";
import { CgClose } from "react-icons/cg";
import { useMessage } from "@/hooks/useMessage";
import { useActions } from "@/hooks/useActions";
import cn from "classnames";

interface Props {
  children: React.ReactNode;
}

const Message: FC<Props> = ({ children }) => {
  const [vindow, setVindow] = useState(false);
  const actions = useActions();
  const message = useMessage();
  useEffect(() => {
    setVindow(true);
    setTimeout(() => {
      setVindow(false);
      actions.updateMessage("");
    }, 3000);
  }, [message.message]);

  return (
    <>
      {children}
      {message.message !== "" && vindow && (
        <div className={style.messageLabel}>
          <p>{message.message}</p>
          <CgClose onClick={() => setVindow(false)} className={style.icon} />
        </div>
      )}
    </>
  );
};

export default Message;

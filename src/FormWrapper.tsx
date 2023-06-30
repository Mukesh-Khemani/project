import { ReactNode } from "react";

type FormWrapperProps = {
  title: string;
  children: ReactNode;
};

export function FormWrapper({ title, children }: FormWrapperProps) {
  return (
    <>
      <h2 className="text-4xl text-center m-5 text-white">{title}</h2>
      <div className="flex flex-col ">{children}</div>
    </>
  );
}

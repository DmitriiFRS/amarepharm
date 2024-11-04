interface Props {
   children: React.ReactNode;
   className?: string;
}

const Container: React.FC<Props> = ({ children, className = '' }) => {
   return <div className={`max-w-[1220px] m-[0_auto] p-[0_10px] ${className}`}>{children}</div>;
};

export default Container;

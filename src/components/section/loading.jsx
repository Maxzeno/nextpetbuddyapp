import { ThreeDots } from "react-loader-spinner";

export default function Loading({ extraClass }) {
  return (
    <div className={extraClass}>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#b45309"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
}

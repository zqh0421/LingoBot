import { cn } from "@/lib/utils";

function Card(props: { title: string; desc: string; className: string }) {
  return (
    <div
      className={cn(
        props.className,
        "bg-white rounded-[22px] shadow-general gap-[11px] min-w-[300px] w-[25vw]",
        "flex flex-col p-[22px] justify-center",
      )}
    >
      <h2 className="text-lg font-bold leading-[100%] [text-transform:capitalize]">
        {props.title}
      </h2>
      <hr />
      <p>{props.desc}</p>
    </div>
  );
}

export default Card;

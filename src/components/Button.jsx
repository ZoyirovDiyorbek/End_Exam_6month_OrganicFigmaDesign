export const Button = ({
    text,
    textSize = "text-[20px]",
    bgcolor = "bg-main",
    textcolor = "text-white",
    classname = ""
}) => {
    return (
        <button
            className={`flex items-center justify-center px-9 py-7 rounded-2xl font-semibold cursor-pointer ${textSize} ${bgcolor} ${textcolor} ${classname}`}
        >
            {text}
        </button>
    );
};
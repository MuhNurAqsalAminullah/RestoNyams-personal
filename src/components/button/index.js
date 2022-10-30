export const ButtonOne = (props) => {
    return (
        <div>
            <button className="sm:text-sm sm:py-1 sm:w-1/2 sm:mt-3 md:text-base lg:text-lg bg-[#24AAD6] text-white">{props.title}</button>
        </div>
    );
};
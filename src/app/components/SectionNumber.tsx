export function SectionNumber({ num }: { num: string }) {
    return (
        <span className="text-[6rem] md:text-[8rem] lg:text-[12rem] font-black font-montserrat leading-none select-none text-num">
            {num}
        </span>
    )
}

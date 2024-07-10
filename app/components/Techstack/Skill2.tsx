

interface SkillProps{
    obj : any;
}
export const Skill = ({ obj }:SkillProps) => {

    return(
        <div className="Skill p-4
        flex flex-col justify-center items-center
        text-sm text-black
        rounded-full aspect-square">
            {obj.icon}
            {/* {obj.title} */}
            {/* {obj.description} */}
        </div>
    )
}
import React from 'react';
import { FaRegFileAlt } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { MdOutlineFileDownload } from "react-icons/md";
import { motion, scale } from "motion/react";

const Card = ({ data, reference }) => {
    return (
        <motion.div drag dragConstraints = {reference} whileDrag={{scale:1.2}} className='relative flex-shrink-0 w-60 h-72 rounded-[42px] bg-zinc-900/90 text-white py-10 px-8 overflow-hidden '>
            <FaRegFileAlt />
            <p className='text-sm mt-5 leading-tight font-semibold'>{data.desc}</p>
            <div className='footer absolute bottom-0 w-full left-0'>
                <div className='flex items-center justify-between mb-4 py-3 px-2'>
                    <h5>{data.size}</h5>
                    <span className='w-8 h-8 bg-zinc-500 rounded-full flex items-center justify-center'>
                        {data.close ? <IoClose /> : <MdOutlineFileDownload size="0.9em" color='#fff' />}
                    </span>
                </div>
                {
                    data.tag.isOpen && (
                        <div className={`tag w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
                            <h3 className='text-md font-semibold'>{data.tag.tagTitle}</h3>
                        </div>
                    ) }
            </div>
        </motion.div>
    )
}

export default Card
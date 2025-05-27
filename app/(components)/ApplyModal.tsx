"use client"
import { FramerModal, ModalContent } from "@/ui-components/DialogBox";
import { useRouter } from "next/navigation";
import React from "react";

const ApplyModal: React.FC<{ open: boolean; setOpen: (open: boolean) => void }> = ({
    open,
    setOpen,
}) => {
    const redirect = useRouter()
    return (
        <FramerModal open={open} setOpen={setOpen}>
            <ModalContent>
                <div className='font-mono flex flex-col space-y-1.5 text-center sm:text-left '>
                    <h2 className='text-2xl font-semibold leading-none text-center tracking-tight'>
                        Apply for?
                    </h2>
                    <div className='grid gap-4 py-4'>
                        <button
                            onClick={() => {
                                redirect.push("https://deformity.ai/d/C-P5znqtG_ZZ")
                            }}
                            className="relative w-full p-3 border-2 border-black text-xl rounded-md overflow-hidden z-10 group transition-colors duration-500"
                        >
                            <span className="relative z-20 transition-colors duration-500 group-hover:text-white">
                                Partnership
                            </span>
                            <span
                                className="absolute inset-0 w-0 bg-black/85 z-10 transition-all duration-500 ease-in-out group-hover:w-full"
                                style={{ zIndex: 0 }}
                            />
                        </button>

                        {/* <button
                            onClick={() => alert("Content Creator")}
                            className="relative w-full p-3 border-2 border-black text-xl rounded-md overflow-hidden z-10 group transition-colors duration-500"
                        >
                            <span className="relative z-20 transition-colors duration-500 group-hover:text-white">
                                Content Creator
                            </span>
                            <span
                                className="absolute inset-0 w-0 bg-black/85 z-10 transition-all duration-500 ease-in-out group-hover:w-full"
                                style={{ zIndex: 0 }}
                            />
                        </button> */}
                    </div>
                </div>
            </ModalContent>
        </FramerModal>
    );
};

export default ApplyModal;


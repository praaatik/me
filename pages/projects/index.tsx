import Image from 'next/image'
import Link from 'next/link'
import { ThemeContext } from 'pages/_app'
import { projects } from 'projects'
import React, { useContext } from 'react'
import { AiFillGithub } from "react-icons/ai"
import { CiPlay1 } from "react-icons/ci"

const Project = () => {
    const context = useContext(ThemeContext);

    const lightStyles = {
        containerStyles: "cursor-pointer mx-auto w-fit md:mx-8 text-dark-background-1",
    }
    const darkStyles = {
        containerStyles: "cursor-pointer mx-auto w-fit md:mx-8 text-light-background-1",
    };

    return <div className={context?.isThemeDark ? darkStyles.containerStyles : lightStyles.containerStyles}>
        <div>
            <h2 className="text-3xl my-2 ">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 w-full">
                {
                    projects.map(project => {
                        return <div className="flex justify-between border-2 border-light-sea p-4 w-11/12 my-2" key={project.id}>
                            <div>
                                <Link href={project.blogURL} passHref>
                                    <div>{project.title}</div>
                                </Link>
                                <div>{project.subtitle}</div>
                                <div className="flex justify-evenly mt-2">
                                    {project.demoURL && <a href={project.demoURL} rel="noopener noreferrer" target="_blank">
                                        <CiPlay1 className="w-7 h-7" />
                                    </a>}
                                    {project.githubURL && <a href={project.githubURL} rel="noopener noreferrer" target="_blank">
                                        <AiFillGithub className="w-7 h-7" />
                                    </a>}
                                </div>
                            </div>
                            <Image src={project.logo} alt=" Project logo" unoptimized={true} width={30} height={30} className="object-contain" />
                        </div>
                    })
                }
            </div>
        </div>
    </div >
}

export default Project
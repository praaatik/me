import Image from 'next/image'
import Link from 'next/link'
import { ThemeContext } from 'pages/_app'
import React, { useContext } from 'react'

interface Props {
    title: string
    subtitle: string
    logo: string
    page: string
    source?: string
    demo?: string
}

const projects: Props[] = [
    {
        title: "Habituate Me",
        subtitle: "Track your daily habits",
        page: "/blog/habituate-me",
        logo: "/logos/habituate-me.png",
        source: "habituate-me.onrender.com",
        demo: "habituate-me.onrender.com"
    },
    {
        title: "Photogram",
        page: "/blog/photogram",
        subtitle: "View your photos",
        source: "https://github.com/praaatik/photogram_v2",
        logo: "/logos/habituate-me.png",
    },
    {
        title: "Save this for me",
        subtitle: "Save your bookmarks",
        page: "/blog/save-this-for-me",
        source: "https://savethisforme.vercel.app",
        demo: "https://savethisforme.vercel.app",
        logo: "/logos/savethisforme.svg",
    },
    {
        title: "Stackexchange Digest",
        subtitle: "View stackexchage sites",
        page: "/blog/stackexchange-digest",
        source: "https://github.com/praaatik/stackexchange-digest",
        logo: "/logos/se-digest.png",
    },
    {
        title: "Movie Tracker",
        subtitle: "Track your watched movies",
        page: "/blog/movie-tracker",
        logo: "/logos/habituate-me.png",
    },
    {
        title: "Pi Peekaboo",
        subtitle: "Search for an occurence in Pi",
        page: "/blog/pi-peekaboo",
        logo: "/logos/pi-peekaboo.svg",
    }
]

const Project = () => {
    const context = useContext(ThemeContext);

    const lightStyles = {
        containerStyles: "cursor-pointer mx-auto w-full md:mx-0 text-dark-background-1",
    }
    const darkStyles = {
        containerStyles: "cursor-pointer mx-auto w-full md:mx-0 text-light-background-1",
    };

    return <div className={context?.isThemeDark ? darkStyles.containerStyles : lightStyles.containerStyles}>
        <div>
            <h2 className="text-3xl my-2 mx-10">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 w-full">
                {
                    projects.map(project => {
                        return <Link href={project.page} passHref key="11">
                            <div className="flex justify-between border-2 border-light-sea p-4 w-11/12 my-2" >
                                <div>
                                    <div>{project.title}</div>
                                    <div>{project.subtitle}</div>
                                </div>

                                {/* <div className="rounded-md border-2 border-black w-fit h-fit my-auto">
                                    logo
                                </div> */}
                                <Image src={project.logo} alt=" Project logo" unoptimized={true} width={30} height={30} className="object-contain" />
                            </div>

                        </Link>

                    })
                }
            </div>

        </div>

    </div>
}

export default Project
'use client'

import Image from 'next/image'

interface ProjectCardProps {
  altText: string
  projectTitle: string
  projectDescription: string
  builtWith: string
  imageUrl: string
  projectUrl?: string
}

export const ProjectCard = ({
  altText,
  builtWith,
  projectDescription,
  projectTitle,
  imageUrl,
  projectUrl,
}: ProjectCardProps) => {
  const handleLinkClick = (e: React.MouseEvent) => {
    e.preventDefault()
    window.open(projectUrl, '_blank')
  }

  return (
    <div
      className="group relative overflow-hidden rounded-lg flex flex-col"
      onClick={handleLinkClick}
    >
      <div className="flex-grow">
        <Image
          alt={altText}
          className="h-60 w-full object-cover transition-all duration-300 group-hover:scale-105"
          height={300}
          src={require(`../../assets/projects/${imageUrl}`)}
          style={{
            aspectRatio: '400/300',
            objectFit: 'cover',
          }}
          width={400}
        />
      </div>
      <div className="h-full bg-white p-4 dark:bg-gray-950">
        <h3 className="text-lg font-semibold text-black">{projectTitle}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {projectDescription}
        </p>
        <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          Contruido com: {builtWith}
        </div>
      </div>
    </div>
  )
}

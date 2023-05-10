import Image from 'next/image'
import SectionHeader from '../../elements/SectionHeader/SectionHeader'
import styles from './Team.module.scss'
import Button from '../../elements/Button/Button'

interface TeamMemberStructure {
  photoUrl: string,
  name: string,
  position: string,
  description: string
}

const TeamMember = ({ photoUrl, name, position, description }: TeamMemberStructure) => {
  return (
    <div className={styles.team__member}>
      <div className={styles.team__member_header}>
        <div
          style={{background: `linear-gradient(0deg, #B9FF66, #B9FF66), url(${photoUrl});`}}
          className={styles.team__member_header__image}
        />
        <div className={styles.team__member_header__text}>
          <h5>{name}</h5>
          <p>{position}</p>
        </div>
      </div>
      <div className={styles.team__member_description}>
        <p>{description}</p>
      </div>
      <div className={styles.team__member_icon}>
        <Image
          src='/icons/LinkedInIcon.svg'
          alt='Sign icon'
          style={{objectFit: 'contain'}}
          fill
        />
      </div>
    </div>
  )
}

const teamMembers: TeamMemberStructure[] = [
  { photoUrl: '/images/MockImage.jpg', name: 'John Smith', position: 'CEO and Founder', description: '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy' },
  { photoUrl: '/images/MockImage.jpg', name: 'Jane Doe', position: 'Director of Operations', description: '7+ years of experience in project management and team leadership. Strong organizational and communication skills' },
  { photoUrl: '/images/MockImage.jpg', name: 'Michael Brown', position: 'Senior SEO Specialist', description: '5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization' },
  { photoUrl: '/images/MockImage.jpg', name: 'Emily Johnson', position: 'PPC Manager', description: '3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis' },
  { photoUrl: '/images/MockImage.jpg', name: 'Brian Williams', position: 'Social Media Specialist', description: '4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement' },
  { photoUrl: '/images/MockImage.jpg', name: 'Sarah Kim', position: 'Content Creator', description: '2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries' },
]

const Team = (): JSX.Element => {
  return (
    <section className={styles.team}>
      <SectionHeader
        title='Team'
        description='Meet the skilled and experienced team behind our successful digital marketing strategies'
      />
      <div className={styles.team__members}>
        { teamMembers.map((member: TeamMemberStructure, index: number) => (
          <TeamMember
            key={index}
            photoUrl={member.photoUrl}
            name={member.name}
            position={member.position}
            description={member.description}
          />
        )) }
      </div>
      <div className={styles.team__button}>
        <Button text='See all team' />
      </div>
    </section>
  )
}

export default Team